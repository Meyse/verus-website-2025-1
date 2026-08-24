import type {Metadata} from 'next'

import Image from 'next/image'

import {env} from '@/configs/env'
import {ArrowRight, ExternalLink} from 'lucide-react'
import {IoLogoDiscord} from 'react-icons/io5'

import {createBreadcrumbJsonLd, createWebPageJsonLd} from '@/lib/seo/schema'
import {cn} from '@/lib/utils'

import {Button} from '@/components/ui/button'
import {BgWrapper} from '@/components/bg-wrapper'
import {JsonLd} from '@/components/seo/json-ld'

import {DreamAcronymTabs} from './dream-acronym-tabs'

const pageTitle = 'DREAM: A New Application Model'
const pageDescription =
  'DREAM is the Decentralized, Rights-preserving, Encrypted Application Model on Verus, bringing identity, payments, authentication, and encrypted app data into one user-approved flow.'
const pageOgImage = '/img/dream/og-image-dream.png'
const pageOgImageAlt =
  'DREAM: A new application model for user-owned identity, data, and money'
const verusidTsClientHref = `${env.NEXT_PUBLIC_VERUS_GITHUB}/verusid-ts-client`
const verusTypescriptPrimitivesHref = `${env.NEXT_PUBLIC_VERUS_GITHUB}/verus-typescript-primitives`

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords:
    'DREAM, Verus, decentralized applications, encrypted data, VerusID, privacy, user-owned data, Generic Request',
  alternates: {
    canonical: '/dream',
  },
  openGraph: {
    description: pageDescription,
    url: '/dream',
    images: [
      {
        url: pageOgImage,
        width: 1200,
        height: 630,
        alt: pageOgImageAlt,
      },
    ],
  },
  twitter: {
    description: pageDescription,
    images: [
      {
        url: pageOgImage,
        alt: pageOgImageAlt,
      },
    ],
  },
}

const dreamJsonLd = createWebPageJsonLd({
  path: '/dream',
  name: pageTitle,
  description: pageDescription,
  relatedLink: [
    env.NEXT_PUBLIC_VERUS_DOCS,
    verusidTsClientHref,
    verusTypescriptPrimitivesHref,
  ],
})

const dreamBreadcrumbJsonLd = createBreadcrumbJsonLd([
  {name: 'Home', path: '/'},
  {name: 'DREAM', path: '/dream'},
])

type ModelStep = {
  body: string
  title: string
}

const coreModelSteps: ModelStep[] = [
  {
    title: 'The app creates a request',
    body: 'The request describes the actions and where the wallet should return its response.',
  },
  {
    title: 'The user reviews the request',
    body: 'The wallet shows the requested actions and asks the user to approve or reject them.',
  },
  {
    title: 'The app verifies the response',
    body: 'The wallet returns a signed GenericResponse, which the app verifies before continuing.',
  },
]

const dreamHighlights = [
  {
    title: 'DREAM:',
    body: 'The Decentralized, Rights-preserving, Encrypted Application Model.',
  },
  {
    title: 'Choose how you identify:',
    body: 'Use the same VerusID across several apps, or different VerusIDs for different roles and purposes.',
  },
  {
    title: 'Keep app data encrypted:',
    body: 'Apps can keep encrypted records on your devices or sync them through a service that does not have the material needed to read them.',
  },
  {
    title: 'Review requests in the wallet:',
    body: 'Your wallet shows each request for sign-in, an identity update, a payment, encryption, or data access before you approve it.',
  },
  {
    title: 'Approve payments without giving the app custody:',
    body: 'A payment can be part of the same wallet request, while the funds remain under your control until approval.',
  },
]

const comparisonRows = [
  {
    layer: 'Identity',
    regular: 'The app creates the account and controls recovery.',
    dream: 'The user brings a portable VerusID and chooses what to share.',
  },
  {
    layer: 'Data',
    regular: 'The server stores records it can read.',
    dream:
      'Encrypted data can stay with the user, on a server that cannot read it, or with their VerusID.',
  },
  {
    layer: 'Payments',
    regular: 'A payment processor sits between the user and the app.',
    dream: 'The wallet can approve payment in the same application request.',
  },
  {
    layer: 'Permissions',
    regular: 'Consent is spread across settings, sessions, and terms.',
    dream: 'The wallet shows the request before the user signs.',
  },
]

const developerLibraries = [
  {
    role: 'Start here',
    title: 'verusid-ts-client',
    description:
      'Use the higher-level client to create, sign, validate, and verify GenericRequests and GenericResponses.',
    imageSrc: '/img/build/libraries/verusid-experiences.jpg',
    links: [
      {
        label: 'See the request and response methods',
        href: `${verusidTsClientHref}/blob/master/src/VerusIdInterface.ts#L2187-L2275`,
      },
      {
        label: 'See a GenericRequest example',
        href: `${verusidTsClientHref}/blob/master/src/__tests__/live/genericenvelope.test.ts`,
      },
      {
        label: 'View the repository',
        href: verusidTsClientHref,
      },
    ],
  },
  {
    role: 'Build request details',
    title: 'verus-typescript-primitives',
    description:
      'Use the lower-level types for request envelopes, response URIs, wallet deeplinks, and individual request detail objects.',
    imageSrc: '/img/build/libraries/wallet-requests.jpg',
    links: [
      {
        label: 'Explore the GenericRequest type',
        href: `${verusTypescriptPrimitivesHref}/blob/master/src/vdxf/classes/request/GenericRequest.ts`,
      },
      {
        label: 'See serialization and deeplink examples',
        href: `${verusTypescriptPrimitivesHref}/blob/master/src/__tests__/vdxf/genericrequest.test.ts`,
      },
      {
        label: 'Browse the request detail objects',
        href: `${verusTypescriptPrimitivesHref}/tree/master/src/vdxf/classes/ordinals`,
      },
      {
        label: 'View the repository',
        href: verusTypescriptPrimitivesHref,
      },
    ],
  },
]

export default function DreamPage() {
  return (
    <>
      <JsonLd data={dreamJsonLd} />
      <JsonLd data={dreamBreadcrumbJsonLd} />
      <BgWrapper>
        <main className="bg-gradient-to-b from-gray-100 via-gray-100 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
          <article className="px-8 pb-24 pt-[98px] md:px-14 md:pb-32 md:pt-[114px]">
            <header>
              <h1 className="mx-auto w-fit leading-none">
                <span className="block translate-x-[0.05em] bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-[16px] font-normal italic text-transparent opacity-70 dark:from-gray-200 dark:via-gray-300 dark:to-gray-500 dark:opacity-90 md:text-[20px]">
                  Realize your
                </span>
                <span className="mt-1 block text-center text-[64px] font-medium tracking-[0.05em] text-verus-blue supports-[background-clip:text]:bg-[url('/img/dream/dream-announcement-wave.png')] supports-[background-clip:text]:bg-cover supports-[background-clip:text]:bg-clip-text supports-[background-clip:text]:bg-center supports-[background-clip:text]:text-transparent md:text-[168px]">
                  DREAM
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-[780px] text-center text-[18px] leading-relaxed tracking-normal text-gray-800 dark:text-white md:mt-6 md:text-[24px]">
                A new application model for user-owned identity, data, and money
              </p>
            </header>

            <div className="mx-auto mt-20 w-4/5 max-w-[486px] md:mt-28">
              <Image
                src="/img/dream/dream-illustration.svg"
                alt="DREAM application model illustration"
                width={834}
                height={492}
                className="h-auto w-full dark:hidden"
                priority
              />
              <Image
                src="/img/dream/dream-illustration-dark.svg"
                alt="DREAM application model illustration"
                width={834}
                height={492}
                className="hidden h-auto w-full dark:block"
                priority
              />
            </div>

            <ul className="mx-auto mt-20 max-w-[620px] space-y-5 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:mt-24 md:space-y-6 md:text-[17px]">
              {dreamHighlights.map((highlight) => (
                <li key={highlight.title} className="flex gap-3">
                  <span
                    className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-verus-blue"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-800 dark:text-white">
                      {highlight.title}
                    </strong>{' '}
                    {highlight.body}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mx-auto mt-24 max-w-[760px] md:mt-32">
              <h2 className="mb-4 font-display text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
                What changes for applications
              </h2>
              <div className="space-y-5 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:space-y-6 md:text-[17px]">
                <p>
                  Many apps create and manage user accounts, store readable user
                  data, and rely on separate payment providers. DREAM gives
                  applications a structured way to request sign-in, payments,
                  identity updates, encryption, and data access through a
                  compatible Verus wallet.
                </p>
                <p>
                  The user chooses which VerusID to use and reviews the requested
                  actions in the wallet. After approval, the wallet returns a
                  signed response, which the application verifies before
                  continuing.
                </p>
                <p>
                  Applications still run their own interfaces, servers, and
                  business logic, and decide how and where data is stored. They
                  can keep records encrypted without requiring servers or storage
                  providers to hold the material needed to read them. DREAM
                  reduces the need for applications to control user identities,
                  hold user funds, or store readable private data.
                </p>
              </div>
            </div>

            <section className="mx-auto mt-24 max-w-[1320px] md:mt-32">
              <div className="mx-auto max-w-[760px]">
                <h2 className="mb-4 font-display text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
                  What DREAM applications can look like
                </h2>
                <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                  The Verus community is putting the model into practice. The
                  two applications below are in development, but they already
                  show how the same wallet-based approach can support very
                  different products: a social app with identity and payments,
                  and a private notes app with encrypted sync.
                </p>
              </div>

              <div className="mt-10 overflow-hidden rounded-lg bg-gray-200/70 dark:bg-white/[0.04] md:mt-14">
                <div className="grid lg:grid-cols-2">
                  <section className="flex min-w-0 flex-col overflow-hidden px-6 pt-8 md:px-10 md:pt-10 lg:px-12">
                    <div className="mb-7 h-16 w-16 overflow-hidden rounded-[22%] border border-white/60 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)] dark:border-white/15 dark:bg-gray-900 dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)] md:h-[72px] md:w-[72px]">
                      <Image
                        src="/img/dream/verus-sky-icon.png"
                        alt=""
                        width={400}
                        height={400}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="mb-5 font-display text-[30px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white">
                      VerusSky: social identity and payments in one app
                    </h3>
                    <div className="space-y-5 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
                      <p>
                        VerusSky is a social app in development by Mike
                        Toutonghi, lead developer of the Verus Protocol. It is a
                        Verus-enabled layer on top of Bluesky rather than a
                        separate network. People can continue using their
                        existing Bluesky account, profile, posts, follows and
                        conversations, while VerusSky adds VerusID and direct
                        payments.
                      </p>
                      <p>
                        Users can approve sign-in through a Verus wallet and
                        link a VerusID to a social profile. The app checks a
                        signed proof before showing the VerusID on that profile,
                        giving other people a way to verify the connection.
                        Linked profiles can accept donations through VerusPay,
                        while creator subscriptions can connect ongoing support
                        with access to content.
                      </p>
                      <p>
                        It fits the DREAM model because identity and payment
                        approval remain with the user. VerusSky can verify who
                        approved a request and help two people make a payment,
                        but it does not need to hold the sender's funds or
                        decide on their behalf.
                      </p>
                    </div>

                    <div className="mt-auto pt-10 md:pt-16">
                      <div className="flex aspect-[11/6] justify-center overflow-hidden md:aspect-[3/1] lg:aspect-auto lg:h-[min(282px,calc((100vw-304px)/4))] lg:overflow-visible">
                        <Image
                          src="/img/dream/verus-sky-app-no-top-line.png"
                          alt="VerusSky donation interface"
                          width={4064}
                          height={2280}
                          sizes="(min-width: 1432px) 597px, (min-width: 1024px) calc(52.917vw - 161px), (min-width: 768px) 505px, calc(106vw - 119px)"
                          className="h-auto w-[106%] max-w-none shrink-0 self-start rounded-t-lg md:w-[77%] lg:w-[105.833%]"
                        />
                      </div>
                    </div>
                  </section>

                  <section className="flex min-w-0 flex-col overflow-hidden border-t border-gray-300 px-6 pt-16 dark:border-gray-800 md:px-10 md:pt-10 lg:border-l lg:border-t-0 lg:px-12">
                    <div className="mb-7 flex h-16 w-16 items-center justify-center md:h-[72px] md:w-[72px]">
                      <Image
                        src="/img/dream/verus-notes-icon.png"
                        alt=""
                        width={1024}
                        height={1024}
                        className="h-[123%] w-[123%] max-w-none shrink-0 object-contain drop-shadow-[0_8px_16px_rgba(15,23,42,0.15)] dark:drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]"
                      />
                    </div>
                    <h3 className="mb-5 font-display text-[30px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white">
                      Verus Notes: encrypted notes unlocked with your wallet
                    </h3>
                    <div className="space-y-5 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
                      <p>
                        Verus Notes is a native desktop notes app with folders,
                        search and a Markdown editor. The experience is
                        familiar: people write and organize notes on their own
                        computer, and can choose whether individual notes should
                        also sync to the cloud.
                      </p>
                      <p>
                        The Verus wallet unlocks the user's private vault. Notes
                        and folder information are encrypted on the device
                        before they are saved or uploaded. If cloud sync is
                        enabled, the service receives encrypted records rather
                        than readable content. Anyone who restores the same
                        wallet from its seed on another device and approves the
                        same encryption request can download and unlock those
                        records.
                      </p>
                      <p>
                        It fits the DREAM model because the app provides useful
                        editing, backup and sync features while the wallet
                        controls access and the cloud stores no readable copy.
                        The user chooses when to unlock the vault, what to sync
                        and whether to remove the cloud copy.
                      </p>
                    </div>

                    <div className="mt-auto pt-10 md:pt-16">
                      <div className="flex aspect-[3/2] justify-center overflow-hidden md:aspect-[3/1] lg:aspect-auto lg:h-[min(282px,calc((100vw-304px)/4))] lg:overflow-visible">
                        <Image
                          src="/img/dream/verus-notes-app.png"
                          alt="Verus Notes encrypted note editor"
                          width={2424}
                          height={1664}
                          sizes="(min-width: 1432px) 621px, (min-width: 1024px) calc(55.091vw - 167px), (min-width: 768px) 505px, calc(110vw - 123px)"
                          className="h-auto w-[110%] max-w-none shrink-0 self-start rounded-t-lg md:w-[77%] lg:w-[110.182%] lg:-translate-y-[1.95%]"
                        />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </section>

            <div className="mx-auto mt-16 max-w-[1100px] md:mt-20">
              <div className="mx-auto max-w-[760px]">
                <h2 className="font-display text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[44px]">
                  How a DREAM request works
                </h2>
              </div>

              <div className="mt-6 grid overflow-hidden rounded-lg border border-gray-200 bg-white/60 dark:border-gray-800 dark:bg-white/[0.02] md:mt-8 md:grid-cols-3">
                {coreModelSteps.map((step, index) => {
                  const hasNextStep = index < coreModelSteps.length - 1

                  return (
                    <div
                      key={step.title}
                      className={cn(
                        'relative flex min-w-0 items-start gap-4 px-5 py-5 md:px-6 md:py-6',
                        index > 0 &&
                          'border-t border-gray-200 dark:border-gray-800 md:border-l md:border-t-0'
                      )}
                    >
                      <div className="min-w-0">
                        <h3 className="text-[16px] font-semibold leading-tight tracking-normal text-gray-800 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-[14px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[15px]">
                          {step.body}
                        </p>
                      </div>
                      {hasNextStep && (
                        <ArrowRight className="absolute -bottom-3 left-1/2 z-10 h-6 w-6 -translate-x-1/2 rotate-90 rounded-full border border-gray-200 bg-white p-1 text-gray-400 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-500 md:-right-3 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:rotate-0" />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mx-auto mt-24 max-w-[980px] md:mt-32">
              <div className="mx-auto mb-10 max-w-[760px] md:mb-14">
                <h2 className="mb-4 font-display text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
                  What DREAM means
                </h2>
                <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                  DREAM stands for Decentralized, Rights-preserving, Encrypted
                  Application Model. Select a letter to see how each part shapes
                  the way an application works.
                </p>
              </div>
              <DreamAcronymTabs />
            </div>

            <div className="mx-auto mt-24 max-w-[1320px] md:mt-32">
              <div className="mx-auto max-w-[760px]">
                <h2 className="mb-4 font-display text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
                  What the application needs to hold
                </h2>
                <p className="max-w-[560px] text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                  DREAM reduces the identity, funds, and readable private data
                  an application needs to hold.
                </p>
              </div>

              <div className="mt-10 rounded-lg bg-white px-6 py-8 dark:bg-white/[0.03] md:mt-14 md:px-10 md:py-10 lg:px-12 lg:py-12">
                <div className="md:hidden">
                  <div className="border-y border-gray-200 dark:border-gray-800">
                    {comparisonRows.map((row) => (
                      <section
                        key={row.layer}
                        className="border-b border-gray-200 py-6 last:border-b-0 dark:border-gray-800"
                      >
                        <h3 className="text-[17px] font-bold leading-tight tracking-normal text-gray-900 dark:text-white">
                          {row.layer}
                        </h3>
                        <div className="mt-4 space-y-4 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
                          <div>
                            <p className="text-[13px] font-bold leading-tight tracking-normal text-gray-900 dark:text-white">
                              Typical custodial app
                            </p>
                            <p className="mt-1.5">{row.regular}</p>
                          </div>
                          <div>
                            <p className="flex items-center gap-2 text-[13px] font-bold leading-tight tracking-normal text-verus-blue dark:text-blue-300">
                              <Image
                                src="/img/verus-icon.svg"
                                alt=""
                                width={15}
                                height={15}
                                className="h-[15px] w-[15px]"
                                aria-hidden="true"
                              />
                              <span>DREAM app model</span>
                            </p>
                            <p className="mt-1.5">{row.dream}</p>
                          </div>
                        </div>
                      </section>
                    ))}
                  </div>
                </div>
                <div className="hidden overflow-x-auto md:block">
                  <table className="w-full min-w-[760px] border-y border-gray-200 text-left dark:border-gray-800">
                    <thead>
                      <tr className="border-b border-gray-200 text-[17px] font-bold leading-tight tracking-normal text-gray-900 dark:border-gray-800 dark:text-white">
                        <th className="w-[18%] px-5 py-5 align-top md:px-6">
                          Layer
                        </th>
                        <th className="w-[41%] px-5 py-5 align-top md:px-6">
                          Typical custodial app
                        </th>
                        <th className="w-[41%] px-5 py-5 align-top text-verus-blue dark:text-blue-300 md:px-6">
                          <div className="flex items-center gap-2">
                            <Image
                              src="/img/verus-icon.svg"
                              alt=""
                              width={18}
                              height={18}
                              className="h-[18px] w-[18px]"
                              aria-hidden="true"
                            />
                            <span>DREAM app model</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[17px] leading-relaxed tracking-normal text-gray-700 dark:text-gray-300">
                      {comparisonRows.map((row) => (
                        <tr
                          key={row.layer}
                          className="border-b border-gray-200 last:border-b-0 dark:border-gray-800"
                        >
                          <th className="px-5 py-6 text-left font-bold text-gray-900 dark:text-white md:px-6 md:py-7">
                            {row.layer}
                          </th>
                          <td className="px-5 py-6 align-top md:px-6 md:py-7">
                            {row.regular}
                          </td>
                          <td className="px-5 py-6 align-top md:px-6 md:py-7">
                            {row.dream}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 text-[13px] leading-relaxed tracking-normal text-gray-500 dark:text-gray-400 md:px-6">
                  Content attached to a VerusID is recorded on-chain. Encryption
                  can hide the contents, but not the identity update itself.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-24 max-w-[980px] md:mt-32">
              <div className="mx-auto max-w-[760px]">
                <h2 className="mb-4 font-display text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
                  Build apps users can own
                </h2>
                <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                  DREAM applications use two TypeScript libraries. Start with
                  verusid-ts-client for the request and response lifecycle. Use
                  verus-typescript-primitives when you need to construct the
                  envelopes, deeplinks, and individual actions inside a request.
                </p>
              </div>

              <div className="mt-10 grid overflow-hidden rounded-lg border border-gray-200 bg-white/70 dark:border-gray-800 dark:bg-white/[0.02] md:mt-14 md:grid-cols-2">
                {developerLibraries.map((library, index) => (
                  <article
                    key={library.title}
                    className={
                      index === 0
                        ? 'min-w-0'
                        : 'min-w-0 border-t border-gray-200 dark:border-gray-800 md:border-l md:border-t-0'
                    }
                  >
                    <div className="relative h-[130px] overflow-hidden border-b border-gray-200 dark:border-gray-800 md:h-[150px]">
                      <Image
                        src={library.imageSrc}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 490px, 100vw"
                        className="object-cover"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-white/25 dark:bg-white/15"
                      />
                      <div className="absolute inset-0 z-10 px-6 py-7 md:px-8 md:py-8">
                        <p className="text-[13px] font-semibold leading-tight text-gray-800/80 dark:text-gray-800/80">
                          {library.role}
                        </p>
                        <h3 className="mt-2 break-words font-display text-[22px] font-medium leading-[1.15] tracking-tight text-gray-900 md:text-[26px]">
                          {library.title}
                        </h3>
                      </div>
                    </div>

                    <div className="px-6 py-7 md:px-8 md:py-8">
                      <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
                        {library.description}
                      </p>

                      <ul className="mt-6 space-y-1">
                        {library.links.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link -mx-2 flex items-start justify-between gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50 dark:hover:bg-white/[0.03]"
                            >
                              <span className="text-[15px] font-[450] leading-relaxed text-gray-800 group-hover/link:underline dark:text-white">
                                {link.label}
                              </span>
                              <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 opacity-40 transition-opacity group-hover/link:opacity-100" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>

              <p className="mt-6 max-w-[620px] text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
                These source files also give an AI coding agent the request
                types, validation rules, and examples it needs to help map a
                DREAM integration.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="verusPrimary" size="verus">
                  <a href="/build/start/#protocol-libraries">
                    Explore the complete TypeScript stack
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="verusSecondary"
                  size="verus"
                  className="whitespace-normal text-center sm:whitespace-nowrap"
                >
                  <a
                    href={env.NEXT_PUBLIC_DISCORD}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ask for guidance from the community
                    <IoLogoDiscord className="h-5 w-5 text-[#5865F2] transition-transform duration-300 group-hover:translate-x-[1px] dark:text-white md:h-6 md:w-6" />
                  </a>
                </Button>
              </div>
            </div>
          </article>
        </main>
      </BgWrapper>
    </>
  )
}
