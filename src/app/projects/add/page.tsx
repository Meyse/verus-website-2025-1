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
  Describe what the project does and how it uses Verus.

  ## Features

  - Feature one
  - Feature two

category: "app"
repoUrl: "https://github.com/your-org/your-repo"
websiteUrl: "https://your-project.example"
docsUrl: "https://docs.your-project.example"
verusFeatures:
  - VerusID`

const registryRepoUrl = 'https://github.com/Meyse/verus-projects'
const registryNewIssueUrl =
  'https://github.com/Meyse/verus-projects/issues/new/choose'

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
                <ol className="space-y-5 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                  <li>
                    <span className="font-medium text-gray-800 dark:text-white">
                      1. Create a project file
                    </span>
                    <br />
                    In the registry repo, add a YAML file at{' '}
                    <code className="rounded-md border border-gray-200 bg-white px-1.5 py-0.5 text-[14px] text-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:text-white">
                      projects/your-project-slug/project.yaml
                    </code>
                    .
                  </li>
                  <li>
                    <span className="font-medium text-gray-800 dark:text-white">
                      2. Add optional images
                    </span>
                    <br />
                    Add project images next to the YAML file under{' '}
                    <code className="rounded-md border border-gray-200 bg-white px-1.5 py-0.5 text-[14px] text-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:text-white">
                      projects/your-project-slug/
                    </code>
                    . Use <code>logo.png</code>, <code>screenshot1.png</code>{' '}
                    through <code>screenshot6.png</code>, and{' '}
                    <code>featured.png</code> when the project should be
                    eligible for the Featured section.
                  </li>
                  <li>
                    <span className="font-medium text-gray-800 dark:text-white">
                      3. Submit for review
                    </span>
                    <br />
                    Open a pull request in the registry repo. If that is not
                    convenient, use the project submission issue form or ask for
                    help in the #marketing channel in Discord.
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
                      href={registryNewIssueUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Use issue form
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
