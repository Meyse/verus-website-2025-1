"use client"
import { LiquidityTooltip } from "./liquidity-tooltip"
import { useState, useEffect } from "react"

interface BridgeData {
  supply: number | null;
  reserveCurrencies: {
    VRSC: number | null;
    "DAI.vETH": number | null;
    "MKR.vETH": number | null;
    vETH: number | null;
  };
  prices: {
    VRSC: number | null;
    "DAI.vETH": number | null;
    "MKR.vETH": number | null;
    vETH: number | null;
  };
  priceComparisons: {
    VRSC: number | null;
    "DAI.vETH": number | null;
    "MKR.vETH": number | null;
    vETH: number | null;
  };
  bridgeVethPrice: number | null;
  totalValue: number | null;
  loading: boolean;
  error: string | null;
}

interface ReserveCurrency {
  currencyid: string;
  reserves: number;
  priceinreserve: number;
  weight: number;
}

type CurrencyMap = {
  [key: string]: keyof BridgeData['reserveCurrencies'];
}

export function BridgeLiquidityInfo() {
  const [bridgeData, setBridgeData] = useState<BridgeData>({
    supply: null,
    reserveCurrencies: {
      VRSC: null,
      "DAI.vETH": null,
      "MKR.vETH": null,
      vETH: null
    },
    prices: {
      VRSC: null,
      "DAI.vETH": null,
      "MKR.vETH": null,
      vETH: null
    },
    priceComparisons: {
      VRSC: null,
      "DAI.vETH": null,
      "MKR.vETH": null,
      vETH: null
    },
    bridgeVethPrice: null,
    totalValue: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchBridgeData = async () => {
      try {
        // Use our internal API endpoint instead of calling Verus API directly
        // Add cache busting parameter and set cache control in request headers
        const response = await fetch(`/api/bridge?t=${Date.now()}`, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        setBridgeData({
          supply: data.supply,
          reserveCurrencies: {
            VRSC: data.reserves.VRSC,
            "DAI.vETH": data.reserves["DAI.vETH"],
            "MKR.vETH": data.reserves["MKR.vETH"],
            vETH: data.reserves.vETH
          },
          prices: {
            VRSC: data.prices.VRSC,
            "DAI.vETH": data.prices["DAI.vETH"],
            "MKR.vETH": data.prices["MKR.vETH"],
            vETH: data.prices.vETH
          },
          priceComparisons: {
            VRSC: data.priceComparisons?.VRSC,
            "DAI.vETH": data.priceComparisons?.["DAI.vETH"],
            "MKR.vETH": data.priceComparisons?.["MKR.vETH"],
            vETH: data.priceComparisons?.vETH
          },
          bridgeVethPrice: data.bridgeVethPrice,
          totalValue: data.totalValue,
          loading: false,
          error: data.error || null
        });
      } catch (error) {
        console.error('Error fetching bridge data:', error);
        setBridgeData(prev => ({
          ...prev,
          loading: false,
          error: 'Failed to load bridge data'
        }));
      }
    };

    fetchBridgeData();
  }, []);

  // Format in reserves numbers or show n/a for null values
  const formatReserves = (num: number | null) => {
    if (num === null) return "n/a";
    return num.toLocaleString(undefined, { 
      minimumFractionDigits: 3,
      maximumFractionDigits: 3
    });
  };

  // Format price numbers with appropriate decimal precision or show n/a for null values
  const formatPrice = (price: number | null, currency: string) => {
    if (price === null) return "n/a";
    
    if (currency === 'VRSC' || currency === 'DAI.vETH') {
      // Show with 2 decimal places
      return price.toFixed(2);
    } else if (currency === 'vETH' || currency === 'MKR.vETH') {
      // Show with 6 decimal places for small values
      return price.toFixed(6);
    } else {
      // Bridge.vETH price
      return price.toFixed(6);
    }
  };

  // Format the total value with M suffix or show n/a for null values
  const formatTotalValue = (value: number | null) => {
    if (value === null) return "n/a";
    
    if (value >= 1000000) {
      return (value / 1000000).toFixed(2) + 'M';
    } else {
      return value.toLocaleString();
    }
  };

  // Format price comparison percentage with sign and 2 decimal places or show n/a for null values
  const formatPriceComparison = (percentage: number | null) => {
    if (percentage === null) return "n/a";
    if (percentage === 0) return "0%";
    
    const formattedPercentage = Math.abs(percentage).toFixed(2);
    return percentage > 0 ? `+${formattedPercentage}%` : `-${formattedPercentage}%`;
  };

  // Get appropriate class for price comparison (green for positive, red for negative)
  const getPriceComparisonClass = (percentage: number | null) => {
    if (percentage === null) return "text-gray-500 dark:text-gray-400";
    if (percentage === 0) return "text-gray-500 dark:text-gray-400";
    return percentage > 0 ? "text-[#00AA25] dark:text-green-400" : "text-red-500 dark:text-red-400";
  };

  return (
      <div className="w-screen md:w-[700px] relative">
      {/* Combined Table */}
      <div className="w-full bg-white dark:bg-gray-900 rounded-none md:rounded-lg border-x-0 md:border-x border-y border-[#E9EFFC] dark:border-gray-800 shadow-sm backdrop-blur-sm">
        {/* Bridge.vETH Section */}
        <div className="grid grid-cols-[1fr,1fr,1fr] gap-1 md:gap-4 p-3 md:p-4 border-b border-[#E9EFFC] dark:border-gray-800 bg-white/50 dark:bg-gray-900/50">
          <div className="flex items-center gap-3">
            <span className="text-[12px] text-gray-500 dark:text-gray-400"></span>
          </div>
          <div className="flex items-center justify-end gap-1">
            <LiquidityTooltip content="Total supply of Bridge.vETH" />
            <span className="text-[10px] md:text-[12px] text-gray-500 dark:text-gray-400 text-right">Supply</span>
          </div>
          <div className="flex items-center justify-end gap-1">
            <LiquidityTooltip content="Current price in DAI (1 DAI = 1 USD)" />
            <span className="text-[10px] md:text-[12px] text-gray-500 dark:text-gray-400 text-right">Price in DAI</span>
          </div>
        </div>
        <div className="grid grid-cols-[1fr,1fr,1fr] gap-1 md:gap-4 p-4 md:p-4 border-b border-[#E9EFFC] dark:border-gray-800">
          <div className="flex items-center gap-3">
            <img src="/img/bridgeveth.svg" alt="Bridge.vETH" className="h-6 w-6" />
            <span className="text-[13px] md:text-[16px] font-medium text-gray-900 dark:text-gray-100">Bridge.vETH</span>
          </div>
          <div className="flex items-center justify-end gap-1">
            {bridgeData.loading ? (
              <div className="animate-pulse h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ) : (
              <span className="text-[12px] md:text-[16px] text-gray-500 dark:text-gray-400 tabular-nums">
                {formatReserves(bridgeData.supply)}
              </span>
            )}
          </div>
          <div className="flex items-center justify-end gap-1">
            {bridgeData.loading ? (
              <div className="animate-pulse h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ) : (
              <span className="text-[12px] md:text-[16px] font-medium text-black dark:text-white tabular-nums">
                {bridgeData.bridgeVethPrice === null ? "n/a" : bridgeData.bridgeVethPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Reserve Currencies Header */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-1 md:gap-4 p-4 md:p-4 border-b border-[#E9EFFC] dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
          <span className="text-[10px] md:text-[12px] text-gray-500 dark:text-gray-400">Bridge.vETH<br />reserve currencies</span>
          <div className="flex items-center justify-end gap-1">
            <LiquidityTooltip content="Amount of the currency in the bridge reserves" />
            <span className="text-[10px] md:text-[12px] text-gray-500 dark:text-gray-400 text-right">In reserves</span>
          </div>
          <div className="flex items-center justify-end gap-1">
            <LiquidityTooltip content="Current price of the currency in DAI (1 DAI = 1 USD)" />
            <span className="text-[10px] md:text-[12px] text-gray-500 dark:text-gray-400 text-right">Price in DAI</span>
          </div>
          <div className="flex items-center justify-end gap-1">
            <LiquidityTooltip content="Price difference compared to Coinpaprika" />
            <span className="text-[10px] md:text-[12px] text-gray-500 dark:text-gray-400 text-right">Compared<br />to Coinpaprika</span>
          </div>
        </div>

        {/* VRSC Row */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-1 md:gap-4 p-4 md:p-4 border-b border-[#E9EFFC] dark:border-gray-800 hover:bg-gray-50/70 dark:hover:bg-gray-800/30 transition-colors">
          <div className="flex items-center gap-3">
            <img src="/img/verus-icon.svg" alt="VRSC" className="h-6 w-6" />
            <span className="text-[13px] md:text-[16px] font-medium text-gray-900 dark:text-gray-100">VRSC</span>
          </div>
          <div className="flex items-center justify-end">
            {bridgeData.loading ? (
              <div className="animate-pulse h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ) : (
              <span className="text-[12px] md:text-[16px] text-gray-500 dark:text-gray-400 tabular-nums">
                {formatReserves(bridgeData.reserveCurrencies.VRSC)}
              </span>
            )}
          </div>
          <div className="flex items-center justify-end">
            {bridgeData.loading ? (
              <div className="animate-pulse h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ) : (
              <span className="text-[12px] md:text-[16px] font-medium text-black dark:text-white tabular-nums">
                {formatPrice(bridgeData.prices.VRSC, 'VRSC')}
              </span>
            )}
          </div>
          <div className={`flex items-center justify-end ${getPriceComparisonClass(bridgeData.priceComparisons.VRSC)}`}>
            {bridgeData.loading ? (
              <div className="animate-pulse h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ) : (
              <span className="text-[12px] md:text-[16px] tabular-nums">
                {formatPriceComparison(bridgeData.priceComparisons.VRSC)}
              </span>
            )}
          </div>
        </div>

        {/* DAI Row */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-1 md:gap-4 p-4 md:p-4 border-b border-[#E9EFFC] dark:border-gray-800 hover:bg-gray-50/70 dark:hover:bg-gray-800/30 transition-colors">
          <div className="flex items-center gap-3">
            <img src="/img/dai.svg" alt="DAI" className="h-6 w-6" />
            <div className="flex flex-col">
              <span className="text-[13px] md:text-[16px] font-medium leading-tight text-gray-900 dark:text-gray-100">DAI</span>
              <span className="text-[10px] md:text-[12px] text-gray-500 dark:text-gray-400">DAI.vETH</span>
            </div>
          </div>
          <div className="flex items-center justify-end">
            {bridgeData.loading ? (
              <div className="animate-pulse h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ) : (
              <span className="text-[12px] md:text-[16px] text-gray-500 dark:text-gray-400 tabular-nums">
                {formatReserves(bridgeData.reserveCurrencies["DAI.vETH"])}
              </span>
            )}
          </div>
          <div className="flex items-center justify-end">
            {bridgeData.loading ? (
              <div className="animate-pulse h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ) : (
              <span className="text-[12px] md:text-[16px] font-medium text-black dark:text-white tabular-nums">
                {formatPrice(bridgeData.prices["DAI.vETH"], 'DAI.vETH')}
              </span>
            )}
          </div>
          <div className={`flex items-center justify-end ${getPriceComparisonClass(bridgeData.priceComparisons["DAI.vETH"])}`}>
            {bridgeData.loading ? (
              <div className="animate-pulse h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ) : (
              <span className="text-[12px] md:text-[16px] tabular-nums">
                {formatPriceComparison(bridgeData.priceComparisons["DAI.vETH"])}
              </span>
            )}
          </div>
        </div>

        {/* ETH Row */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-1 md:gap-4 p-4 md:p-4 border-b border-[#E9EFFC] dark:border-gray-800 hover:bg-gray-50/70 dark:hover:bg-gray-800/30 transition-colors">
          <div className="flex items-center gap-3">
            <img src="/img/eth.png" alt="ETH" className="h-6 w-6" />
            <div className="flex flex-col">
              <span className="text-[13px] md:text-[16px] font-medium leading-tight text-gray-900 dark:text-gray-100">ETH</span>
              <span className="text-[10px] md:text-[12px] text-gray-500 dark:text-gray-400">vETH</span>
            </div>
          </div>
          <div className="flex items-center justify-end">
            {bridgeData.loading ? (
              <div className="animate-pulse h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ) : (
              <span className="text-[12px] md:text-[16px] text-gray-500 dark:text-gray-400 tabular-nums">
                {formatReserves(bridgeData.reserveCurrencies.vETH)}
              </span>
            )}
          </div>
          <div className="flex items-center justify-end">
            {bridgeData.loading ? (
              <div className="animate-pulse h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ) : (
              <span className="text-[12px] md:text-[16px] font-medium text-black dark:text-white tabular-nums">
                {formatPrice(bridgeData.prices.vETH, 'vETH')}
              </span>
            )}
          </div>
          <div className={`flex items-center justify-end ${getPriceComparisonClass(bridgeData.priceComparisons.vETH)}`}>
            {bridgeData.loading ? (
              <div className="animate-pulse h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ) : (
              <span className="text-[12px] md:text-[16px] tabular-nums">
                {formatPriceComparison(bridgeData.priceComparisons.vETH)}
              </span>
            )}
          </div>
        </div>

        {/* MKR Row */}
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr] gap-1 md:gap-4 p-4 md:p-4 hover:bg-gray-50/70 dark:hover:bg-gray-800/30 transition-colors">
          <div className="flex items-center gap-3">
            <img src="/img/mkr.svg" alt="MKR" className="h-6 w-6" />
            <div className="flex flex-col">
              <span className="text-[13px] md:text-[16px] font-medium leading-tight text-gray-900 dark:text-gray-100">MKR</span>
              <span className="text-[10px] md:text-[12px] text-gray-500 dark:text-gray-400">MKR.vETH</span>
            </div>
          </div>
          <div className="flex items-center justify-end">
            {bridgeData.loading ? (
              <div className="animate-pulse h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ) : (
              <span className="text-[12px] md:text-[16px] text-gray-500 dark:text-gray-400 tabular-nums">
                {formatReserves(bridgeData.reserveCurrencies["MKR.vETH"])}
              </span>
            )}
          </div>
          <div className="flex items-center justify-end">
            {bridgeData.loading ? (
              <div className="animate-pulse h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ) : (
              <span className="text-[12px] md:text-[16px] font-medium text-black dark:text-white tabular-nums">
                {formatPrice(bridgeData.prices["MKR.vETH"], 'MKR.vETH')}
              </span>
            )}
          </div>
          <div className={`flex items-center justify-end ${getPriceComparisonClass(bridgeData.priceComparisons["MKR.vETH"])}`}>
            {bridgeData.loading ? (
              <div className="animate-pulse h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            ) : (
              <span className="text-[12px] md:text-[16px] tabular-nums">
                {formatPriceComparison(bridgeData.priceComparisons["MKR.vETH"])}
              </span>
            )}
          </div>
        </div>

        {/* Total Value Row */}
        <div className="grid grid-cols-2 gap-1 md:gap-4 p-4 md:p-4 bg-gray-50 dark:bg-gray-800/50 border-t border-[#E9EFFC] dark:border-gray-800">
          <span className="text-[13px] md:text-[16px] text-black dark:text-white font-medium">Total value of liquidity</span>
          {bridgeData.loading ? (
            <div className="animate-pulse h-4 w-36 bg-gray-200 dark:bg-gray-700 rounded ml-auto"></div>
          ) : (
            <span className="text-[13px] md:text-[16px] text-black dark:text-white font-medium text-right tabular-nums">
              {bridgeData.totalValue === null ? "n/a" : formatTotalValue(bridgeData.totalValue) + " DAI"}
            </span>
          )}
        </div>
      </div>
      </div>
  )
}