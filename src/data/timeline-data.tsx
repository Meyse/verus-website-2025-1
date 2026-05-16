import {env} from '@/configs/env'

// Static milestone data that can be server-rendered
export const milestones = [
  {
    date: 'MAY 2018',
    title: 'Genesis: a fair beginning',
    description:
      'Verus launched with 15 minutes of notice and no premine, ICO, or developer fee. The first release included VerusHash 1.0, Verus Proof of Power consensus, and zk-SNARK privacy support.',
    link: {
      text: 'Bitcointalk announcement thread',
      url: 'https://bitcointalk.org/index.php?topic=4070404.0',
    },
    cta: {
      text: 'Learn about Verus',
      href: '/intro',
    },
  },
  {
    date: 'OCT 2018',
    title: 'StakeGuard solution and privacy upgrade',
    description:
      "StakeGuard was added to address Nothing at Stake risks in proof-of-stake systems. The same period also brought Zcash's Sapling upgrade, improving shielded transaction performance on Verus.",
    link: {
      text: "Read how Verus fixed 'nothing-at-stake'",
      url: `${env.NEXT_PUBLIC_VERUS_MEDIUM}/how-verus-solved-nothing-at-stake-and-weak-subjectivity-proof-of-stake-problems-b4dd6a85086e`,
    },
    cta: {
      text: 'Explore staking',
      href: '/staking',
    },
  },
  {
    date: 'DEC 2018',
    title: 'VerusHash 2.0: mining equality',
    description:
      'VerusHash 2.0 reduced the mining efficiency gap between consumer computers and specialized hardware. The update made CPU mining more competitive and kept mining accessible to more participants.',
    cta: {
      text: 'Explore mining',
      href: '/mining',
    },
  },
  {
    date: 'DEC 2019',
    title: 'VerusID and mining refinement',
    description:
      'VerusID activated on mainnet, giving users blockchain-native identities with self-sovereign control. VerusHash 2.1 also refined mining behavior to keep participation balanced across hardware types.',
    cta: {
      text: 'Explore VerusID',
      href: '/verusid',
    },
  },
  {
    date: 'NOV 2021',
    title: 'Verus Vault and marketplace',
    description:
      'Verus Vault added time-locking for funds held in VerusIDs. The VerusID Marketplace also went live, allowing users to trade VerusIDs and VRSC directly on-chain without a third party.',
    cta: {
      text: 'Explore marketplace tools',
      href: '/build/marketplace',
    },
  },
  {
    date: 'MAY 2023',
    title: 'PBaaS and protocol DeFi',
    description:
      'PBaaS support made it possible to launch connected blockchains and different currency types from the protocol. The update also added protocol-level DeFi features designed to reduce front-running and custom contract risk.',
    cta: {
      text: 'Explore PBaaS chains',
      href: '/build/pbaas-chains',
    },
  },
  {
    date: 'OCT 2023',
    title: 'Verus-Ethereum bridge',
    description:
      'The Verus-Ethereum Bridge connected Verus and Ethereum without a third-party custodian. Bridge.vETH launched with it as a basket currency using VRSC, ETH, DAI, and MKR for cross-chain conversions.',
    cta: {
      text: 'Explore the bridge',
      href: '/ethereum-bridge',
    },
  },
  {
    date: 'DEC 2023',
    title: 'Auto-arbitrage',
    description:
      "Auto-arbitrage connected the on-chain marketplace's limit orders with DeFi liquidity baskets. This helped route liquidity between order books and baskets inside the protocol.",
    cta: {
      text: 'Explore DeFi payments',
      href: '/build/defi-payments',
    },
  },
  {
    date: 'MAR 2024',
    title: 'Verus Storage',
    description:
      'Verus Storage added native data storage across PBaaS chains. Users can store indexed, retrievable data on-chain with fees based on storage size.',
    cta: {
      text: 'Explore data storage',
      href: '/build/data',
    },
  },
  {
    date: 'APR 2026',
    title: 'DREAM application model',
    description:
      'DREAM became possible as wallet-side GenericRequest and app-encryption work became available in Verus Mobile. Apps can now ask users to approve identity, payment, and encrypted data flows directly from the wallet.',
    cta: {
      text: 'Explore DREAM',
      href: '/dream',
    },
  },
] as const
