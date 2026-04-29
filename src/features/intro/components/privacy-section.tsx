import {Eye, Lock, Shield} from 'lucide-react'

import {IntroFeatureSection} from './section-layout'

export function PrivacySection() {
  return (
    <IntroFeatureSection
      title="Privacy is a human right. Verus takes this seriously"
      tone="gradient"
      features={[
        {
          icon: Eye,
          title: 'User control',
          description:
            'Switch seamlessly between transparent and private transactions. Every PBaaS chain inherits these privacy capabilities, ensuring consistent control across the network.',
        },
        {
          icon: Lock,
          title: 'Protocol-level privacy',
          description:
            "Privacy isn't an add-on feature. zk-SNARK technology is embedded at the protocol level, ensuring the highest standard of privacy protection across all operations.",
        },
        {
          icon: Shield,
          title: 'Beyond transactions',
          description:
            'Privacy extends to identity, data, and more. Protect what matters while still participating fully in the digital economy.',
        },
      ]}
    >
      <p>
        Privacy is necessary to truly empower individuals and communities. That
        is why Verus utilizes privacy technology called zk-SNARKs. It is the
        industry-leading standard for privacy enabling technology. The
        technology is embedded in the protocol layer of the network and cannot
        be seen as an afterthought.
      </p>
      <p>
        Users can easily choose between transparent and private transactions on
        the Verus blockchain, and all PBaaS-chains.
      </p>
      <p>
        This isn't just about hiding transactions. It's about giving users
        control over their financial and digital identity. Every individual
        should have the power to choose when to be public and when to be
        private.
      </p>
    </IntroFeatureSection>
  )
}
