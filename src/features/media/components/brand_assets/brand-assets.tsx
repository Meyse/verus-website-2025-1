// Brand assets component displaying logos, icons, and brand guidelines
/**
 * File updated: replaced next/link with <a> for ZIP download to ensure
 * proper download behavior in production; kept absolute path.
 */

import {brand_assets} from '@/data/brand-assets'
import {Download} from 'lucide-react'

import {BrandAssetsLogos} from './brand-assets-logos'
import {BrandAssetsWallpaper} from './brand-assets-wallpaper'

export function BrandAssets() {
  // Separate assets by type
  const logoAndIconAssets = brand_assets.filter(
    (asset) => asset.type === 'logo' || asset.type === 'icon'
  )
  const wallpaperAssets = brand_assets.filter(
    (asset) => asset.type === 'wallpaper'
  )

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

      <BrandAssetsLogos logoAssets={logoAndIconAssets} />
      <BrandAssetsWallpaper wallpaperAssets={wallpaperAssets} />
    </div>
  )
}
