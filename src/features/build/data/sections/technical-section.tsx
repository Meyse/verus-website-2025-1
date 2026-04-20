import {Code2, FileCode, Layers} from 'lucide-react'

/*
 * Updated:
 * - Transformed to match PBaaS content styling with modern gradient backgrounds
 * - Created more developer-focused title
 * - Added radial gradients and improved background elements
 * - Enhanced card designs with hover effects
 * - Improved spacing and layout for better readability
 */
export function TechnicalSection() {
  return (
    <section className="relative mb-24 md:mb-32">
      {/* Background decorative elements */}
      <div className="absolute left-10 top-0 -z-10 h-80 w-80 rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-500/10"></div>
      <div className="absolute bottom-20 right-10 -z-10 h-60 w-60 rounded-full bg-blue-500/5 blur-[100px] dark:bg-blue-500/10"></div>

      {/* Developer-focused Title */}
      <div className="mb-12 flex flex-col items-center justify-center md:mb-16">
        <h2 className="mx-auto mb-4 max-w-[1000px] text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-6 md:text-[55px]">
          Simple Developer-First APIs
        </h2>
        <p className="mx-auto max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[20px]">
          Leverage blockchain storage with familiar APIs designed for rapid
          integration into any app architecture.
        </p>
      </div>

      <div className="relative w-full overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 to-white p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>

        <div className="relative flex flex-col gap-8 md:flex-row md:gap-16">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <div className="space-y-4">
              <p className="text-[15px] leading-relaxed tracking-tight text-gray-600 dark:text-gray-300 md:text-[16px]">
                VDXF objects follow a standardized format that makes them easy
                to integrate into any application. Each object includes metadata
                about version, handling requirements, and content type.
              </p>
              <p className="text-[15px] leading-relaxed tracking-tight text-gray-600 dark:text-gray-300 md:text-[16px]">
                Applications can implement partial support for VDXF data types,
                using what they understand while safely ignoring the rest. This
                enables gradual adoption and compatibility across different
                systems.
              </p>
            </div>

            <div className="mt-12 space-y-8">
              {/* Object Format */}
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                    Data Object Structure
                  </h3>
                </div>
                <div className="rounded-lg border border-blue-100/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-blue-900/20 dark:bg-gray-800/50">
                  <ul className="space-y-3">
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Version tracking for compatibility
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Special handling flags
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Data payload field
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Human-readable labels
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Types */}
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                    <FileCode className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                    Content Management
                  </h3>
                </div>
                <div className="rounded-lg border border-blue-100/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-blue-900/20 dark:bg-gray-800/50">
                  <ul className="space-y-3">
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      MIME type specification
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Encryption metadata
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Custom type definitions
                    </li>
                    <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                      Schema validation rules
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full border-gray-200 dark:border-gray-700 md:w-1/2 md:border-l md:pl-16">
            <div className="space-y-8">
              {/* Implementation */}
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                    <Layers className="h-6 w-6" />
                  </div>
                  <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                    Developer Toolkit
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="rounded-lg border border-blue-100/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-blue-900/20 dark:bg-gray-800/50">
                    <h4 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                      RESTful API
                    </h4>
                    <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      Simple API commands for storing and retrieving data. No
                      need to handle complex blockchain interactions—the
                      protocol manages everything automatically.
                    </p>
                  </div>

                  <div className="rounded-lg border border-blue-100/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-blue-900/20 dark:bg-gray-800/50">
                    <h4 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white md:text-[18px]">
                      Query System
                    </h4>
                    <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                      Efficient querying through VDXF keys. Find and retrieve
                      data across multiple chains with simple lookups based on
                      type and namespace.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
