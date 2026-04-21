/*
 * Updated:
 * - Transformed component to match PBaaS chains styling with modern gradient backgrounds
 * - Added developer-focused title with gradient text and decorative backgrounds
 * - Created a more engaging and centered title for developers
 * - Improved table design with better visual hierarchy and spacing
 * - Enhanced component with modern borders, shadows, and hover states
 * - Maintained original content while improving overall visual appeal
 * - Fixed linter errors by replacing colSpan with grid-column-span-3
 * - Removed blur effect from under the title
 * - Removed hover effects from comparison table rows
 * - Removed background container gradient
 * - Put title part after em dash on a new line
 */
export function ComparisonSection() {
  return (
    <section className="relative mb-24 md:mt-32">
      <div className="absolute left-10 top-40 h-64 w-64 rounded-full bg-blue-400/5 blur-3xl dark:bg-blue-400/10"></div>
      <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-blue-400/5 blur-3xl dark:bg-blue-400/10"></div>

      <div className="relative">
        <div className="mb-16 flex flex-col items-center justify-center">
          <h2 className="mx-auto mb-4 max-w-[1000px] text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[55px]">
            Compare Financial Protocols for Your dApp
          </h2>
          <p className="mx-auto max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[20px]">
            Understand the technical advantages of building with Verus compared
            to traditional VM-based platforms
          </p>
        </div>

        {/* Scrollable wrapper */}
        <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
          {/* Comparison Table */}
          <div className="min-w-[900px] overflow-hidden rounded-xl border border-blue-100/80 bg-white/80 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/30 md:w-full">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr,1fr,1fr] bg-gradient-to-r from-blue-50/90 to-white/90 dark:from-blue-950/40 dark:to-gray-900/40">
              <div className="p-6 text-[16px] font-medium text-gray-900 dark:text-white md:p-8 md:text-[18px]">
                Feature
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[16px] font-medium text-gray-900 dark:border-blue-900/20 dark:text-white md:p-8 md:text-[18px]">
                Verus DeFi
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[16px] font-medium text-gray-900 dark:border-blue-900/20 dark:text-white md:p-8 md:text-[18px]">
                (E)VM Chain DeFi
              </div>
            </div>

            {/* Implementation Model Section */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 bg-gradient-to-r from-blue-50/90 to-white/90 dark:border-blue-900/20 dark:from-blue-950/40 dark:to-gray-900/40">
              <div className="col-span-full p-6 font-medium text-gray-900 dark:text-white md:p-8">
                Implementation Model
              </div>
            </div>

            {/* Architecture */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 font-medium text-gray-900 dark:text-white md:p-8">
                Architecture
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p className="mb-2 font-medium text-gray-900 dark:text-white">
                  Protocol-Level Implementation
                </p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>DeFi functionality built directly into L1 consensus</li>
                  <li>All operations validated by miners and stakers</li>
                  <li>No separation between native and token accounting</li>
                </ul>
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p className="mb-2 font-medium text-gray-900 dark:text-white">
                  Smart Contract Based
                </p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>DeFi functionality implemented as code running on EVM</li>
                  <li>Operations validated by contract code execution</li>
                  <li>Separation between native ETH and contract tokens</li>
                </ul>
              </div>
            </div>

            {/* Programming Required */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 font-medium text-gray-900 dark:text-white md:p-8">
                Programming Required
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                Launch currencies, pools, and DeFi operations using simple API
                commands
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                Requires Solidity programming skills or using existing smart
                contracts
              </div>
            </div>

            {/* Deployment Costs */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 font-medium text-gray-900 dark:text-white md:p-8">
                Deployment Costs
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p>Fixed & Low:</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>
                    200 VRSC to launch a currency/token on the Verus blockchain
                    (is chain dependent)
                  </li>
                  <li>No gas volatility</li>
                </ul>
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p>Variable:</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>
                    Smart contract deployment can be high, depending on hiring
                    specialized developers
                  </li>
                </ul>
              </div>
            </div>

            {/* Security Section */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 bg-gradient-to-r from-blue-50/90 to-white/90 dark:border-blue-900/20 dark:from-blue-950/40 dark:to-gray-900/40">
              <div className="col-span-full p-6 font-medium text-gray-900 dark:text-white md:p-8">
                Security
              </div>
            </div>

            {/* Smart Contract Risk */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 font-medium text-gray-900 dark:text-white md:p-8">
                Smart Contract Risk
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                None: No smart contract vulnerabilities as DeFi operations are
                built into consensus
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                High: Vulnerable to smart contract bugs, hacks, and exploits
                ($3B+ lost to hacks since 2020)
              </div>
            </div>

            {/* MEV Protection */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 font-medium text-gray-900 dark:text-white md:p-8">
                MEV Protection
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p>Built-in MEV Resistance:</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>All conversions processed simultaneously</li>
                  <li>No front-running attacks</li>
                  <li>No sandwich attacks</li>
                  <li>No transaction reordering exploits</li>
                </ul>
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p>Vulnerable to MEV:</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>Front-running common and profitable</li>
                  <li>Sandwich attacks frequent</li>
                  <li>Block builders can extract value</li>
                </ul>
              </div>
            </div>

            {/* Wallet Approvals */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 font-medium text-gray-900 dark:text-white md:p-8">
                Wallet Approvals
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                Direct control of assets through protocol interactions
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                Unlimited Approvals Common: Users often grant unlimited token
                approvals to contracts
              </div>
            </div>

            {/* Transaction Costs Section */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 bg-gradient-to-r from-blue-50/90 to-white/90 dark:border-blue-900/20 dark:from-blue-950/40 dark:to-gray-900/40">
              <div className="col-span-full p-6 font-medium text-gray-900 dark:text-white md:p-8">
                Transaction Costs
              </div>
            </div>

            {/* Swap/Trade Fees */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 font-medium text-gray-900 dark:text-white md:p-8">
                Swap/Trade Fees
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p>Low:</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>0.025% for currency-to-liquidity pool</li>
                  <li>0.05% for currency-to-currency</li>
                  <li>Half goes to rewards, half to reserves</li>
                </ul>
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p>Higher:</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>Typically 0.3% to 1% swap fee</li>
                  <li>Plus gas fees for each transaction</li>
                  <li>Usually goes to liquidity providers and protocol</li>
                </ul>
              </div>
            </div>

            {/* Gas/Network Fees */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 font-medium text-gray-900 dark:text-white md:p-8">
                Gas/Network Fees
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p>Fixed & Predictable:</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>0.0001 VRSC transaction fee</li>
                  <li>No fee auctions or congestion pricing</li>
                  <li>If chain gets congested, move to other chain</li>
                </ul>
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p>Variable & Unpredictable:</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>Can range from $1 to $100+ during congestion</li>
                  <li>Fee auctions during high demand periods</li>
                </ul>
              </div>
            </div>

            {/* Functionality Section */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 bg-gradient-to-r from-blue-50/90 to-white/90 dark:border-blue-900/20 dark:from-blue-950/40 dark:to-gray-900/40">
              <div className="col-span-full p-6 font-medium text-gray-900 dark:text-white md:p-8">
                Functionality
              </div>
            </div>

            {/* Multi-Currency Support */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 font-medium text-gray-900 dark:text-white md:p-8">
                Multi-Currency Support
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p>Native Protocol Support:</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>VRSC and all PBaaS currencies</li>
                  <li>Bridged Ethereum assets</li>
                  <li>Liquidity pool currencies with up to 10 reserves</li>
                </ul>
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p>Contract-Based Support:</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>Only tokens implementing specific interfaces</li>
                  <li>ERC-20 tokens most common</li>
                </ul>
              </div>
            </div>

            {/* Liquidity Pools */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 font-medium text-gray-900 dark:text-white md:p-8">
                Liquidity Pools
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p>Protocol-Level Baskets:</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>Up to 10 reserve currencies</li>
                  <li>Configurable reserve ratios (5% to 100%)</li>
                  <li>Automatic supply management</li>
                  <li>Fair price discovery mechanism</li>
                </ul>
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p>Contract-Based Pools:</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>Usually limited to 2-3 tokens per pool</li>
                  <li>Fixed fee structures</li>
                  <li>Various price discovery mechanisms</li>
                  <li>Vulnerable to frontrunning</li>
                </ul>
              </div>
            </div>

            {/* Identity Integration */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 font-medium text-gray-900 dark:text-white md:p-8">
                Identity Integration
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p>Built-in VerusID:</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>Human-readable addresses</li>
                  <li>Revocable and recoverable</li>
                  <li>Data storage capabilities</li>
                </ul>
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p>Limited:</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>No native identity system</li>
                  <li>ENS and similar services are add-ons</li>
                  <li>Not recoverable if keys lost</li>
                </ul>
              </div>
            </div>

            {/* Performance & Scalability Section */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 bg-gradient-to-r from-blue-50/90 to-white/90 dark:border-blue-900/20 dark:from-blue-950/40 dark:to-gray-900/40">
              <div className="col-span-full p-6 font-medium text-gray-900 dark:text-white md:p-8">
                Performance & Scalability
              </div>
            </div>

            {/* Throughput */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 font-medium text-gray-900 dark:text-white md:p-8">
                Throughput
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p>Scale-Out Architecture:</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>75-800 TPS per chain</li>
                  <li>Unlimited scaling through PBaaS</li>
                  <li>Horizontal scaling across chains</li>
                </ul>
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p>Limited Base Layer:</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>15-30 TPS on Ethereum</li>
                  <li>Layer 2 solutions required for scaling</li>
                  <li>Still bottlenecked by main chain</li>
                </ul>
              </div>
            </div>

            {/* Block Time */}
            <div className="grid grid-cols-[1fr,1fr,1fr] border-t border-blue-100/60 dark:border-blue-900/20">
              <div className="p-6 font-medium text-gray-900 dark:text-white md:p-8">
                Block Time
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p>Fast:</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>1-minute blocks (on Verus blockchain)</li>
                  <li>PBaaS chains can have 10 second blocks</li>
                </ul>
              </div>
              <div className="border-l border-blue-100/60 p-6 text-[14px] text-gray-700 dark:border-blue-900/20 dark:text-gray-300 md:p-8 md:text-[15px]">
                <p>Fast:</p>
                <ul className="list-disc space-y-1 pl-4">
                  <li>12-14 second blocks on Ethereum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
