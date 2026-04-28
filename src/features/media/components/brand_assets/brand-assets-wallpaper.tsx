import type {AssetProps} from '@/data/brand-assets'

import Image from 'next/image'

import {Download} from 'lucide-react'

import {cn} from '@/lib/utils'

function WallpaperCell({asset, index}: {asset: AssetProps; index: number}) {
  const isDesktopLeftColumn = index % 2 === 0
  const isDesktopBottomRow = index >= 2

  return (
    <article
      className={cn(
        'min-w-0 border-gray-200 px-8 py-8 dark:border-gray-800 md:px-10 md:py-10',
        index > 0 && 'max-md:border-t',
        !isDesktopLeftColumn && 'md:border-l',
        !isDesktopBottomRow && 'md:border-b'
      )}
    >
      <h3 className="mb-2 text-[22px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[26px]">
        {asset.name}
      </h3>
      <p className="mb-5 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[16px]">
        {asset.usage}
      </p>

      <div className="mb-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
        <div className="relative aspect-video w-full">
          <Image
            src={asset.pngPath}
            alt={asset.name}
            fill
            quality={60}
            priority={false}
            className="object-cover"
          />
        </div>
      </div>

      <a
        href={asset.pngPath}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="flex h-[40px] w-full items-center justify-center rounded-lg border border-verus-blue bg-verus-blue px-6 text-[14px] font-medium text-white transition-colors hover:bg-verus-blue/90 md:w-fit"
      >
        Download wallpaper
        <Download className="ml-2 h-4 w-4" />
      </a>
    </article>
  )
}

export function BrandAssetsWallpaper({
  wallpaperAssets,
}: {
  wallpaperAssets: AssetProps[]
}) {
  if (wallpaperAssets.length === 0) return null

  return (
    <section className="border-t border-gray-200 dark:border-gray-800">
      <div className="border-b border-gray-200 px-8 py-8 dark:border-gray-800 md:px-10">
        <h2 className="text-[24px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
          Desktop wallpapers
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {wallpaperAssets.map((asset, index) => (
          <WallpaperCell
            key={`${asset.name}-${asset.pngPath}`}
            asset={asset}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
