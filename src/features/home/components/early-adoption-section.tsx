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
          className={`relative overflow-hidden border-gray-200 p-10 dark:border-gray-800 md:p-14 ${getCellBorders(
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
          className={`relative overflow-hidden border-gray-200 p-10 dark:border-gray-800 md:p-14 ${getCellBorders(
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
          className={`relative overflow-hidden border-gray-200 p-10 dark:border-gray-800 md:p-14 ${getCellBorders(
            2
          )}`}
        >
          <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
          <div className="relative z-10">
            <span className="bg-gradient-to-br from-blue-400 to-verus-blue bg-clip-text text-[80px] leading-none tracking-tight text-transparent dark:from-blue-300 dark:to-verus-blue md:text-[100px] lg:text-[120px]">
              $500M+
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
          className={`relative overflow-hidden border-gray-200 p-10 dark:border-gray-800 md:p-14 ${getCellBorders(
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
          className={`relative overflow-hidden border-gray-200 p-10 dark:border-gray-800 md:p-14 ${getCellBorders(
            4
          )}`}
        >
          <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
          <div className="relative z-10">
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              No Smart Contract Dependencies
            </h3>
            <p className="max-w-[500px] text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[17px]">
              Currencies, DeFi, identity and data operations run at the protocol
              level. No permission-based wallets, no contract vulnerabilities,
              no audits needed. Just direct transactions validated by every
              node.
            </p>
          </div>
        </div>

        <div
          className={`relative overflow-hidden border-gray-200 p-10 dark:border-gray-800 md:p-14 ${getCellBorders(
            5
          )}`}
        >
          <div className="absolute right-0 top-0 z-0 h-[250px] w-[250px] -translate-y-1/3 translate-x-1/3 transform rounded-full bg-blue-500/5 blur-[60px] dark:bg-blue-500/10"></div>
          <div className="relative z-10">
            <h3 className="mb-4 font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
              Build More, Code Less
            </h3>
            <p className="max-w-[500px] text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[17px]">
              Use any programming language with simple API calls. No Solidity
              learning curve, no gas optimization, no MEV protection needed. The
              protocol handles security so you can focus on features.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
