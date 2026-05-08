import type {ReactNode} from 'react'

import Image from 'next/image'
import Link from 'next/link'

import {env} from '@/configs/env'
import {ArrowRight, Check, ExternalLink, FileText} from 'lucide-react'
import {IoLogoDiscord} from 'react-icons/io5'

import {Button} from '@/components/ui/button'
import {TextLinkButton} from '@/components/ui/text-link-button'

function StepCard({
  children,
  className = '',
  description,
  number,
  title,
}: {
  children?: ReactNode
  className?: string
  description: string
  number: string
  title: string
}) {
  return (
    <div
      className={`w-full border-b border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-950 md:p-8 ${className}`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start gap-4">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-verus-blue/10 dark:bg-blue-900/30 md:h-12 md:w-12">
            <span className="text-xl font-medium text-verus-blue dark:text-blue-400 md:text-2xl">
              {number}
            </span>
          </div>
          <div className="min-w-0">
            <h3 className="text-[18px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[22px]">
              {title}
            </h3>
            <p className="mt-1 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              {description}
            </p>
          </div>
        </div>

        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  )
}

function CheckItem({children}: {children: ReactNode}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(0,170,37,1)] dark:bg-green-600 md:h-7 md:w-7">
        <Check className="h-4 w-4 text-white" />
      </div>
      <span className="text-[15px] leading-relaxed tracking-normal text-gray-800 dark:text-white md:text-[17px]">
        {children}
      </span>
    </div>
  )
}

function Notice({children}: {children: ReactNode}) {
  return (
    <p className="w-fit rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-[13px] leading-relaxed text-amber-800 dark:border-amber-700/40 dark:bg-amber-900/20 dark:text-amber-300 md:text-[14px]">
      {children}
    </p>
  )
}

export function MiningSteps() {
  return (
    <section className="min-w-0">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_400px]">
        <aside className="order-1 min-w-0 border-b border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-950 md:order-2 md:border-b-0 md:border-l md:p-8">
          <h2 className="mb-4 text-[18px] font-medium leading-[1.3] tracking-tight text-gray-800 dark:text-white md:text-[22px]">
            Merge-mine up to 22 ecosystem coins
          </h2>
          <div className="space-y-4">
            <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              Mining takes up 50% of the consensus mechanism of Verus and its
              PBaaS-blockchains. You do not need expensive hardware to get
              started.
            </p>
            <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              Merge-mine up to 22 ecosystem coins on one device with the same
              hashrate, giving miners greater profitability. Check which pools
              support merge-mining.
            </p>
          </div>

          <h2 className="mb-4 mt-8 text-[18px] font-medium leading-[1.3] tracking-tight text-gray-800 dark:text-white md:mt-12 md:text-[22px]">
            Verus Proof of Power
          </h2>
          <div className="space-y-4">
            <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              Verus Proof of Power is a hybrid 50/50 proof-of-work and
              proof-of-stake consensus mechanism. Half of all blocks are
              validated by miners, and half are validated by stakers.
            </p>
            <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
              It is designed as a provable solution to 51% hash attacks, and
              ecosystem blockchains inherit the same security model.
            </p>
            <TextLinkButton
              href="/papers/VerusPoP.pdf"
              className="-ml-2"
              icon={<FileText className="h-4 w-4 text-verus-blue" />}
            >
              Read the VerusPoP paper
            </TextLinkButton>
          </div>
        </aside>

        <div className="order-2 min-w-0 md:order-1">
        <StepCard
          number="1"
          title="Get your mining hardware"
          description="Choose the devices you want to mine with."
        >
          <p className="mb-3 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            Recommended devices for efficient hash per watt:
          </p>
          <div className="space-y-4">
            <CheckItem>ARM devices, including mobile phones and Orange Pi 5</CheckItem>
            <CheckItem>CPU</CheckItem>
          </div>
        </StepCard>

        <StepCard
          number="2"
          title="Download the wallet that works for you"
          description="Use an address from this wallet to receive coins."
          className="!pb-0"
        >
          <Notice>Do not mine to exchanges directly.</Notice>

          <div className="mt-8 flex h-full flex-col items-center justify-between md:mt-auto md:flex-row">
            <div className="mb-8 w-full md:mb-0 md:w-auto">
              <Button
                asChild
                variant="verusSecondary"
                size="verus"
                className="w-full md:w-fit"
              >
                <Link href="/wallet">
                  Choose wallet
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="flex w-full justify-center md:mt-8 md:w-auto">
              <Image
                src="/img/wallets-small.png"
                alt="Verus wallets"
                height={120}
                width={120}
                className="h-[120px] w-auto object-contain dark:brightness-90 md:h-[180px]"
              />
            </div>
          </div>
        </StepCard>

        <StepCard
          number="3"
          title="Download mining software"
          description="Use this software to mine coins."
        >
          <Button asChild variant="verusSecondary" size="verus">
            <a
              href={`${env.NEXT_PUBLIC_VERUS_DOCS}/economy/start-mining.html#mining-software`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to mining software
              <ExternalLink className="h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100" />
            </a>
          </Button>

          <div className="mt-4 flex">
            <Notice>You can always choose to solo mine with Verus Desktop.</Notice>
          </div>
        </StepCard>

        <a
          href={env.NEXT_PUBLIC_DISCORD}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-[56px] w-full items-center gap-3 border-b border-gray-200 bg-[#444EE5] p-4 transition-colors hover:bg-[#3942cc] dark:border-gray-800 md:p-6"
        >
          <IoLogoDiscord className="h-5 w-5 flex-shrink-0 text-white md:h-6 md:w-6" />
          <span className="min-w-0 text-[14px] font-medium text-white md:text-[16px]">
            Need a hand? Ask on Discord
          </span>
          <ExternalLink className="ml-auto h-4 w-4 flex-shrink-0 text-white opacity-70 transition-opacity group-hover:opacity-100" />
        </a>

        <StepCard
          number="4"
          title="Choose mining pool"
          description="Use the pool to receive steady small payments."
          className="border-b-0"
        >
          <Button asChild variant="verusSecondary" size="verus">
            <a
              href={`${env.NEXT_PUBLIC_VERUS_DOCS}/economy/start-mining.html#mining-pools`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Choose a pool
              <ExternalLink className="h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100" />
            </a>
          </Button>

          <div className="mt-4 flex">
            <Notice>Not all pools support merge-mining.</Notice>
          </div>
        </StepCard>
      </div>
      </div>
    </section>
  )
}
