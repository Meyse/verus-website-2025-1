import type {Metadata} from 'next'
import type {LucideIcon} from 'lucide-react'

import Image from 'next/image'

import {env} from '@/configs/env'
import {
  ArrowRight,
  BadgeCheck,
  ExternalLink,
  KeyRound,
  ScanLine,
} from 'lucide-react'
import {IoLogoDiscord} from 'react-icons/io5'

import {createBreadcrumbJsonLd, createWebPageJsonLd} from '@/lib/seo/schema'

import {Button} from '@/components/ui/button'
import {BgWrapper} from '@/components/bg-wrapper'
import {JsonLd} from '@/components/seo/json-ld'

import {DreamAcronymTabs} from './dream-acronym-tabs'
import {HorizontalScrollFade} from './horizontal-scroll-fade'

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
  icon: LucideIcon
  title: string
}

const coreModelSteps: ModelStep[] = [
  {
    icon: ScanLine,
    title: 'Ask in one request',
    body: 'Bundle authentication, payments, identity updates, and encryption into one application moment.',
  },
  {
    icon: KeyRound,
    title: 'Approve in the wallet',
    body: 'The wallet explains what the app wants and signs only after the user chooses.',
  },
  {
    icon: BadgeCheck,
    title: 'Verify and serve',
    body: 'The app verifies the signed response, completes the action, and keeps serving the user without taking custody of their identity, funds, or private data.',
  },
]

const dreamHighlights = [
  {
    title: 'Your identity travels with you.',
    body: 'Instead of making a new account for every app, you use a VerusID: a digital identity you control.',
  },
  {
    title: 'Your private data stays private.',
    body: 'Apps can store and sync encrypted notes, messages, or any other type of private record without their servers being able to read them.',
  },
  {
    title: 'You approve what apps can do.',
    body: 'Your wallet shows requests for sign-in, identity updates, payments, or data access before anything happens.',
  },
  {
    title: 'An Internet of Value you can trust.',
    body: 'Apps can work with identity, money, permissions, and all kinds of private data without building central databases of readable user information. The app stays useful, while control stays with the user.',
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
    dream: 'The server can store encrypted data it cannot read.',
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
                <span className="mt-1 block bg-[linear-gradient(180deg,#3165D4_0%,#3165D4_52%,#2457CB_74%,#083EB1_100%)] bg-clip-text text-center text-[64px] font-medium tracking-[0.05em] text-transparent md:text-[168px]">
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

            <div className="mx-auto mt-24 max-w-[620px] md:mt-32">
              <h2 className="mb-4 font-display text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
                Apps that serve without owning
              </h2>
              <div className="space-y-5 text-[17px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:space-y-6">
                <p>
                  One protocol for authentication, payments, identity, and
                  encryption. DREAM is a way to change what applications are
                  allowed to become.
                </p>
                <p>
                  Today, a simple product often grows into a place that keeps
                  the user's identity, payment history, private records,
                  permissions, and recovery path. DREAM starts from a different
                  premise: the next era of the internet should give applications
                  useful ways to serve people without taking permanent custody
                  of their lives.
                </p>
                <p>
                  VerusID gives users portable identity and data storage. Wallet
                  approval makes consent explicit. Protocol-level value lets
                  payments move without extra processors. App data can be stored
                  as ciphertext, so a server can sync and compute around it
                  without reading the private record itself.
                </p>
                <p>
                  That is the shift: software can feel familiar while the power
                  behind it moves back to the person using it.
                </p>
                <p>
                  Builders still create useful products, but the default
                  relationship changes. The user signs, proves, pays, decrypts,
                  and carries their data forward, while the app verifies what it
                  needs and leaves the rest alone.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-20 max-w-[620px] rounded-lg bg-gray-200/70 px-6 py-8 dark:bg-white/[0.04] md:mt-28 md:px-10 md:py-10">
              <h2 className="mb-5 font-display text-[30px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white">
                An early example: encrypted notes
              </h2>
              <div className="space-y-5 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
                <p>
                  A note-taking app shows what DREAM changes in practice.
                  Imagine an app that asks the user's wallet for two things in
                  one request: authenticate with a VerusID and approve
                  app-specific encryption material.
                </p>
                <p>
                  After the wallet shows the request and the user approves it,
                  the app receives a signed response it can verify. Notes could
                  sync through normal infrastructure while the server stores
                  only encrypted blobs and minimal metadata.
                </p>
                <p>
                  Install the app on another device, connect
                  the same wallet identity, approve the same app-encryption
                  request, and the same notes can unlock again. This is the kind
                  of app DREAM is designed to make possible. The wallet-side
                  pieces are already usable in Verus Mobile builds distributed
                  through TestFlight and APK download, with official wallet
                  releases planned.
                </p>
              </div>
            </div>

            <div className="mx-auto mt-36 max-w-[1320px] md:mt-44">
              <h2 className="text-center font-display text-[30px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white">
                The model in three steps
              </h2>

              <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3">
                {coreModelSteps.map((step) => {
                  const Icon = step.icon

                  return (
                    <div
                      key={step.title}
                      className="min-h-[200px] rounded-lg border border-gray-200 bg-white/60 p-6 dark:border-gray-800 dark:bg-white/[0.02] md:p-8"
                    >
                      <Icon className="h-7 w-7 text-gray-900 dark:text-white" />
                      <h3 className="mt-7 text-[20px] font-bold leading-tight tracking-normal text-gray-800 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="mt-4 max-w-[360px] text-[17px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300">
                        {step.body}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mx-auto mt-28 max-w-[980px] md:mt-36">
              <h2 className="mb-10 text-center font-display text-[30px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-14">
                What DREAM means
              </h2>
              <DreamAcronymTabs />
            </div>

            <div className="mx-auto mt-24 max-w-[1320px] md:mt-32">
              <div className="rounded-lg bg-white px-6 py-10 dark:bg-white/[0.03] md:px-10 md:py-16 lg:px-12 lg:py-20">
                <div className="mx-auto mb-10 max-w-[760px] text-center md:mb-14">
                  <h2 className="font-display text-[36px] font-medium leading-[1.15] tracking-tight text-gray-800 dark:text-white md:text-[56px]">
                    A different default for apps
                  </h2>
                  <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:mt-5">
                    DREAM shifts identity, data, payments, and consent back to
                    the user without changing what an app can do.
                  </p>
                </div>
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
                              Regular app model
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
                          Regular app model
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
              </div>
            </div>

            <div className="mx-auto mt-24 max-w-[620px] md:mt-32">
              <h2 className="mb-4 font-display text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
                Build apps users can own
              </h2>
              <div className="space-y-5 text-[17px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:space-y-6">
                <p>
                  GenericRequest is the builder surface for DREAM. Your app
                  describes what it wants to do, hands that request to the user,
                  and lets the wallet become the place where approval, proof,
                  payment, and encryption come together.
                </p>
                <HorizontalScrollFade>
                  <table className="w-full min-w-[560px] border-y border-gray-200 text-left dark:border-gray-800">
                    <thead>
                      <tr className="border-b border-gray-200 text-[15px] font-bold leading-tight tracking-normal text-gray-900 dark:border-gray-800 dark:text-white">
                        <th className="w-[42%] py-4 pr-5 align-top">
                          Library
                        </th>
                        <th className="w-[58%] py-4 align-top">
                          What it gives builders
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="py-5 pr-5 text-left align-top font-[450] text-gray-800 dark:text-white">
                          <a
                            href={verusidTsClientHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1 rounded-lg transition-colors hover:underline"
                          >
                            verusid-ts-client
                            <ExternalLink className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100" />
                          </a>
                        </th>
                        <td className="py-5 align-top">
                          Create, sign, and verify GenericRequests and
                          GenericResponses.
                        </td>
                      </tr>
                      <tr>
                        <th className="py-5 pr-5 text-left align-top font-[450] text-gray-800 dark:text-white">
                          <a
                            href={verusTypescriptPrimitivesHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1 rounded-lg transition-colors hover:underline"
                          >
                            verus-typescript-primitives
                            <ExternalLink className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100" />
                          </a>
                        </th>
                        <td className="py-5 align-top">
                          Work with the envelope and detail objects for
                          authentication, app encryption, payments, identity
                          updates, wallet backup, and data flows.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </HorizontalScrollFade>
                <p>
                  Treat those libraries as source material for an AI coding
                  agent. Ask it to map the GenericRequest details, explain what
                  wallet-approved actions are possible, and explore product
                  ideas that combine identity, payments, encryption, data flows,
                  and user consent.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="verusPrimary" size="verus">
                  <a href="/build/start/">
                    Start building
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
