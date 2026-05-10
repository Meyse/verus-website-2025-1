import type {Metadata} from 'next'

import {VerificationForm} from '@/features/verify/components/verification-form'
import {getVerification} from '@/features/verify/server/get-verification'

import {createWebApplicationJsonLd} from '@/lib/seo/schema'

import {BgWrapper} from '@/components/bg-wrapper'
import {JsonLd} from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Verify Signatures',
  description:
    'Verify signatures for files, messages, and hashes. Confirm the authenticity of digital signatures using VerusIDs to ensure data integrity and origin verification.',
  keywords:
    'verify signature, digital signature, blockchain verification, message verification, file verification, hash verification, cryptographic proof, VerusID signature',

  alternates: {
    canonical: '/verify',
  },
}
type SearchParams = Promise<{[key: string]: string | undefined}>

const verifyJsonLd = createWebApplicationJsonLd({
  name: 'Verus Signature Verification',
  path: '/verify',
  description:
    'Verify signatures for files, messages, and hashes using VerusIDs to confirm data integrity and origin.',
  applicationCategory: 'UtilitiesApplication',
  featureList: [
    'Verify message signatures',
    'Verify file signatures',
    'Verify hash signatures',
    'Check signatures against VerusIDs',
  ],
})

// Verify Signatures Page
export default async function VerifyPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const params = await searchParams

  const updatedFormInfo = await getVerification(params)

  return (
    <>
      <JsonLd data={verifyJsonLd} />
      <BgWrapper size="small">
        <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
          <div className="flex flex-col items-center px-0 pb-16 pt-0 md:pb-24 xl:px-4 xl:pt-[54px]">
            <div className="w-full overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:max-w-[1220px] xl:rounded-lg xl:border">
              <section className="border-b border-gray-200 bg-gray-50 px-8 py-12 dark:border-gray-800 dark:bg-gray-950 md:px-14 md:py-16">
                <h1 className="max-w-[860px] text-[32px] font-medium leading-[1.08] tracking-tight text-gray-800 dark:text-white md:text-[48px]">
                  Verify signature
                </h1>
                <p className="mt-4 max-w-[760px] text-[16px] font-normal leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:mt-5 md:text-[22px]">
                  Confirm the authenticity of digital signatures using VerusIDs
                  to ensure data integrity and origin verification.
                </p>
              </section>

              <VerificationForm formInfo={updatedFormInfo} />
            </div>
          </div>
        </div>
      </BgWrapper>
    </>
  )
}
