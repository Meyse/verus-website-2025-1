import {Download} from 'lucide-react'

import {TextLinkButton} from '@/components/ui/text-link-button'

export function VisionMissionSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/40 dark:to-gray-950">
      <div className="grid min-w-0 grid-cols-1 md:grid-cols-2">
        <article className="min-w-0 px-10 py-10 md:px-14 md:py-16">
          <h2 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
            Vision
          </h2>
          <p className="max-w-[310px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:max-w-[760px] md:text-[17px]">
            A world where digital infrastructure favors truth, privacy, and
            community power, enabling individuals to participate directly in a
            fair digital economy while keeping sovereign control over personal
            funds, data and identity.
          </p>
          <TextLinkButton
            href="/papers/VerusVision.pdf"
            className="-ml-2 mt-5 max-w-full"
            contentClassName="items-start leading-relaxed"
            icon={
              <Download className="h-4 w-4 text-gray-700 dark:text-gray-300" />
            }
          >
            Download vision paper
          </TextLinkButton>
        </article>

        <article className="min-w-0 border-t border-gray-200 px-10 py-10 dark:border-gray-800 md:border-l md:border-t-0 md:px-14 md:py-16">
          <h2 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
            Mission
          </h2>
          <p className="max-w-[310px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:max-w-[760px] md:text-[17px]">
            To build open, secure, public blockchain infrastructure with
            consensus-level verification of core primitives, including sovereign
            identity, currencies, fair DeFi, and data, all with verifiable
            privacy-preserving technology and fair participation, creating a
            network where truth and cooperation emerge from use.
          </p>
        </article>
      </div>
    </section>
  )
}
