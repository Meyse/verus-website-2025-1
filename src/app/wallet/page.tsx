import type {Metadata} from 'next'

import {env} from '@/configs/env'
import {WalletComparison, WalletDownloads} from '@/features/wallet/components'

import {absoluteUrl, createSoftwareApplicationJsonLd} from '@/lib/seo/schema'

import {BgWrapper} from '@/components/bg-wrapper'
import {JsonLd} from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'The Verus Wallet',
  description:
    'Your ultimate crypto wallet and self-sovereign identity solution.',
  keywords:
    'crypto wallet, blockchain wallet, self-sovereign identity, Verus wallet, identity wallet, digital wallet',
}

const walletJsonLd = createSoftwareApplicationJsonLd({
  name: 'Verus Wallet',
  path: '/wallet',
  description:
    'A crypto wallet and self-sovereign identity solution for Verus and ecosystem currencies.',
  applicationCategory: 'FinanceApplication',
  operatingSystem: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
  featureList: [
    'Manage Verus and ecosystem currencies',
    'Use VerusID self-sovereign identity',
    'Run desktop, mobile, and command-line wallets',
  ],
  image: absoluteUrl('/img/wallets-big.png'),
  downloadUrl: [env.NEXT_PUBLIC_APPLE_STORE, env.NEXT_PUBLIC_GOOGLE_PLAYSTORE],
  codeRepository: [
    `${env.NEXT_PUBLIC_VERUS_GITHUB}/Verus-Desktop`,
    `${env.NEXT_PUBLIC_VERUS_GITHUB}/Verus-Mobile`,
    `${env.NEXT_PUBLIC_VERUS_GITHUB}/VerusCoin`,
  ],
})

export default function WalletPage() {
  return (
    <>
      <JsonLd data={walletJsonLd} />
      <BgWrapper>
        <div className="relative z-10 flex flex-col items-center md:px-4">
          <div className="pt-[30px] md:pt-[70px]">
            <h1 className="text-center text-[32px] font-medium leading-[1.1] tracking-tight text-white md:text-[75px]">
              The Verus Wallet
            </h1>
            <p className="mx-auto max-w-[400px] pt-[10px] text-center text-[16px] font-normal leading-snug tracking-tight text-white/90 dark:text-white/80 md:max-w-[900px] md:pt-[1px] md:text-[32px]">
              Your ultimate crypto wallet and self-sovereign identity solution.
            </p>
          </div>

          <WalletDownloads />
          <WalletComparison />
        </div>
      </BgWrapper>
    </>
  )
}
