'use client'

import {useState} from 'react'
import Image from 'next/image'

import {ChevronLeft, ChevronRight, X} from 'lucide-react'

interface ProjectScreenshotGalleryProps {
  assetBaseUrl?: string
  projectName: string
  screenshots: string[]
}

export function ProjectScreenshotGallery({
  assetBaseUrl,
  projectName,
  screenshots,
}: ProjectScreenshotGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const assetRoot = assetBaseUrl?.replace(/\/$/, '')

  if (!assetRoot || screenshots.length === 0) return null

  const activeScreenshot =
    lightboxIndex === null ? null : screenshots[lightboxIndex]

  function openLightbox(index: number) {
    setLightboxIndex(index)
  }

  function closeLightbox() {
    setLightboxIndex(null)
  }

  function showPrevious() {
    setLightboxIndex((index) =>
      index === null ? null : Math.max(index - 1, 0)
    )
  }

  function showNext() {
    setLightboxIndex((index) =>
      index === null ? null : Math.min(index + 1, screenshots.length - 1)
    )
  }

  function getScreenshotSrc(filename: string) {
    return `${assetRoot}/${filename}`
  }

  return (
    <>
      <section className="border-b border-gray-200 bg-gray-50 px-6 py-8 dark:border-gray-800 dark:bg-gray-950 md:px-10 md:py-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Screenshots
          </h2>
          <div className="-mx-6 flex gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:px-0">
            {screenshots.map((screenshot, index) => (
              <button
                className="relative h-[220px] w-[340px] shrink-0 cursor-zoom-in overflow-hidden rounded-lg border border-gray-200 bg-white transition-opacity hover:opacity-90 dark:border-gray-800 dark:bg-gray-900 md:h-[280px] md:w-[430px]"
                key={screenshot}
                onClick={() => openLightbox(index)}
                type="button"
              >
                <Image
                  alt={`${projectName} screenshot ${index + 1}`}
                  className="object-contain"
                  fill
                  sizes="(max-width: 768px) 340px, 430px"
                  src={getScreenshotSrc(screenshot)}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeScreenshot && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <button
            aria-label="Close screenshot"
            className="absolute right-4 top-4 z-10 rounded-lg p-2 text-white/70 transition-colors hover:text-white"
            onClick={closeLightbox}
            type="button"
          >
            <X className="h-6 w-6" />
          </button>

          {lightboxIndex > 0 && (
            <button
              aria-label="Previous screenshot"
              className="absolute left-4 z-10 rounded-lg p-2 text-white/70 transition-colors hover:text-white"
              onClick={(event) => {
                event.stopPropagation()
                showPrevious()
              }}
              type="button"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
          )}

          {lightboxIndex < screenshots.length - 1 && (
            <button
              aria-label="Next screenshot"
              className="absolute right-4 z-10 rounded-lg p-2 text-white/70 transition-colors hover:text-white"
              onClick={(event) => {
                event.stopPropagation()
                showNext()
              }}
              type="button"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          )}

          <div
            className="relative h-[90vh] w-[90vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              alt={`${projectName} screenshot ${lightboxIndex + 1}`}
              className="object-contain"
              fill
              priority
              sizes="90vw"
              src={getScreenshotSrc(activeScreenshot)}
            />
          </div>

          {screenshots.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
              {lightboxIndex + 1} / {screenshots.length}
            </div>
          )}
        </div>
      )}
    </>
  )
}
