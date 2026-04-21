import Link from 'next/link'

import {
  Award,
  BadgeDollarSign,
  FileText,
  Fingerprint,
  Lock,
  ShieldCheck,
  UserCheck,
  Users,
  Wallet,
} from 'lucide-react'

/*
 * Updated: Corrected technical information about SubIDs, clarified they can only be created
 * from currencies, and restructured the section to better explain their features, creation controls,
 * registration fees, and various use cases.
 */
export function SubIDSection() {
  return (
    <section className="relative mb-24 md:mt-32">
      <div className="mb-16 flex flex-col items-center justify-center">
        <h2 className="mx-auto mb-4 max-w-[1000px] text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[55px]">
          Name Your Community with Flexible SubIDs
        </h2>
        <p className="mx-auto mb-6 max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[20px]">
          Every currency on Verus can serve as a namespace for self-sovereign
          identities called SubIDs. Users can register identities like
          "Username.Currency@", creating a built-in identity system for your
          community or project.
        </p>

        <p className="mx-auto mb-8 max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[18px]">
          SubIDs inherit all the powerful features of VerusID—they can hold
          funds, store data, and serve as authentication credentials. This
          creates a complete identity infrastructure tied directly to your
          currency.
        </p>

        <Link
          href="/build/verusid"
          className="group mt-2 flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50/80 px-5 py-3 text-[13px] text-blue-600 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[1px] hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md dark:border-blue-800/40 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700/60 dark:hover:bg-blue-950/50 dark:hover:text-blue-200 dark:hover:shadow-blue-950/40 md:text-[15px]"
        >
          <Fingerprint className="h-5 w-5" />
          <span>Learn more about VerusID</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4 transition-all duration-300 group-hover:translate-x-1"
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
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left Column */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-gradient-to-br from-blue-50/90 to-white p-8 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:from-blue-950/40 dark:to-gray-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl dark:bg-blue-400/20"></div>

          <div className="relative space-y-8">
            {/* Creation Controls */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Creation Controls
                </h3>
              </div>
              <ul className="space-y-4 pl-4">
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Require referrals from existing ID holders
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Restrict creation to currency controller only
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Create invitation-based identity systems
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Control community growth and participation
                </li>
              </ul>
            </div>

            {/* Registration Fees */}
            <div>
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                  <BadgeDollarSign className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Registration Fees
                </h3>
              </div>
              <ul className="space-y-4 pl-4">
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Fees paid in the currency's native token
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Decentralized: Fees are burned, increasing value
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Centralized: Fees go to currency controller
                </li>
                <li className="relative pl-6 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                  <div className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60"></div>
                  Creates sustainable revenue model
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-100/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-900/50">
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-blue-400/10 blur-xl dark:bg-blue-400/20"></div>
          <div className="relative">
            <div className="mb-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100/80 bg-white/90 text-blue-600 shadow-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:text-blue-400">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Identity Use Cases
                </h3>
              </div>
            </div>

            {/* Community Membership */}
            <div className="mb-6 pl-4">
              <h4 className="mb-2 flex items-center gap-2 text-[18px] font-medium text-gray-900 dark:text-white">
                <UserCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Community Membership
              </h4>
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                VerusIDs can serve as membership credentials, giving users
                verifiable proof of belonging to your community. Perfect for
                DAOs, fan clubs, and online communities.
              </p>
            </div>

            {/* Digital Asset Ownership */}
            <div className="mb-6 pl-4">
              <h4 className="mb-2 flex items-center gap-2 text-[18px] font-medium text-gray-900 dark:text-white">
                <Wallet className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Digital Asset Ownership
              </h4>
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                VerusIDs can hold tokens, NFTs, and other digital assets. Users
                can prove ownership and transfer assets securely using their
                identity.
              </p>
            </div>

            {/* Authentication & Access */}
            <div className="mb-6 pl-4">
              <h4 className="mb-2 flex items-center gap-2 text-[18px] font-medium text-gray-900 dark:text-white">
                <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Authentication & Access
              </h4>
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                Use VerusIDs for password-free login to applications and
                services. Control access to exclusive content or features based
                on identity ownership.
              </p>
            </div>

            {/* Reputation Systems */}
            <div className="pl-4">
              <h4 className="mb-2 flex items-center gap-2 text-[18px] font-medium text-gray-900 dark:text-white">
                <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Reputation Systems
              </h4>
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                Build reputation and trust systems around VerusIDs. Track
                contributions, engagement, and standing within your community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Namespace Example */}
      <div className="relative mt-8 overflow-hidden rounded-xl border border-blue-100/80 bg-white/80 px-8 py-6 backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/50">
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-400/5 blur-2xl dark:bg-blue-400/10"></div>
        <div className="relative flex items-start gap-4">
          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <h4 className="mb-2 text-[18px] font-medium text-gray-900 dark:text-white">
              Namespace Example
            </h4>
            <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
              If your currency is named{' '}
              <code className="rounded bg-blue-50/50 px-1.5 py-0.5 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                COMMUNITY
              </code>
              , users can register SubIDs like{' '}
              <code className="rounded bg-blue-50/50 px-1.5 py-0.5 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                alice.COMMUNITY@
              </code>{' '}
              or{' '}
              <code className="rounded bg-blue-50/50 px-1.5 py-0.5 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                dao.COMMUNITY@
              </code>
              . These SubIDs function just like VerusIDs but cannot create new
              currencies or blockchains. They can hold funds, store data, and be
              used for authentication within your ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
