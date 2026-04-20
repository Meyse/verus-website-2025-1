import {Globe, History, Leaf, Scale, Shield, Zap} from 'lucide-react'

export function GreenContent() {
  return (
    <div className="relative -mx-4 mt-8 w-screen md:mx-0 md:mt-32 md:max-w-[1220px]">
      {/* Introduction Section */}
      <section className="relative mb-24">
        <div className="relative">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mx-auto mb-4 max-w-[1000px] text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[55px]">
              Environmentally Conscious Blockchain Technology
            </h2>
            <p className="mx-auto mb-16 max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[20px]">
              Verus combines the security of proof-of-work with the energy
              efficiency of proof-of-stake in a hybrid approach that prioritizes
              sustainability without compromising on decentralization or
              security.
            </p>
          </div>
        </div>
      </section>

      {/* The Verus Green Advantage Section */}
      <section className="relative mb-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="relative overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-br from-green-50/90 to-white p-8 shadow-sm backdrop-blur-sm dark:border-green-900/30 dark:from-green-950/40 dark:to-gray-950 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-green-400/10 blur-xl dark:bg-green-400/20"></div>

            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-green-600 shadow-sm dark:bg-gray-800/90 dark:text-green-400">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="text-[24px] font-medium text-gray-900 dark:text-white md:text-[32px]">
                  The Verus Green Advantage
                </h3>
              </div>

              <p className="mb-6 max-w-4xl text-[16px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[18px]">
                As the world grows increasingly concerned about the
                environmental impact of blockchain technology, Verus stands
                apart with its approach that drastically reduces energy
                consumption while maintaining the highest standards of security
                and decentralization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Proof of Work Is Essential Section */}
      <section className="relative mb-24">
        <h2 className="mb-4 text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-10 md:text-[45px]">
          Why Proof of Work Is Essential
        </h2>

        <p className="mx-auto mb-16 max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[18px]">
          While Verus is committed to environmental sustainability, the protocol
          also recognizes the critical importance of maintaining a proof-of-work
          component in the consensus mechanism.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {/* Decentralized Security */}
          <div className="relative flex-1 overflow-hidden rounded-2xl border border-green-100/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm dark:border-green-900/30 dark:bg-gray-900/50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-green-400/10 blur-xl dark:bg-green-400/20"></div>

            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-100/80 bg-white/90 text-green-600 shadow-sm dark:border-green-900/30 dark:bg-gray-800/90 dark:text-green-400">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Decentralized Security
                </h3>
              </div>

              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                Proof-of-work (PoW) provides a level of security that is
                difficult to match with other consensus mechanisms. By requiring
                computational work to validate transactions, PoW ensures that no
                single entity can control the network without investing
                substantial resources, making attacks prohibitively expensive.
              </p>
            </div>
          </div>

          {/* Fair Distribution */}
          <div className="relative flex-1 overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-br from-green-50/70 to-white p-8 shadow-sm backdrop-blur-sm dark:border-green-900/30 dark:from-green-950/40 dark:to-gray-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]"></div>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green-400/10 blur-2xl dark:bg-green-400/20"></div>

            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-100/80 bg-white/90 text-green-600 shadow-sm dark:border-green-900/30 dark:bg-gray-800/90 dark:text-green-400">
                  <Scale className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Fair Distribution
                </h3>
              </div>

              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                Unlike many cryptocurrency projects that launch with pre-mines
                or ICOs, PoW allows for a fair distribution of tokens over time
                to those who contribute computational resources to secure the
                network. This creates a more equitable foundation for the
                cryptocurrency ecosystem.
              </p>
            </div>
          </div>

          {/* Proven Reliability */}
          <div className="relative flex-1 overflow-hidden rounded-2xl border border-green-100/80 bg-white/70 p-8 shadow-sm backdrop-blur-sm dark:border-green-900/30 dark:bg-gray-900/50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-green-400/10 blur-xl dark:bg-green-400/20"></div>

            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-100/80 bg-white/90 text-green-600 shadow-sm dark:border-green-900/30 dark:bg-gray-800/90 dark:text-green-400">
                  <History className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Proven Reliability
                </h3>
              </div>

              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                PoW has stood the test of time as the most battle-tested
                consensus mechanism in the cryptocurrency space. First
                implemented by Bitcoin, it has demonstrated its resilience
                against various types of attacks over more than a decade of
                continuous operation.
              </p>
            </div>
          </div>

          {/* Real-World Cost Anchoring */}
          <div className="relative flex-1 overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-br from-green-50/70 to-white p-8 shadow-sm backdrop-blur-sm dark:border-green-900/30 dark:from-green-950/40 dark:to-gray-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]"></div>
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green-400/10 blur-2xl dark:bg-green-400/20"></div>

            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-100/80 bg-white/90 text-green-600 shadow-sm dark:border-green-900/30 dark:bg-gray-800/90 dark:text-green-400">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-[20px] font-medium text-gray-900 dark:text-white md:text-[24px]">
                  Real-World Cost Anchoring
                </h3>
              </div>

              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 md:text-[16px]">
                By tying blockchain validation to real-world resources
                (computation and energy), PoW creates an economic bridge between
                digital assets and physical reality. This provides a fundamental
                value anchor that purely virtual consensus mechanisms cannot
                replicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative mb-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="relative overflow-hidden rounded-2xl border border-green-100/80 bg-gradient-to-br from-green-50/90 to-white p-8 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-green-900/30 dark:from-green-950/40 dark:to-gray-950 dark:shadow-[0_4px_40px_-12px_rgba(0,0,0,0.3)] md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_50%)]"></div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-green-400/10 blur-xl dark:bg-green-400/20"></div>

            <div className="relative">
              <div className="mb-4 font-serif text-5xl text-green-600 dark:text-green-400">
                "
              </div>
              <p className="mb-6 max-w-4xl text-[18px] font-light italic leading-relaxed text-gray-700 dark:text-gray-200 md:text-[24px]">
                Verus Proof of Power combines the best of both worlds—the proven
                security of proof-of-work with the energy efficiency of
                proof-of-stake—creating a hybrid system that is both
                environmentally conscious and reliably secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Best of Both Worlds Section */}
      <section className="relative mb-24">
        <div className="mx-auto w-full max-w-[1100px]">
          <h2 className="mb-6 text-center text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-10 md:text-[45px]">
            The Best of Both Worlds
          </h2>

          <p className="mx-auto mb-12 max-w-3xl text-center text-[16px] text-gray-600 dark:text-gray-300 md:text-[18px]">
            By combining proof-of-work with proof-of-stake in a hybrid approach,
            Verus achieves robust security while significantly reducing
            environmental impact.
          </p>

          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: <Shield className="h-5 w-5" />,
                title: 'Enhanced Security',
                description: 'Through dual validation methods',
                detail: '',
              },
              {
                icon: <Leaf className="h-5 w-5" />,
                title: 'Reduced Energy Usage',
                description: 'Compared to pure PoW systems',
                detail: '',
              },
              {
                icon: <Zap className="h-5 w-5" />,
                title: '51% Attack Resistance',
                description: 'Via innovative Proof of Power consensus',
                detail: '',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="rounded-xl border border-green-100/60 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 dark:border-green-900/20 dark:bg-gray-800/30"
              >
                <div className="mb-4 flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-[18px] font-medium text-gray-900 dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-[15px] text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                <div className="pl-[52px]">
                  <p className="text-[14px] text-gray-600 dark:text-gray-300">
                    {benefit.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
