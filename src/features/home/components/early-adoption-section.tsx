import {ExternalLink} from 'lucide-react'

export function EarlyAdoptionSection() {
  const getCellBorders = (index: number) => {
    const isDesktopRightColumn = index % 2 === 1
    const isDesktopFirstRow = index < 2

    return [
      index > 0 && 'max-md:border-t',
      isDesktopRightColumn && 'md:border-l',
      !isDesktopFirstRow && 'md:border-t',
    ]
      .filter(Boolean)
      .join(' ')
  }

  return (
    <div className="border-t border-gray-200 dark:border-gray-800">
      {/* Combined stats and info grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* TVL stat */}
        <div
          className={`relative overflow-hidden border-gray-200 px-10 py-[60px] dark:border-gray-800 md:px-14 md:py-[84px] ${getCellBorders(
            0
          )}`}
        >
          <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
          <div className="relative z-10">
            <span className="bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-[80px] leading-none tracking-tight text-transparent dark:from-blue-300 dark:to-blue-500 md:text-[100px] lg:text-[120px]">
              $30M+
            </span>
            <div className="mt-3">
              <span className="text-[15px] font-medium text-gray-600 dark:text-gray-400 md:text-[17px]">
                Total value locked
              </span>
            </div>
          </div>
        </div>
        {/* Registration stat */}
        <div
          className={`relative overflow-hidden border-gray-200 px-10 py-[60px] dark:border-gray-800 md:px-14 md:py-[84px] ${getCellBorders(
            1
          )}`}
        >
          <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
          <div className="relative z-10">
            <span className="bg-gradient-to-br from-blue-400 to-verus-blue bg-clip-text text-[80px] leading-none tracking-tight text-transparent dark:from-blue-300 dark:to-verus-blue md:text-[100px] lg:text-[120px]">
              41k+
            </span>
            <div className="mt-3">
              <span className="text-[15px] font-medium text-gray-600 dark:text-gray-400 md:text-[17px]">
                VerusID registrations
              </span>
            </div>
          </div>
        </div>

        {/* DeFi volume stat */}
        <div
          className={`relative overflow-hidden border-gray-200 px-10 py-[60px] dark:border-gray-800 md:px-14 md:py-[84px] ${getCellBorders(
            2
          )}`}
        >
          <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
          <div className="relative z-10">
            <span className="bg-gradient-to-br from-blue-400 to-verus-blue bg-clip-text text-[80px] leading-none tracking-tight text-transparent dark:from-blue-300 dark:to-verus-blue md:text-[100px] lg:text-[120px]">
              $750M+
            </span>
            <div className="mt-3">
              <span className="text-[15px] font-medium text-gray-600 dark:text-gray-400 md:text-[17px]">
                Lifetime on-chain DeFi volume (since 2023)
              </span>
            </div>
          </div>
        </div>

        {/* Chains stat */}
        <div
          className={`relative overflow-hidden border-gray-200 px-10 py-[60px] dark:border-gray-800 md:px-14 md:py-[84px] ${getCellBorders(
            3
          )}`}
        >
          <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
          <div className="relative z-10">
            <span className="bg-gradient-to-br from-blue-400 to-verus-blue bg-clip-text text-[80px] leading-none tracking-tight text-transparent dark:from-blue-300 dark:to-verus-blue md:text-[100px] lg:text-[120px]">
              4
            </span>
            <div className="mt-3">
              <span className="text-[15px] font-medium text-gray-600 dark:text-gray-400 md:text-[17px]">
                Chains in the ecosystem
              </span>
            </div>
          </div>
        </div>

        <div
          className={`relative overflow-hidden border-gray-200 px-10 py-[60px] dark:border-gray-800 md:px-14 md:py-[84px] ${getCellBorders(
            4
          )}`}
        >
          <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
          <div className="relative z-10">
            <h3 className="mb-4 font-display font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Build more, code less
            </h3>
            <p className="max-w-[500px] text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[17px]">
              Use simple API calls in any language. No Solidity, gas tuning,
              MEV protection, permission-based wallets, contract vulnerabilities
              or audits. Nodes validate every transaction directly, making it
              easy for developers.
            </p>
            <a
              href="https://wiki.verus.io/#!faq-cli/clifaq-02_verus_commands.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group -ml-2 mt-5 inline-flex items-start rounded-lg p-2 transition-colors [&>div>div]:hover:underline"
            >
              <div>
                <div className="mb-1 flex items-center gap-2 text-[15px] font-[450] text-gray-800 dark:text-white">
                  See all 207 API calls
                  <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />
                </div>
              </div>
            </a>
          </div>
        </div>

        <div
          className={`relative flex items-center overflow-hidden border-gray-200 px-10 py-[60px] dark:border-gray-800 md:px-14 md:py-[84px] ${getCellBorders(
            5
          )}`}
        >
          <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
          <div className="relative z-10">
            <span className="bg-gradient-to-br from-blue-400 to-verus-blue bg-clip-text text-[80px] leading-none tracking-tight text-transparent dark:from-blue-300 dark:to-verus-blue md:text-[100px] lg:text-[120px]">
              60+
            </span>
            <div className="mt-3">
              <span className="text-[15px] font-medium text-gray-600 dark:text-gray-400 md:text-[17px]">
                Verus-specific API calls to build decentralized apps
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
