'use client'

import Image from 'next/image'

import {useIsMounted} from '@/hooks/use-is-mounted'

// Define image paths for both rows
const row1Images = Array.from(
  {length: 10},
  (_, i) => `/img/community/${i + 1}.webp`
)
const row2Images = Array.from(
  {length: 9},
  (_, i) => `/img/community/${i + 11}.webp`
)
// Scrolling image carousel for community page
export function ImageMarquee() {
  // State to track if component has mounted (avoids hydration issues)
  const isMounted = useIsMounted()

  // Only render after component has mounted on client
  if (!isMounted) {
    return null
  }

  return (
    <div className="mb-16 w-full overflow-hidden">
      <div className="relative">
        <h2 className="mb-8 text-center text-[22px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[32px]">
          The growing Verus community.
        </h2>

        {/* Full-width container for the marquee */}
        <div className="relative left-[50%] right-[50%] mx-[-50vw] w-screen">
          {/* Row 1: Left to Right */}
          <div className="relative mb-4 overflow-hidden">
            <div className="flex animate-marquee-ltr">
              {/* First set of images for complete coverage */}
              {[...row1Images, ...row1Images, ...row1Images, ...row1Images].map(
                (src, index) => (
                  <div
                    key={`row1-${index}`}
                    className="mx-2 h-[120px] w-[180px] flex-shrink-0 overflow-hidden rounded-xl md:mx-4 md:h-[180px] md:w-[270px]"
                  >
                    <Image
                      src={src}
                      alt={`Community Image ${(index % 10) + 1}`}
                      width={266}
                      height={266}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee-rtl">
              {/* First set of images for complete coverage */}
              {[...row2Images, ...row2Images, ...row2Images, ...row2Images].map(
                (src, index) => (
                  <div
                    key={`row2-${index}`}
                    className="mx-2 h-[120px] w-[180px] flex-shrink-0 overflow-hidden rounded-xl md:mx-4 md:h-[180px] md:w-[270px]"
                  >
                    <Image
                      src={src}
                      alt={`Community Image ${(index % 9) + 11}`}
                      width={266}
                      height={266}
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
