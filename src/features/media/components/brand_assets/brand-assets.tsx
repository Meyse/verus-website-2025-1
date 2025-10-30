// Brand assets component displaying logos, icons, and brand guidelines
/**
 * File updated: replaced next/link with <a> for ZIP download to ensure
 * proper download behavior in production; kept absolute path.
 */

import { brand_assets } from '@/data/brand-assets'
import { Download } from 'lucide-react'

import BrandAssetFilterController from './brand-assets-filter-controller'
import { BrandAssetsLogos } from './brand-assets-logos'
import { BrandAssetsWallpaper } from './brand-assets-wallpaper'

type SearchParams = Promise<{[key: string]: string | undefined}>

export async function BrandAssets({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const filter = (await searchParams).filter
  // Separate assets by type
  const logoAndIconAssets = brand_assets.filter(
    (asset) => asset.type === 'logo' || asset.type === 'icon'
  )
  const wallpaperAssets = brand_assets.filter(
    (asset) => asset.type === 'wallpaper'
  )

  // Filter assets based on selection
  const filteredLogoIconAssets =
    !filter || filter === 'all'
      ? logoAndIconAssets
      : logoAndIconAssets.filter((asset) => asset.type === filter)

  const filteredWallpaperAssets =
    !filter || filter === 'all'
      ? wallpaperAssets
      : wallpaperAssets.filter((asset) => asset.type === filter)

  return (
    <div className="px-4 md:px-0">
      <div className="mb-8 md:mb-12">
        <h2 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[28px]">
          Brand Assets
        </h2>
        <p className="mt-2 text-[14px] text-gray-600 dark:text-gray-300 md:text-[16px]">
          Official Verus logos and icons for use in your projects, articles, and
          websites.
        </p>

        <a
          href="/img/brand-assets/brand-assets.zip"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 text-verus-blue hover:underline dark:text-blue-300"
        >
          <Download className="h-4 w-4" />
          <span>Download all Verus brand assets (.zip)</span>
        </a>
      </div>

      <BrandAssetFilterController />
      {/* Section 1: Logos and Icons */}
      <BrandAssetsLogos filteredLogos={filteredLogoIconAssets} />
      {/* Section 2: Brand Guidelines */}
      <BrandAssetsWallpaper filteredWallpaper={filteredWallpaperAssets} />
    </div>
  )
}
