import {ArrowRight} from 'lucide-react'

import {Button} from '@/components/ui/button'

export function FutureSection() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 px-8 py-16 text-center dark:border-gray-800 dark:bg-gray-950 md:px-14 md:py-24">
      <div className="mx-auto max-w-[800px]">
        <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
          Building for tomorrow, available today
        </h2>
        <p className="mx-auto max-w-[760px] text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
          While decentralized applications using VerusID are still in
          development, you can already create your sovereign digital identity,
          secure your assets, and take control of your data. Join the worldwide
          community in building a future where users control their own data,
          privacy is the default, and digital freedom is accessible to all.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button
            asChild
            variant="verusPrimary"
            size="verus"
            className="w-full md:w-fit"
          >
            <a href="/wallet">
              Download wallet
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            asChild
            variant="verusSecondaryDark"
            size="verus"
            className="w-full md:w-fit"
          >
            <a href="/build/verusid">
              Build with VerusID
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
