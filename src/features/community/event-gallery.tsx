import Image from 'next/image'

const eventNames = [
  'Consensus 2022',
  'Consensus 2024',
  'Consensus 2025',
  'TUM 2024',
  'Paris Blockchain Week 2025',
  'Paris Blockchain Week 2026',
]

const galleryRows = [
  Array.from({length: 10}, (_, index) => `/img/community/${index + 1}.webp`),
  Array.from({length: 9}, (_, index) => `/img/community/${index + 11}.webp`),
]

function EventImage({src, index}: {src: string; index: number}) {
  return (
    <div className="relative mx-2 h-[142px] w-[214px] flex-shrink-0 overflow-hidden rounded-lg border border-white/70 bg-gray-100 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.65)] dark:border-white/10 dark:bg-gray-900 md:mx-3 md:h-[210px] md:w-[315px]">
      <Image
        src={src}
        alt={`Verus community event photo ${index + 1}`}
        width={900}
        height={600}
        sizes="(min-width: 768px) 315px, 214px"
        className="h-full w-full object-cover"
      />
    </div>
  )
}

function GalleryTrack({
  images,
  direction,
  offset,
}: {
  images: string[]
  direction: 'left' | 'right'
  offset: number
}) {
  const animationClass =
    direction === 'left' ? 'animate-gallery-ltr' : 'animate-gallery-rtl'

  return (
    <div className="relative overflow-hidden py-2 md:py-3">
      <div className={`flex w-max ${animationClass}`}>
        {[...images, ...images].map((src, index) => (
          <EventImage
            key={`${direction}-${src}-${index}`}
            src={src}
            index={(index % images.length) + offset}
          />
        ))}
      </div>
    </div>
  )
}

export function EventGallery() {
  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div className="border-b border-gray-200 px-8 py-8 dark:border-gray-800 md:px-10">
        <h2 className="font-display text-[30px] font-medium tracking-tight text-gray-800 dark:text-white">
          Community events
        </h2>
        <div className="mt-5 flex max-w-[900px] flex-wrap gap-2">
          {eventNames.map((eventName) => (
            <span
              key={eventName}
              className="rounded-full border border-gray-200 bg-white px-3 py-1 text-[12px] font-medium text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
            >
              {eventName}
            </span>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden border-b border-gray-200 bg-[linear-gradient(180deg,#f9fafb_0%,#eef4ff_52%,#f9fafb_100%)] py-6 dark:border-gray-800 dark:bg-[linear-gradient(180deg,#030712_0%,#0f172a_52%,#030712_100%)] md:py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-950 md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-950 md:w-28" />
        <GalleryTrack images={galleryRows[0]} direction="left" offset={0} />
        <GalleryTrack images={galleryRows[1]} direction="right" offset={10} />
      </div>
    </section>
  )
}
