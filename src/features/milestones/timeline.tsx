'use client'

import { useEffect, useRef } from 'react'

import { env } from '@/configs/env'
import { milestones } from '@/data/timeline-data'
import { BarChart3, Clock, Download } from 'lucide-react'

/*
 * Updated:
 * - Added dark mode support with appropriate colors and contrasts
 * - Enhanced with modern SaaS-style design elements
 * - Added background blur and gradient effects
 * - Improved visual hierarchy with better spacing and typography
 * - Fixed linter errors related to milestone.link property
 * - Added decorative elements for a more polished appearance
 */

export function TimelineClient() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Add animate-in class to first two items on mount
    const timelineItems = document.querySelectorAll('.timeline-item')
    timelineItems.forEach((item, index) => {
      if (index < 2) {
        item.classList.add('animate-in')
      }
    })

    // Set up intersection observer for remaining items
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    // Only observe items after the first two
    timelineItems.forEach((item, index) => {
      if (index >= 2) {
        observer.observe(item)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative py-16 md:py-24">
      {/* Background decorative elements */}
      <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-blue-400/5 blur-3xl dark:bg-blue-400/10"></div>
      <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-blue-400/5 blur-3xl dark:bg-blue-400/10"></div>

      <div
        ref={timelineRef}
        className="relative mx-auto max-w-[1200px] px-4 md:px-0"
      >
        {/* Timeline line */}
        <div className="absolute bottom-0 left-[28px] top-0 w-px bg-gradient-to-b from-verus-blue via-verus-blue/25 to-transparent md:left-1/2" />

        {/* Timeline items */}
        <div className="relative space-y-16 md:space-y-24">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`timeline-item translate-y-4 transform opacity-0 transition-all duration-500 ease-out ${index < 2 ? 'initial-item' : ''} `}
            >
              <div
                className={`relative flex flex-col md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16'} `}
              >
                {/* Year marker - Only show on desktop */}
                <div
                  className="absolute hidden h-16 w-16 items-center justify-center rounded-full border border-blue-100/80 bg-white shadow-lg dark:border-blue-900/30 dark:bg-gray-800/90 md:flex"
                  style={{
                    top: '50%',
                    transform: 'translateY(-50%)',
                    [index % 2 === 0 ? 'left' : 'right']: '-32px',
                    zIndex: 10,
                  }}
                >
                  <div className="h-3 w-3 animate-pulse rounded-full bg-verus-blue dark:bg-blue-400"></div>
                </div>

                {/* Content */}
                <div
                  className={`relative overflow-hidden rounded-xl border border-blue-100/80 bg-white/90 p-6 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/50 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:p-8`}
                >
                  {/* Decorative gradients */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
                  <div
                    className={`absolute ${index % 2 === 0 ? '-bottom-8 -right-8' : '-left-8 -top-8'} h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20`}
                  ></div>

                  <div className="relative">
                    <div className="mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-verus-blue dark:text-blue-400" />
                      <div className="text-[13px] font-medium tracking-wider text-verus-blue dark:text-blue-400 md:text-[14px]">
                        {milestone.date}
                      </div>
                    </div>

                    <h3 className="mb-4 text-[18px] font-medium tracking-tight text-gray-900 dark:text-white md:text-[22px]">
                      {milestone.title}
                    </h3>

                    <p className="text-[14px] leading-[1.8] text-gray-700 dark:text-gray-300 md:text-[15px]">
                      {milestone.description}
                    </p>

                    {'link' in milestone && (
                      <a
                        href={milestone.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-6 flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
                      >
                        {/* Medium icon for the specific Medium article link */}
                        {milestone.link.text.includes('nothing-at-stake') && (
                          <svg
                            className="mr-2 h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                          </svg>
                        )}

                        {milestone.link.text}

                        {/* External link icon for Bitcointalk thread, arrow for other links */}
                        {milestone.link.text.includes('Bitcointalk') ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        ) : milestone.link.text.includes(
                            'nothing-at-stake'
                          ) ? null : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                        )}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future roadmap indication */}
        <div className="mt-16 text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-blue-100/80 bg-white shadow-lg dark:border-blue-900/30 dark:bg-gray-800/90">
            <BarChart3 className="h-5 w-5 text-verus-blue dark:text-blue-400" />
          </div>
          <h3 className="mb-2 text-[18px] font-medium tracking-tight text-gray-900 dark:text-white md:text-[22px]">
            The Next Phase of the Journey
          </h3>
          <p className="mx-auto max-w-md text-[15px] text-gray-600 dark:text-gray-400 md:text-[16px]">
            With the protocol vision now complete, the focus shifts to
            empowering developers and builders to leverage Verus technology for
            innovative (decentralized) applications and solutions.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-4 md:flex-row">
            <a
              href="/papers/VerusVision.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Vision Paper
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <a
              href={`${env.NEXT_PUBLIC_VERUS_DOCS}/overview/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-[40px] w-fit items-center justify-center rounded-lg border border-blue-200 bg-white/80 px-8 text-[14px] font-medium text-verus-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:text-blue-600 hover:shadow-lg dark:border-blue-800/60 dark:bg-blue-950/80 dark:text-blue-300 dark:hover:border-blue-700 dark:hover:text-blue-200 dark:hover:shadow-blue-950/50 md:h-[50px] md:text-[16px]"
            >
              Start Building
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
          </div>
        </div>
      </div>
    </div>
  )
}
