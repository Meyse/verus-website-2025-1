import {brand_assets} from '@/data/brand-assets'
import {Download} from 'lucide-react'

import {Button} from '@/components/ui/button'

import {BrandAssetsLogos} from './brand-assets-logos'
import {BrandAssetsWallpaper} from './brand-assets-wallpaper'

export function BrandAssets() {
  const logoAndIconAssets = brand_assets.filter(
    (asset) => asset.type === 'logo' || asset.type === 'icon'
  )
  const wallpaperAssets = brand_assets.filter(
    (asset) => asset.type === 'wallpaper'
  )

  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div className="grid grid-cols-1 border-b border-gray-200 dark:border-gray-800 md:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.4fr)]">
        <div className="px-8 py-10 md:px-10 md:py-12">
          <h2 className="mb-4 text-[24px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
            Brand assets
          </h2>
          <p className="max-w-[760px] text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            Official Verus logos, icons, colors, and wallpapers for use in
            projects, articles, videos, and community materials.
          </p>
        </div>

        <div className="flex min-w-0 items-center border-t border-gray-200 px-8 py-8 dark:border-gray-800 md:border-l md:border-t-0 md:px-10">
          <Button
            asChild
            variant="verusPrimary"
            size="verusWide"
            className="w-full"
          >
            <a
              href="/img/brand-assets/brand-assets.zip"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download all
              <Download className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      <BrandAssetsLogos logoAssets={logoAndIconAssets} />
      <BrandAssetsWallpaper wallpaperAssets={wallpaperAssets} />
    </section>
  )
}
