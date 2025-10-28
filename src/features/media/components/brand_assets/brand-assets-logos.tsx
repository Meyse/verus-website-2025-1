/**
 * File updated: replaced next/link with <a> for static asset downloads (SVG/PNG)
 * to ensure proper download behavior in production; kept absolute paths.
 */
import type { AssetProps } from '@/data/brand-assets'

import Image from 'next/image'

export function BrandAssetsLogos({
  filteredLogos,
}: {
  filteredLogos: AssetProps[]
}) {
  if (filteredLogos.length === 0) return null
  return (
    <>
      {/* Section 1: Logos and Icons */}
      <div className="mb-6">
        <h3 className="text-[18px] font-medium text-gray-900 dark:text-white md:text-[24px]">
          Logos & Icons
        </h3>
      </div>
      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredLogos.map((asset, index) => (
          <div
            key={`logo-icon-${index}`}
            className="border border-blue-100/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-lg"
          >
            <h3 className="mb-2 text-[18px] font-medium text-gray-900 dark:text-white">
              {asset.name}
            </h3>

            <p className="mb-4 text-[14px] text-gray-600 dark:text-gray-300">
              {asset.usage}
            </p>

            <div
              className={`mb-6 flex items-center justify-center rounded-lg px-6 py-8 ${
                asset.color === 'white' || asset.color === 'dark'
                  ? 'bg-gray-800'
                  : 'bg-gray-100'
              }`}
            >
              <div
                className="relative"
                style={{width: asset.width, height: asset.height}}
              >
                <Image
                  src={asset.svgPath || asset.pngPath}
                  alt={asset.name}
                  fill
                  className="object-contain"
                  // objectFit="contain"
                />
              </div>
            </div>

            <div className="flex space-x-3">
              {asset.svgPath && (
                <a
                  href={asset.svgPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="flex h-[40px] items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-6 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700"
                >
                  SVG
                </a>
              )}
              <a
                href={asset.pngPath}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex h-[40px] items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-6 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:border-blue-300 dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700"
              >
                PNG
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Section 2: Brand Guidelines */}
      <div className="mb-12 border border-blue-100/80 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50 md:rounded-lg md:p-8">
        <h3 className="mb-4 text-[18px] font-medium text-gray-900 dark:text-white md:text-[22px]">
          Brand Guidelines
        </h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Do's section */}
          <div>
            <h4 className="mb-3 text-[16px] font-medium text-green-600 dark:text-green-400">
              Do's
            </h4>
            <ul className="list-disc space-y-2 pl-5 text-[14px] text-gray-600 dark:text-gray-300 md:text-[15px]">
              <li>Use the blue logo on light backgrounds</li>
              <li>Use the white logo on very dark backgrounds</li>
              <li>Maintain the logo's aspect ratio when resizing</li>
              <li>Allow adequate spacing around the logo</li>
              <li>Use the SVG format when possible for best quality</li>
            </ul>
          </div>

          {/* Don'ts section */}
          <div>
            <h4 className="mb-3 text-[16px] font-medium text-red-600 dark:text-red-400">
              Don'ts
            </h4>
            <ul className="list-disc space-y-2 pl-5 text-[14px] text-gray-600 dark:text-gray-300 md:text-[15px]">
              <li>Don't deform or skew the logo</li>
              <li>Don't use the white logo on light backgrounds</li>
              <li>Don't add effects like shadows or outlines to the logo</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
