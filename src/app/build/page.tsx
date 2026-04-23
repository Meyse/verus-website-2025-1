import type {Metadata} from 'next'

import {env} from '@/configs/env'
import {
  FeaturesGrid,
  SolutionsGrid,
  VerusIDLoginSection,
} from '@/features/build/build'
import {IoLogoDiscord} from 'react-icons/io5'

import {BgWrapper} from '@/components/bg-wrapper'
import {Button} from '@/components/ui/button'

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'Build dApps without limits',
  description:
    'Skip the blockchain complexity and focus on what matters. The Verus API does the heavy lifting while you create decentralized applications at any scale.',

  alternates: {
    canonical: '/build',
  },
}

export default function BuildPage() {
  return (
    <BgWrapper>
      <div className="bg-gray-100 dark:bg-gray-950">
        <div className="flex flex-col items-center px-0 pt-0 xl:px-4 xl:pt-[54px]">
          <div className="w-full overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:max-w-[1220px] xl:rounded-lg xl:border">
            <section className="border-b border-gray-200 bg-gray-50 px-8 py-12 text-center dark:border-gray-800 dark:bg-gray-950 md:px-14 md:py-16">
              <h1 className="mx-auto max-w-[900px] text-[32px] font-medium leading-[1.05] tracking-tight text-gray-800 dark:text-white md:text-[58px]">
                Build dApps without limits
              </h1>
              <p className="mx-auto mt-4 max-w-[760px] text-[16px] font-normal leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:mt-5 md:text-[22px]">
                Skip the blockchain complexity and focus on what matters. The
                Verus API does the heavy lifting while you create at any scale.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
                <Button
                  asChild
                  variant="verusPrimary"
                  size="verus"
                  className="w-full md:w-fit"
                >
                  <a href="/build/start">
                    Get started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="verusSecondaryDark"
                  size="verus"
                  className="w-full md:w-fit"
                >
                  <a
                    href={env.NEXT_PUBLIC_DISCORD}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get help from the community
                    <IoLogoDiscord className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-[1px] md:h-6 md:w-6" />
                  </a>
                </Button>
              </div>
            </section>

            <FeaturesGrid />
            <SolutionsGrid />
            <VerusIDLoginSection />
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}
