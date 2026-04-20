import {Code, Database} from 'lucide-react'

/*
 * Created:
 * - Terminal example component showing how to store data in a VerusID/subID
 * - Styled with modern gradient backgrounds and developer-focused design
 * - Includes explanations of key parameters for data storage
 * - Matches the PBaaS style and other components on the page
 */
export function DataStorageExample() {
  return (
    <section className="relative mb-24 md:mt-32">
      <div className="mb-16 flex flex-col items-center justify-center">
        <h2 className="mx-auto mb-4 max-w-[1000px] text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[55px]">
          Store Data with Simple Commands
        </h2>
        <p className="mx-auto max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[20px]">
          Add structured data to your VerusID with a single API call, creating a
          permanent on-chain data store.
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
            # Storing multiple data objects in a VerusID using contentmultimap
          </p>
          <p className="mb-6 text-blue-400">./verus updateidentity '{'{'}</p>
          <div className="mb-6 pl-4">
            <p className="text-gray-300">
              <span className="text-pink-400">"name"</span>:{' '}
              <span className="text-yellow-300">"yourid"</span>,
            </p>
            <p className="text-gray-300">
              <span className="text-pink-400">"contentmultimap"</span>: {'{'}
            </p>
            <div className="pl-4">
              <p className="text-gray-300">
                <span className="text-yellow-300">
                  "iMvTg2HGhKKGYMqtapvRyfZNahbzmD9R3b"
                </span>
                : [
              </p>
              <div className="pl-4">
                <p className="text-gray-300">{'{'}</p>
                <div className="pl-4">
                  <p className="text-gray-300">
                    <span className="text-yellow-300">
                      "i4GC1YGEVD21afWudGoFJVdnfjJ5XWnCQv"
                    </span>
                    :{'{'}
                  </p>
                  <div className="pl-4">
                    <p className="text-gray-300">
                      <span className="text-pink-400">"version"</span>:{' '}
                      <span className="text-yellow-300">1</span>,
                    </p>
                    <p className="text-gray-300">
                      <span className="text-pink-400">"label"</span>:{' '}
                      <span className="text-yellow-300">
                        "i3esdByX2PKx5vJiuNrRb61KAKqsBEMxac"
                      </span>
                      ,
                    </p>
                    <p className="text-gray-300">
                      <span className="text-pink-400">"mimetype"</span>:{' '}
                      <span className="text-yellow-300">"text/plain"</span>,
                    </p>
                    <p className="text-gray-300">
                      <span className="text-pink-400">"objectdata"</span>: {'{'}
                    </p>
                    <div className="pl-4">
                      <p className="text-gray-300">
                        <span className="text-pink-400">"message"</span>:{' '}
                        <span className="text-yellow-300">"Bookshop"</span>
                      </p>
                    </div>
                    <p className="text-gray-300">{'}'}</p>
                  </div>
                  <p className="text-gray-300">{'}'},</p>
                </div>
                <p className="text-gray-300">{'}'}</p>
              </div>
              <div className="pl-0 text-gray-300">
                <p>
                  <span className="text-blue-300">
                    {'// Additional data entries omitted for clarity'}
                  </span>
                </p>
              </div>
              <p className="text-gray-300">]</p>
            </div>
            <p className="text-gray-300">{'}'}</p>
          </div>
          <p className="mb-4 text-blue-400">{'}'}'</p>
        </div>
      </div>

      <div className="relative mt-8 overflow-hidden rounded-xl border border-blue-100/80 bg-white/80 px-8 py-6 backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/50">
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-400/5 blur-2xl dark:bg-blue-400/10"></div>
        <div className="relative flex items-start gap-4">
          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
            <Database className="h-5 w-5" />
          </div>
          <div>
            <h4 className="mb-2 text-[18px] font-medium text-gray-900 dark:text-white">
              Data Structure
            </h4>
            <ul className="space-y-2">
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                <strong>contentmultimap</strong> - Maps namespaces to
                collections of data objects, enabling complex data structures
              </li>
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                <strong>iMvTg...D9R3b</strong> - vdxfkey: myId.vrsc::shop
              </li>
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                <strong>i4GC1...nCQv</strong> - This is a dataDescriptor key
              </li>
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                <strong>label</strong> - vdxfkey: myId.vrsc::shop.type
              </li>
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                <strong>objectdata</strong> - Contains the actual content being
                stored (any JSON structure)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative mt-8 overflow-hidden rounded-xl border border-blue-100/80 bg-white/80 px-8 py-6 backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/50">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/5 blur-2xl dark:bg-blue-400/10"></div>
        <div className="relative flex items-start gap-4">
          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
            <Code className="h-5 w-5" />
          </div>
          <div>
            <h4 className="mb-2 text-[18px] font-medium text-gray-900 dark:text-white">
              Example Use Case
            </h4>
            <p className="mb-4 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
              This example stores business location data in a structured format.
              The three entries contain:
            </p>
            <ul className="space-y-2">
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Business name ("Bookshop")
              </li>
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Location address ("15 Sea View, Miami, 132523")
              </li>
              <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                Property value ("$100,000")
              </li>
            </ul>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
              Each data point has its own label (vdxfkey) for easy access and
              querying, while being cryptographically tied to the parent
              VerusID.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
