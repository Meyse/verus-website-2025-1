import {Lock, Rocket, Settings} from 'lucide-react'

function DecentralizedModel() {
  const items = [
    'No single entity controls supply',
    'Supply changes based on protocol rules',
    'SubID registration fees are burned',
    'Perfect for community-driven projects',
  ]

  return (
    <div className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50">
      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>
      <div className="relative">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
            <Lock className="h-6 w-6" />
          </div>
          <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
            Decentralized
          </h3>
        </div>
        <ul className="space-y-4 pl-4">
          {items.map((item, i) => (
            <li
              key={i}
              className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]"
            >
              <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function CentralizedModel() {
  const items = [
    'Controller can mint new supply at will',
    'Controller can burn existing supply',
    'Complete supply control by issuer',
    'SubID registration fees go to controller',
  ]

  return (
    <div className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/70 to-white p-8 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>
      <div className="relative">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
            <Settings className="h-6 w-6" />
          </div>
          <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
            Centralized
          </h3>
        </div>
        <ul className="space-y-4 pl-4">
          {items.map((item, i) => (
            <li
              key={i}
              className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]"
            >
              <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function LaunchRequirements() {
  const namespaceItems = [
    'First acquire a VerusID from the chain',
    "Create currency using VerusID's namespace",
    'One currency name per VerusID',
    'SubIDs can be created under namespace',
  ]

  const costItems = [
    'Verus mainnet: 200 VRSC per currency',
    'PBaaS chains: Set by chain launcher',
    "Paid in chain's native currency",
  ]

  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50">
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>
      <div className="relative">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
            <Rocket className="h-6 w-6" />
          </div>
          <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
            Launch Requirements
          </h3>
        </div>

        <div className="space-y-8">
          <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
            <h4 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white">
              VerusID Namespace
            </h4>
            <ul className="space-y-3">
              {namespaceItems.map((item, i) => (
                <li
                  key={i}
                  className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]"
                >
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-blue-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm dark:border-blue-900/20 dark:bg-gray-800/50">
            <h4 className="mb-4 text-[16px] font-medium text-gray-900 dark:text-white">
              Launch Costs
            </h4>
            <ul className="space-y-3">
              {costItems.map((item, i) => (
                <li
                  key={i}
                  className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]"
                >
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ControlModels() {
  return (
    <section className="relative mb-24">
      <div className="mb-16 flex flex-col items-center justify-center">
        <h2 className="mx-auto mb-4 max-w-[1000px] text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[55px]">
          Choose Your Currency Control Model
        </h2>
        <p className="mx-auto max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[20px]">
          Decide between fully decentralized or controlled currencies, with
          flexible options for each model.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <DecentralizedModel />
        </div>
        <div className="md:col-span-1">
          <CentralizedModel />
        </div>
        <div className="md:col-span-1">
          <LaunchRequirements />
        </div>
      </div>
    </section>
  )
}
