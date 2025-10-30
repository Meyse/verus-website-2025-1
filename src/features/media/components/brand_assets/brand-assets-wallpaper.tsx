/**
 * File updated: replaced next/link with <a> for static wallpaper downloads
 * to ensure proper download behavior in production; kept absolute paths.
 */
import type { AssetProps } from '@/data/brand-assets'

import Image from 'next/image'

import { Download } from 'lucide-react'

export function BrandAssetsWallpaper({
  filteredWallpaper,
}: {
  filteredWallpaper: AssetProps[]
}) {
  if (filteredWallpaper.length === 0) return null
  return (
    <>
      <div className="mb-6">
        <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[24px]">
          Desktop Wallpapers
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredWallpaper.map((asset, index) => (
          <div
            key={`wallpaper-${index}`}
            className="border border-blue-100/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-lg"
          >
            <h3 className="mb-2 text-[18px] font-medium text-gray-900 dark:text-white">
              {asset.name}
            </h3>

            <p className="mb-4 text-[14px] text-gray-600 dark:text-gray-300">
              {asset.usage}
            </p>

            <div className="mb-6 overflow-hidden rounded-lg">
              <div
                className="relative"
                style={{
                  width: '100%',
                  paddingTop: '56.25%' /* 16:9 aspect ratio */,
                }}
              >
                <Image
                  src={asset.pngPath}
                  alt={asset.name}
                  fill
                  // objectFit="cover"
                  quality={60} // Lower quality for preview to reduce file size
                  priority={false} // Enable lazy loading
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex space-x-3">
              <a
                href={asset.pngPath}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex h-[40px] flex-1 items-center justify-center rounded-lg border border-blue-600 bg-verus-blue px-6 text-[14px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-blue-700 hover:bg-blue-700"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Wallpaper
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
