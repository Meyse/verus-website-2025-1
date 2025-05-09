import { ArrowLeftRight, Coins, Shield, Zap, Rocket, Database, Code, BarChart3, Store, ExternalLink, DollarSign, Ban, Lock } from "lucide-react"
import Link from "next/link"

export function MigrateContent() {
  return (
    <div className="-mx-4 md:mx-0 w-screen md:max-w-[1220px] mt-8 md:mt-32 relative">
     
      
      {/* 1:1 ERC-20 Mapping Section */}
      <section className="mb-24 relative">
        <div className="w-full max-w-[1100px] mx-auto">
          <div className="bg-gradient-to-br from-blue-50/90 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
            
            <div className="relative">
              <h2 className="text-[28px] md:text-[40px] text-gray-800 dark:text-white tracking-tight font-medium leading-[1.2] mb-4 md:mb-6">
                <span className="text-gray-600 dark:text-white">1:1 ERC-20 Mapping—</span>{""}
                <span className="bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
                  The Best of Both Worlds
                </span>
              </h2>
              
              <p className="text-[16px] md:text-[18px] text-gray-600 dark:text-gray-300 leading-relaxed mb-10 max-w-4xl">
                One of Verus's most powerful features is the ability to create currencies on Verus that are mapped 1:1 with existing ERC-20 tokens through the Verus-Ethereum Bridge.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Store className="h-5 w-5" />,
                    title: "Create a Mapped Currency",
                    description: "Launch a currency on Verus that is directly mapped to your existing ERC-20 token"
                  },
                  {
                    icon: <Lock className="h-5 w-5" />,
                    title: "Non-Custodial Bridge",
                    description: "The Verus-Ethereum Bridge is non-custodial and decentralized-no entity controls your assets"
                  },
                  {
                    icon: <ArrowLeftRight className="h-5 w-5" />,
                    title: "Seamless Movement",
                    description: "Users can move tokens freely between Ethereum and Verus networks"
                  },
                  {
                    icon: <Coins className="h-5 w-5" />,
                    title: "Dual Ecosystem Access",
                    description: "Your token remains accessible in Ethereum while gaining all Verus capabilities"
                  }
                ].map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-white/70 dark:bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 border border-blue-100/80 dark:border-blue-900/30 transition-all duration-300 group"
                  >
                    <div className="h-10 w-10 rounded-full bg-blue-100/80 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-[18px] font-medium text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-[14px] text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <section className="mb-24 relative">
        <h2 className="text-[28px] md:text-[45px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-4 md:mb-10">
          <span className="text-gray-600 dark:text-white">Key Benefits Over Staying on Ethereum</span>
          
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-16">
          {/* Dramatically Lower Fees */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <DollarSign className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Dramatically Lower Fees
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex flex-col items-center bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                  <span className="text-[24px] md:text-[32px] font-semibold bg-gradient-to-r from-verus-blue to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                    0.0001
                  </span>
                  <span className="text-[13px] text-gray-600 dark:text-gray-400 mt-1">VRSC per TX</span>
                </div>
                <div className="flex flex-col items-center bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-3 rounded-xl border border-blue-100/60 dark:border-blue-900/20">
                  <span className="text-[24px] md:text-[32px] font-semibold bg-gradient-to-r from-verus-blue to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                    0.05%
                  </span>
                  <span className="text-[13px] text-gray-600 dark:text-gray-400 mt-1">Max DeFi Fee</span>
                </div>
              </div>
              
              <ul className="space-y-4 pl-4">
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Standard transactions cost just a fraction of a cent
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  DeFi operations cost only 0.025% to 0.05% with no gas fees
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  No gas wars: predictable, stable fees regardless of network congestion
                </li>
              </ul>
            </div>
          </div>
          
          {/* MEV Resistance */}
          <div className="flex-1 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <Ban className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  MEV Resistance
                </h3>
              </div>
              
              <ul className="space-y-4 pl-4">
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  <span className="font-medium">No Front-Running:</span> Verus protocol processes all transactions within a block simultaneously
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  <span className="font-medium">Fair Pricing:</span> All users converting within the same block get the same fair price
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  <span className="font-medium">No Sandwich Attacks:</span> Transactions cannot be reordered within a block for profit
                </li>
              </ul>
            </div>
          </div>
          
          {/* Enhanced Security */}
          <div className="flex-1 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-xl"></div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Enhanced Security
                </h3>
              </div>
              
              <ul className="space-y-4 pl-4">
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  <span className="font-medium">Protocol-Level Security:</span> All currencies are validated by the consensus mechanism
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  <span className="font-medium">No Smart Contract Risk:</span> Features operate through "smart transactions" at the protocol level
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  <span className="font-medium">51% Attack Resistance:</span> Verus Proof of Power requires attackers to control both hash power and stake
                </li>
              </ul>
            </div>
          </div>
          
          {/* Advanced DeFi Capabilities */}
          <div className="flex-1 bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-950/40 dark:to-gray-950 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-400/10 dark:bg-blue-400/20 blur-2xl"></div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-blue-100/80 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm">
                  <Store className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-gray-900 dark:text-white">
                  Advanced DeFi Capabilities
                </h3>
              </div>
              
              <ul className="space-y-4 pl-4">
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  <span className="font-medium">Basket Currencies:</span> Use your mapped token as a reserve in basket currencies (liquidity pools)
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  <span className="font-medium">Multi-Currency Baskets:</span> Create baskets with up to 10 currencies in reserves
                </li>
                <li className="relative text-[15px] md:text-[16px] text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  <span className="font-medium">Backing Percentage:</span> Set reserve ratios between 5% and 100% in a basket currency
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Migration Process Section */}
      <section className="mb-24 relative">
        <div className="w-full max-w-[1100px] mx-auto">
          <h2 className="text-[28px] md:text-[45px] text-gray-800 dark:text-white tracking-tight font-medium text-center leading-[1.2] mb-6 md:mb-10">
            <span className="text-gray-600 dark:text-white">How to </span>{""}
            <span className="bg-gradient-to-r from-verus-blue to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">
              Migrate Your Token
            </span>
          </h2>
          
          <p className="text-center text-[16px] md:text-[18px] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
            Migration to Verus is straightforward and maintains compatibility with your existing ecosystem
          </p>
          
          <div className="bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-blue-100/80 dark:border-blue-900/30 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
            
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    title: "Register VerusID",
                    description: "Create a namespace for your project"
                  },
                  {
                    step: "2",
                    title: "Map Your ERC-20",
                    description: "Launch a currency mapped to your token with a single command"
                  },
                  {
                    step: "3",
                    title: "Export Currency to Ethereum",
                    description: "Complete the bridge by exporting the mapped currency to Ethereum network"
                  },
                  {
                    step: "4",
                    title: "Create DeFi Instruments",
                    description: "Optionally build basket currencies and liquidity pools with your token"
                  }
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-gradient-to-br from-blue-50/80 to-white/80 dark:from-blue-950/60 dark:to-gray-950/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100/80 dark:border-blue-900/30 h-full flex flex-col">
                      <div className="flex flex-col items-center text-center mb-4">
                        <div className="h-12 w-12 rounded-full bg-blue-600 dark:bg-blue-600 text-white flex items-center justify-center font-semibold text-xl flex-shrink-0 mb-4">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-[15px] text-center">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
   
      
      {/* CTA Section */}
      <section className="mb-24 text-center">
        <h2 className="text-[24px] md:text-[36px] text-gray-900 dark:text-white font-medium mb-6">
          Ready to Migrate Your Token?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.verus.io/discord"
            target="_blank"
            rel="noopener noreferrer"
            className="group h-[50px] px-8 bg-white/80 dark:bg-blue-950/80 backdrop-blur-sm border border-blue-200 dark:border-blue-800/60 rounded-lg text-[16px] font-medium text-verus-blue dark:text-blue-300 flex items-center justify-center hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-950/50 hover:text-blue-600 dark:hover:text-blue-200 hover:-translate-y-[1px]"
          >
            Get help from the community
            <ExternalLink className="h-4 w-4 ml-2" />
          </a>
          <Link
            href="https://docs.verus.io/currencies/mapping-1:1-eth.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group h-[50px] px-8 bg-gradient-to-r from-verus-blue to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white rounded-lg text-[16px] font-medium flex items-center justify-center hover:shadow-lg hover:shadow-blue-600/25 dark:hover:shadow-blue-900/50 transition-all duration-300 hover:-translate-y-[1px]"
          >
            View documentation
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
} 