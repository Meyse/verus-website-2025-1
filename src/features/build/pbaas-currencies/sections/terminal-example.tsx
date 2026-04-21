import {Code} from 'lucide-react'

export function TerminalExample() {
  return (
    <section className="relative mb-24 md:mt-32">
      <div className="mb-16 flex flex-col items-center justify-center">
        <h2 className="mx-auto mb-4 max-w-[1000px] text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[55px]">
          Create Currencies with One Command
        </h2>
        <p className="mx-auto max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[20px]">
          Create powerful financial instruments with simple API commands and
          flexible parameters.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-gray-800/80 bg-gradient-to-br from-gray-950 to-gray-900 p-6 shadow-lg md:p-8">
        <div className="absolute left-0 right-0 top-0 flex h-10 items-center bg-gradient-to-r from-gray-800 to-gray-900 px-4">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="ml-4 font-mono text-xs text-gray-400">
            Terminal - verus
          </div>
        </div>

        <div className="overflow-x-auto pt-8 font-mono text-[13px] leading-relaxed md:text-[14px]">
          <p className="mb-4 text-green-400">
            # Creating a community currency with multiple reserve currencies
          </p>
          <p className="mb-6 text-blue-400">./verus definecurrency {'{'}</p>
          <div className="mb-6 pl-4">
            <p className="text-gray-300">
              <span className="text-pink-400">"name"</span>:{' '}
              <span className="text-yellow-300">"Community Currency"</span>,
            </p>
            <p className="text-gray-300">
              <span className="text-pink-400">"options"</span>:{' '}
              <span className="text-yellow-300">33</span>,{' '}
              <span className="text-blue-300">{'// basket currency'}</span>
            </p>
            <p className="text-gray-300">
              <span className="text-pink-400">"currencies"</span>: [
              <span className="text-yellow-300">"VRSC"</span>,{' '}
              <span className="text-yellow-300">"tBTC.vETH"</span>],
            </p>
            <p className="text-gray-300">
              <span className="text-pink-400">"initialcontributions"</span>: [
              <span className="text-yellow-300">5000</span>,{' '}
              <span className="text-yellow-300">1</span>],
            </p>
            <p className="text-gray-300">
              <span className="text-pink-400">"minpreconversion"</span>: [
              <span className="text-yellow-300">10000</span>,{' '}
              <span className="text-yellow-300">2</span>],
            </p>
            <p className="text-gray-300">
              <span className="text-pink-400">"initialsupply"</span>:{' '}
              <span className="text-yellow-300">10000</span>,
            </p>
            <p className="text-gray-300">
              <span className="text-pink-400">"prelaunchcarveout"</span>:{' '}
              <span className="text-yellow-300">"0.1"</span>,
            </p>
            <p className="text-gray-300">
              <span className="text-pink-400">"preallocations"</span>: [
            </p>
            <div className="pl-4">
              <p className="text-gray-300">
                {'{'} <span className="text-pink-400">"Marketing Fund@"</span>:{' '}
                <span className="text-yellow-300">2000</span> {'}'}
              </p>
            </div>
            <p className="text-gray-300">]</p>
          </div>
          <p className="mb-4 text-blue-400">{'}'}</p>
        </div>
      </div>

      <div className="relative mt-8 overflow-hidden rounded-xl border border-blue-100/80 bg-white/80 px-8 py-6 backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/50">
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-400/5 blur-2xl dark:bg-blue-400/10"></div>
        <div className="relative flex items-start gap-4">
          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
            <Code className="h-5 w-5" />
          </div>
          <div>
            <h4 className="mb-2 text-[18px] font-medium text-gray-900 dark:text-white">
              Key Parameters
            </h4>
            <ul className="space-y-2">
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                <strong>options:33</strong> - Creates a basket currency with
                reserve backing
              </li>
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                <strong>currencies</strong> - Defines which currencies back the
                basket currency (VRSC and tBTC.vETH)
              </li>
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                <strong>initialcontributions</strong> - Initial reserve amounts
                developers must provide
              </li>
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                <strong>minpreconversion</strong> - Minimum funding thresholds
                for the preconversion phase
              </li>
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                <strong>prelaunchcarveout</strong> - Percentage of reserves sent
                to developer before launch (10%)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
