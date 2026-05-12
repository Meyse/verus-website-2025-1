import type {Metadata} from 'next'

import Link from 'next/link'

import {env} from '@/configs/env'
import {ProjectTemplateActions} from '@/features/projects/project-template-actions'
import {ArrowLeft, ExternalLink} from 'lucide-react'
import {IoLogoDiscord} from 'react-icons/io5'

import {Button} from '@/components/ui/button'
import {BgWrapper} from '@/components/bg-wrapper'

export const metadata: Metadata = {
  title: 'Add a Project | Verus projects',
  description:
    'Learn how to submit a wallet, application, dashboard, or tool for the Verus projects index.',
}

const yamlTemplate = `name: "Your project name"
slug: "your-project-slug"
description: "Short one-line description"
longDescription: |
  Describe what the project does and how it uses Verus. Markdown is supported.

  ## Features

  - Feature one
  - Feature two

# wallet | app | dashboard | tool | other
category: "app"

# Optional project maintainer. Defaults to the GitHub repository owner when
# repoUrl is provided, otherwise "Verus community".
# maintainer: "Your name or organization"

# Optional, but recommended when the project is open source.
# repoUrl: "https://github.com/your-org/your-repo"

# Optional project links. Delete unused fields.
# websiteUrl: "https://your-project.example"
# docsUrl: "https://docs.your-project.example"

# VerusID, Currencies, DeFi, Cross-chain, Zero-knowledge privacy,
# Marketplace, Data, PBaaS-chain, Staking, Mining
verusFeatures:
  - VerusID

# Optional images go next to this file. Featured images are optional. Wallets,
# apps, and dashboards with one are eligible for the random 24-hour Featured
# rotation on verus.io.
# - logo.png/logo.jpg/logo.webp: 128x128px square
# - featured.png/featured.jpg/featured.webp: 800x300px, 8:3 aspect ratio
# - screenshot1.png through screenshot6.png: at least 1200px wide`

const registryRepoUrl = 'https://github.com/Meyse/verus-projects'

export default function AddProjectPage() {
  return (
    <BgWrapper>
      <div className="bg-gradient-to-b from-gray-100 via-gray-100 to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950">
        <div className="flex flex-col items-center px-0 pb-16 pt-0 md:pb-24 xl:px-4 xl:pt-[54px]">
          <div className="w-full min-w-0 max-w-full overflow-hidden border-b border-gray-200 bg-gray-50 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] dark:border-gray-800 dark:bg-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.2)] xl:max-w-[900px] xl:rounded-lg xl:border">
            <section className="border-b border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
              <div className="px-8 py-10 md:px-14 md:py-14">
                <Link
                  className="mb-8 inline-flex items-center gap-2 rounded-lg text-[14px] font-medium text-gray-600 transition-colors hover:text-verus-blue dark:text-gray-300 dark:hover:text-white"
                  href="/projects"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to projects
                </Link>
                <h1 className="max-w-[760px] break-words text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white max-md:max-w-[calc(100vw-4rem)] md:text-[44px]">
                  Add a project
                </h1>
                <p className="mt-4 max-w-[760px] break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 max-md:max-w-[calc(100vw-4rem)] md:mt-6 md:text-[17px]">
                  Projects are listed from a small community registry repo. Add
                  one YAML file and optional images there, then submit it for
                  review.
                </p>
              </div>
            </section>

            <section className="bg-gray-50 dark:bg-gray-950">
              <div className="border-b border-gray-200 px-8 py-10 dark:border-gray-800 md:px-14">
                <h2 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                  How to submit
                </h2>
                <ol className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
                  <li className="grid gap-4 py-6 md:grid-cols-[2.25rem_1fr]">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200">
                      1
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-medium tracking-tight text-gray-800 dark:text-white">
                        Fork the registry repo
                      </h3>
                      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                        Project submissions happen through pull requests so the
                        registry can validate them before publishing.
                      </p>
                    </div>
                  </li>
                  <li className="grid gap-4 py-6 md:grid-cols-[2.25rem_1fr]">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200">
                      2
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-medium tracking-tight text-gray-800 dark:text-white">
                        Create a project file
                      </h3>
                      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                        Add one YAML file for the project. Delete optional URL
                        fields you do not use.
                      </p>
                      <div className="mt-3 overflow-x-auto">
                        <code className="inline-flex max-w-full rounded-md border border-gray-200 bg-white px-2 py-1 text-[14px] text-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:text-white">
                          projects/your-project-slug/project.yaml
                        </code>
                      </div>
                    </div>
                  </li>
                  <li className="grid gap-4 py-6 md:grid-cols-[2.25rem_1fr]">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200">
                      3
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-medium tracking-tight text-gray-800 dark:text-white">
                        Add optional images
                      </h3>
                      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                        Put images next to the YAML file in the project folder.
                        PNG, JPG, and WebP are supported.
                      </p>
                      <div className="mt-3 overflow-x-auto">
                        <code className="inline-flex max-w-full rounded-md border border-gray-200 bg-white px-2 py-1 text-[14px] text-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:text-white">
                          projects/your-project-slug/
                        </code>
                      </div>

                      <div className="mt-5 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                        <div className="divide-y divide-gray-200 dark:divide-gray-800 md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
                          <div className="p-4">
                            <div className="text-xs font-medium uppercase tracking-normal text-gray-500 dark:text-gray-400">
                              Logo
                            </div>
                            <code className="mt-2 block text-[14px] text-gray-800 dark:text-white">
                              logo.png
                            </code>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                              Optional. Use a square 128x128px image.
                            </p>
                          </div>
                          <div className="p-4">
                            <div className="text-xs font-medium uppercase tracking-normal text-gray-500 dark:text-gray-400">
                              Screenshots
                            </div>
                            <code className="mt-2 block text-[14px] text-gray-800 dark:text-white">
                              screenshot1.png
                            </code>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                              Optional. Use up to 6 images, at least 1200px
                              wide.
                            </p>
                          </div>
                          <div className="p-4">
                            <div className="text-xs font-medium uppercase tracking-normal text-gray-500 dark:text-gray-400">
                              Featured
                            </div>
                            <code className="mt-2 block text-[14px] text-gray-800 dark:text-white">
                              featured.png
                            </code>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                              Optional. Use 800x300px. Wallets, apps, and
                              dashboards can rotate every 24 hours, with up to 3
                              shown.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="grid gap-4 py-6 md:grid-cols-[2.25rem_1fr]">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200">
                      4
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-medium tracking-tight text-gray-800 dark:text-white">
                        Submit for review
                      </h3>
                      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                        Open a pull request in the registry repo. If you need
                        help preparing the PR, ask in the #marketing channel in
                        Discord.
                      </p>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed tracking-normal text-gray-500 dark:text-gray-400">
                        After merge, the registry republishes automatically and
                        the website can take up to 24 hours to show the new
                        project.
                      </p>
                    </div>
                  </li>
                </ol>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="verus" variant="verusPrimary">
                    <a
                      href={registryRepoUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Open registry repo
                      <ExternalLink className="h-4 w-4 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                    </a>
                  </Button>
                  <Button asChild size="verus" variant="verusSecondary">
                    <a
                      href={env.NEXT_PUBLIC_DISCORD}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Ask in Discord
                      <IoLogoDiscord className="h-4 w-4 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="px-8 py-10 md:px-14">
                <h2 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
                  YAML template
                </h2>
                <ProjectTemplateActions template={yamlTemplate} />
                <pre className="max-w-full overflow-x-auto rounded-lg border border-gray-200 bg-white p-5 text-[13px] leading-relaxed text-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100">
                  <code>{yamlTemplate}</code>
                </pre>
              </div>
            </section>
          </div>
        </div>
      </div>
    </BgWrapper>
  )
}
