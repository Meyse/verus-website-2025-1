import type {AssetProps} from '@/data/brand-assets'

import Image from 'next/image'

import {CheckCircle, XCircle} from 'lucide-react'

import {cn} from '@/lib/utils'

const doGuidelines = [
  'Use the blue logo on light backgrounds',
  'Use the white logo on very dark backgrounds',
  'Maintain the logo aspect ratio when resizing',
  'Allow adequate spacing around the logo',
  'Use SVG format when possible',
] as const

const avoidGuidelines = [
  'Do not deform or skew the logo',
  'Do not use the white logo on light backgrounds',
  'Do not add shadows or outlines to the logo',
] as const

function AssetFileLinks({asset}: {asset: AssetProps}) {
  return (
    <div className="flex flex-wrap gap-3">
      {asset.svgPath && (
        <a
          href={asset.svgPath}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex h-[40px] items-center justify-center rounded-lg border border-gray-300 bg-white/90 px-5 text-[14px] font-medium text-gray-800 transition-colors hover:border-gray-400 hover:bg-white dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:border-gray-600"
        >
          SVG
        </a>
      )}
      <a
        href={asset.pngPath}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="flex h-[40px] items-center justify-center rounded-lg border border-gray-300 bg-white/90 px-5 text-[14px] font-medium text-gray-800 transition-colors hover:border-gray-400 hover:bg-white dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:border-gray-600"
      >
        PNG
      </a>
    </div>
  )
}

function LogoAssetCell({asset, index}: {asset: AssetProps; index: number}) {
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

      <div
        className={cn(
          'mb-6 flex min-h-[180px] items-center justify-center rounded-lg px-6 py-8',
          asset.color === 'white' || asset.color === 'dark'
            ? 'bg-gray-800'
            : 'bg-gray-100 dark:bg-white'
        )}
      >
        <div
          className="relative max-w-full"
          style={{width: asset.width, height: asset.height}}
        >
          <Image
            src={asset.svgPath || asset.pngPath}
            alt={asset.name}
            fill
            className="object-contain"
          />
        </div>
      </div>

      <AssetFileLinks asset={asset} />
    </article>
  )
}

export function BrandAssetsLogos({logoAssets}: {logoAssets: AssetProps[]}) {
  if (logoAssets.length === 0) return null

  return (
    <>
      <div className="border-b border-gray-200 px-8 py-8 dark:border-gray-800 md:px-10">
        <h2 className="text-[24px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
          Logos and icons
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {logoAssets.map((asset, index) => (
          <LogoAssetCell
            key={`${asset.name}-${asset.pngPath}`}
            asset={asset}
            index={index}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 border-t border-gray-200 dark:border-gray-800 md:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)]">
        <div className="px-8 py-10 md:px-10 md:py-12">
          <div className="mb-6 h-32 rounded-lg bg-verus-blue shadow-sm md:h-40" />
          <h2 className="text-[24px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
            Brand color
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            Use Verus Blue as the primary color for identity elements, links,
            buttons, and accents.
          </p>

          <dl className="mt-6 grid grid-cols-1 gap-4 text-[14px] md:grid-cols-2">
            <div>
              <dt className="text-gray-500 dark:text-gray-400">HEX</dt>
              <dd className="mt-1 font-medium text-gray-800 dark:text-white">
                #3165D4
              </dd>
            </div>
            <div>
              <dt className="text-gray-500 dark:text-gray-400">RGB</dt>
              <dd className="mt-1 font-medium text-gray-800 dark:text-white">
                49, 101, 212
              </dd>
            </div>
          </dl>
        </div>

        <div className="border-t border-gray-200 px-8 py-10 dark:border-gray-800 md:border-l md:border-t-0 md:px-10 md:py-12">
          <h2 className="mb-6 text-[24px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
            Brand guidelines
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 inline-flex items-center gap-2 text-[16px] font-medium text-green-600 dark:text-green-400 md:text-[18px]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-50 text-green-600 dark:bg-green-950/50 dark:text-green-400">
                  <CheckCircle className="h-4 w-4" />
                </span>
                Do
              </h3>
              <ul className="space-y-3 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[16px]">
                {doGuidelines.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle className="mt-[0.35em] h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 inline-flex items-center gap-2 text-[16px] font-medium text-red-600 dark:text-red-400 md:text-[18px]">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400">
                  <XCircle className="h-4 w-4" />
                </span>
                Avoid
              </h3>
              <ul className="space-y-3 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[16px]">
                {avoidGuidelines.map((item) => (
                  <li key={item} className="flex gap-3">
                    <XCircle className="mt-[0.35em] h-4 w-4 flex-shrink-0 text-red-600 dark:text-red-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
