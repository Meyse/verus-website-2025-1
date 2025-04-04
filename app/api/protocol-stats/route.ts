/*
* Server-side API for fetching Verus protocol statistics
* - Retrieves data from cryptodashboard.faldt.net using the HTML parser
* - Fixed selectors to match current HTML structure (July 2024)
* - Provides essential data only: 24h volume, total liquidity, and VRSC in pools
* - Implements minimal caching to prevent overwhelming the source
* - Returns raw data in standard format for UI consumption
*/

import { NextResponse } from 'next/server';
import { parse } from 'node-html-parser';

// Cache configuration - reduced to 60 seconds
const CACHE_TIME = 60; // 1 minute in seconds
let cachedData: {
  volume24h: string;
  totalLiquidity: string;
  vrscLiquidity: string;
  timestamp: number;
} | null = null;

// Safely get element by exact CSS selector
const getElementBySelector = (root: any, selector: string): any => {
  try {
    const selectorParts = selector.split(' > ');
    let element = root.querySelector(selectorParts[0]);
    
    if (!element) {
      console.log(`Could not find element with selector part: ${selectorParts[0]}`);
      return null;
    }
    
    for (let i = 1; i < selectorParts.length; i++) {
      const part = selectorParts[i];
      
      if (part.startsWith('div:nth-child(')) {
        const match = part.match(/\((\d+)\)/);
        if (!match) return null;
        
        const index = parseInt(match[1]) - 1;
        const children = element.querySelectorAll('div');
        
        if (index < 0 || index >= children.length) {
          console.log(`Child index ${index+1} is out of bounds. Total children: ${children.length}`);
          return null;
        }
        
        element = children[index];
      } else {
        element = element.querySelector(part);
        
        if (!element) {
          console.log(`Could not find element with selector part: ${part}`);
          return null;
        }
      }
    }
    
    return element;
  } catch (error) {
    console.error('Error parsing selector:', selector, error);
    return null;
  }
};

export async function GET() {
  try {
    // Check if we have valid cached data
    const now = Date.now();
    if (cachedData && now - cachedData.timestamp < CACHE_TIME * 1000) {
      return NextResponse.json(
        { ...cachedData, cached: true },
        { 
          status: 200,
          headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Surrogate-Control': 'no-store',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
    }

    // Fetch fresh data
    console.log('Fetching fresh data from cryptodashboard.faldt.net');
    const response = await fetch('https://cryptodashboard.faldt.net/', {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    const root = parse(html);

    // Get 24h volume data from the total volume value (child 52)
    console.log('Getting 24h volume...');
    let volume24h = "N/A";
    const volume24hContainer = getElementBySelector(root, '#verus-basket-volume-24h > div');
    
    if (volume24hContainer) {
      const children = volume24hContainer.querySelectorAll('div');
      if (children.length >= 52) {
        let volumeText = children[51].text?.trim() || "N/A";
        // Remove any space between $ and numbers
        volumeText = volumeText.replace('$ ', '$');
        volume24h = volumeText;
        console.log('Found 24h volume:', volume24h);
      }
    }

    // Get total liquidity using exact selector
    console.log('Getting total liquidity...');
    let totalLiquidity = "N/A";
    const totalLiquidityElement = getElementBySelector(root, '#verus-basket-reserves > div > div:nth-child(56)');
    
    if (totalLiquidityElement) {
      let liquidityText = totalLiquidityElement.text?.trim() || "N/A";
      // Remove any space between $ and numbers
      liquidityText = liquidityText.replace('$ ', '$');
      totalLiquidity = liquidityText;
      console.log('Found total liquidity:', totalLiquidity);
    }

    // Get VRSC in liquidity pools using the exact verified selector (this one was correct)
    console.log('Getting VRSC in pools...');
    let vrscLiquidity = "N/A";
    const vrscSection = root.querySelector('#prices-card-verus');
    if (vrscSection) {
      // Find the row containing "VerusCoin in baskets"
      const vrscLiquidityRows = vrscSection.querySelectorAll('.card-row-wrapper');
      for (const row of vrscLiquidityRows) {
        const labelElement = row.querySelector('.card-row-item:first-child');
        if (labelElement && labelElement.text?.trim() === 'VerusCoin in baskets') {
          const valueElement = row.querySelector('.card-row-item:nth-child(2)');
          if (valueElement) {
            const value = valueElement.text?.trim();
            if (value) {
              // Format it as "X VRSC"
              vrscLiquidity = value + " VRSC";
              console.log('Found VRSC in pools:', vrscLiquidity);
              break;
            }
          }
        }
      }
    }

    // Prepare data for response
    const data = {
      volume24h,
      totalLiquidity,
      vrscLiquidity,
      timestamp: now
    };

    // Update cache
    cachedData = data;
    
    return NextResponse.json(
      { ...data, cached: false },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Surrogate-Control': 'no-store',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  } catch (error) {
    console.error('Error fetching protocol stats:', error);
    return NextResponse.json(
      { 
        error: 'Failed to retrieve protocol statistics', 
        volume24h: "N/A", 
        totalLiquidity: "N/A",
        vrscLiquidity: "N/A"
      },
      { status: 500 }
    );
  }
} 