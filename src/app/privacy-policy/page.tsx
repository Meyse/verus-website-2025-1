import type {Metadata} from 'next'

import {env} from '@/configs/env'

import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: "Verus privacy policy - we don't track you, we mean it.",
  keywords:
    'Verus privacy policy, no tracking, no cookies, privacy focused, blockchain privacy',
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <BgWrapper size="small">
      <div className="flex flex-col">
        <div className="flex-grow py-8 md:py-16">
          <div className="mx-auto max-w-[1220px] md:px-8">
            <div className="mb-8 px-4 md:mb-12 md:px-0">
              <h1 className="text-[22px] font-medium leading-snug tracking-tight text-verus-blue dark:text-blue-400 md:text-[40px]">
                Privacy Policy
              </h1>
              <p className="mt-4 max-w-[800px] text-[16px] text-gray-700 dark:text-gray-300 md:text-[20px]">
                We don't track you. We mean it. We're big advocates for
                maximizing privacy and freedom.
              </p>
            </div>

            <div className="mb-16 px-4 md:px-0">
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white/90 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-black/30">
                <div className="p-6 md:p-8">
                  <div className="space-y-8">
                    <section>
                      <h2 className="mb-4 text-xl font-medium text-gray-900 dark:text-gray-100">
                        General
                      </h2>

                      <p className="text-gray-700 dark:text-gray-300">
                        This site doesn't set any cookies and uses no analytics
                        or tracking tools. Feel free to check the source. The
                        Verus Insight Explorer stores the coin symbol as well as
                        the supplied client language in the browser, albeit not
                        as a cookie.
                      </p>
                    </section>

                    <section>
                      <h2 className="mb-4 text-xl font-medium text-gray-900 dark:text-gray-100">
                        Logs
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300">
                        Request information such as IP addresses and user agents
                        may be stored in server log files for up to 14 days on
                        encrypted volumes for maintenance and diagnostic
                        purposes, and are not shared with third-parties.
                      </p>
                    </section>

                    <section>
                      <h2 className="mb-4 text-xl font-medium text-gray-900 dark:text-gray-100">
                        Forms
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300">
                        Data submitted using forms, such as the Verus ID lookup
                        or signature verification are only ever used to complete
                        your request. The URL of the request is logged (refer to
                        "Logs"); the response is not logged. Specifically, the
                        API lookups will be proxied to an external API endpoint.
                        Your IP address is not part of the proxied request.
                      </p>
                    </section>

                    <section>
                      <h2 className="mb-4 text-xl font-medium text-gray-900 dark:text-gray-100">
                        Contact
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300">
                        If you have any questions or concerns about this policy
                        please contact us on our{' '}
                        <a
                          href={env.NEXT_PUBLIC_DISCORD}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-verus-blue hover:underline dark:text-blue-400"
                        >
                          official Discord server
                        </a>
                        .
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}
