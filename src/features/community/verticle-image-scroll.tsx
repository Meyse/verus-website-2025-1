'use client'

import {useEffect} from 'react'
import Image from 'next/image'

import {useIsMounted} from '@/hooks/use-is-mounted'

// Define image paths for the vertical scrolling images (separated into left and right columns)
const leftColumnImages = Array.from(
  {length: 10},
  (_, i) => `/img/community/${i + 1}.webp`
)
const rightColumnImages = Array.from(
  {length: 9},
  (_, i) => `/img/community/${i + 11}.webp`
)

// Right image grid side - desktop only - with smooth infinite scrolling
export const VerticleImageScroll = () => {
  const isMounted = useIsMounted()

  useEffect(() => {
    if (!isMounted) return

    // Safari animation fix - force animation recognition after mount
    setTimeout(() => {
      const containers = document.querySelectorAll(
        '.scrolling-container-up, .scrolling-container-down'
      )
      containers.forEach((container) => {
        // Force a reflow by reading a layout property and making a tiny style change
        const _ = container.getBoundingClientRect()
        // Cast to HTMLElement to access style property
        ;(container as HTMLElement).style.transform = 'translateZ(0)'
      })
    }, 50)
  }, [isMounted])

  // Only try to animate after component has mounted on client
  if (!isMounted) {
    return (
      <div className="hidden h-[500px] w-1/2 items-center justify-center overflow-hidden lg:flex">
        Loading...
      </div>
    )
  }
  return (
    <div className="relative hidden h-[500px] w-1/2 overflow-hidden lg:block">
      <div className="absolute inset-0 grid grid-cols-2 gap-3 p-4">
        {/* Left column - scrolling up with continuous scroll technique */}
        <div className="relative h-full overflow-hidden">
          <div className="absolute inset-0">
            <div className="scrolling-container-up inline-flex h-auto flex-col gap-3">
              {/* Images for left column (1-10) */}
              {[...leftColumnImages, ...leftColumnImages].map((src, index) => (
                <div
                  key={`img-left-${index}`}
                  className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800"
                >
                  <Image
                    src={src}
                    alt={`Community Image ${(index % 10) + 1}`}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - scrolling down with continuous scroll technique */}
        <div className="relative h-full overflow-hidden">
          <div className="absolute inset-0">
            <div className="scrolling-container-down inline-flex h-auto flex-col gap-3">
              {/* Images for right column (11-19) */}
              {[...rightColumnImages, ...rightColumnImages].map(
                (src, index) => (
                  <div
                    key={`img-right-${index}`}
                    className="aspect-square w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800"
                  >
                    <Image
                      src={src}
                      alt={`Community Image ${(index % 9) + 11}`}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
