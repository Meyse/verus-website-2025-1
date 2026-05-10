// Static FAQ data can be server-side rendered
export const faqData = [
  {
    title: 'Basic understanding',
    questions: [
      {
        q: 'What is Verus?',
        a: 'Verus is a public blockchain protocol designed for true scalability and security, using pure transaction logic instead of smart contracts. It enables anyone to create and use blockchain infrastructure without coding.',
      },
      {
        q: 'How is Verus different from other blockchain protocols?',
        a: 'Unlike most blockchain projects that use smart contracts and had ICOs/premines, Verus uses a secure transaction-based architecture, had a fair launch with no ICO, no premine, and no developer fees.',
      },
      {
        q: 'What makes Verus truly decentralized?',
        a: 'Verus achieves natural decentralization through extremely low barriers to participation in mining and staking, combined with its fair launch and absence of controlling entities or pre-allocated coins.',
      },
      {
        q: "Why doesn't Verus use smart contracts?",
        a: 'Smart contracts introduce unnecessary complexity and vulnerabilities. Verus instead implements core functionalities at the protocol level, making them inherently more secure and efficient.',
      },
    ],
  },
  {
    title: 'Technical architecture',
    questions: [
      {
        q: 'What are Smart Transactions?',
        a: "Smart Transactions are Verus's alternative to smart contracts. They're protocol-level functionalities that achieve the same capabilities but with consensus-level security, eliminating smart contract vulnerabilities.",
      },
      {
        q: 'What is PBaaS?',
        a: "Public Blockchain as a Service (PBaaS) is Verus's scaling solution that allows anyone to launch their own blockchain. Each PBaaS chain inherits all Verus features and security, while maintaining true decentralization.",
      },
      {
        q: 'How does Verus achieve consensus?',
        a: 'Through Verus Proof of Power—a hybrid consensus mechanism combining 50% proof-of-work and 50% proof-of-stake, making it provably resistant to 51% attacks.',
      },
      {
        q: 'What is the Fee Pool system?',
        a: 'The Fee Pool collects all protocol fees and distributes them gradually (1% per block) to prevent block sniping and maintain network stability.',
      },
    ],
  },
  {
    title: 'Scalability and performance',
    questions: [
      {
        q: 'How does Verus scale?',
        a: 'Instead of trying to increase transactions per second on a single chain, Verus scales through parallel PBaaS chains—similar to how the internet scales through multiple servers rather than one super-server.',
      },
      {
        q: 'What is the transaction capacity?',
        a: 'Each PBaaS chain can handle 75-800 TPS depending on configuration, with no limit to the number of chains that can be deployed.',
      },
      {
        q: 'How does cross-chain communication work?',
        a: 'Through the Verus Internet Protocol (VIP), enabling native cross-chain communication secured by consensus, not vulnerable bridges or smart contracts.',
      },
      {
        q: 'Does launching multiple chains compromise security?',
        a: 'No. Each PBaaS chain inherits the same security model as the main chain, and merge-mining allows miners to secure multiple (22) chains simultaneously without extra power costs.',
      },
    ],
  },
  {
    title: 'Mining and staking',
    questions: [
      {
        q: 'Can I mine Verus?',
        a: 'Yes, anyone can mine using regular computers (CPU), mobile phones, or ARM devices. You can merge-mine up to 22 chains simultaneously without extra power costs.',
      },
      {
        q: 'What are the staking requirements?',
        a: 'There is no minimum amount required to stake. Anyone can run a node and start staking with any amount of VRSC.',
      },
      {
        q: 'What hardware do I need to run a node?',
        a: 'Basic requirements are:\n- 64-bit OS & processor\n- 8GB memory\n- 50GB storage',
      },
      {
        q: 'Is mining environmentally friendly?',
        a: 'Yes, Verus mining is designed for efficiency on low-power devices like phones and ARM processors, significantly reducing environmental impact compared to traditional mining.',
      },
      {
        q: 'What is merge-mining?',
        a: 'Merge-mining allows miners to secure up to 22 chains simultaneously using the same computational power, dramatically increasing efficiency and rewards.',
      },
    ],
  },
  {
    title: 'Privacy and security',
    questions: [
      {
        q: 'How does Verus ensure privacy?',
        a: 'Verus uses zk-SNARKs technology embedded at the protocol level, allowing users to choose between transparent and private transactions.',
      },
      {
        q: 'Is Verus secure against attacks?',
        a: 'Yes, through multiple mechanisms:\n- Hybrid PoW/PoS consensus\n- Protocol-level features instead of smart contracts\n- Fee Pool system preventing block sniping\n- Native multi-chain security',
      },
      {
        q: 'Can I choose between private and public transactions?',
        a: 'Yes, users can freely switch between transparent and private transactions on both the main chain and all PBaaS chains.',
      },
      {
        q: 'How does privacy work with identity?',
        a: 'VerusID allows selective disclosure of identity information while maintaining privacy for other aspects, giving users full control over their digital identity.',
      },
    ],
  },
  {
    title: 'Development and usage',
    questions: [
      {
        q: 'Can I build applications without knowing smart contracts?',
        a: 'Yes, developers can use simple API commands to build applications. No need to learn complex smart contract languages.',
      },
      {
        q: 'What can be built on Verus?',
        a: 'Anything from DeFi applications to identity systems, using protocol-level features that are more secure and scalable than smart contract-based solutions.',
      },
      {
        q: 'How do I launch a PBaaS chain?',
        a: 'Anyone can launch a PBaaS chain completely permissionless. The cost is 10,000 VRSC, split between Verus and new chain block producers. Go to the documentation or ask for guidance from the worldwide community at Discord',
      },
      {
        q: 'What development skills are needed?',
        a: 'Basic API knowledge is sufficient. No need to learn specialized languages like Solidity.',
      },
    ],
  },
  {
    title: 'Economic model',
    questions: [
      {
        q: 'What are the protocol fees used for?',
        a: 'All protocol fees go to miners and stakers through the Fee Pool, which releases 1% per block to maintain network stability.',
      },
      {
        q: 'What are the different protocol fees?',
        a: '- PBaaS chain launches: 10,000 VRSC\n- Currency launches: 200 VRSC\n- VerusID registrations: 20-100 VRSC\n- SubID registrations: 0.02 VRSC\n- DeFi conversion fees: 0.0125%-0.025%\n- Transaction fees: 0.0001 VRSC\n Those are the fees on the Verus blockchain. Fees can vary dramatically on other PBaaS chains.',
      },
      {
        q: 'How are new chains funded?',
        a: 'Launching a new PBaaS chain costs 10,000 VRSC, split between Verus and new chain block producers, ensuring sustainable infrastructure.',
      },
      {
        q: 'Is there any inflation or pre-mine?',
        a: 'No. Verus had a fair launch with no pre-mine, no ICO, and no developer fees. All coins are earned through mining and staking.',
      },
    ],
  },
  {
    title: 'Community and governance',
    questions: [
      {
        q: 'Who controls Verus development?',
        a: 'Verus is a community-driven project with no controlling entity. Development direction is determined by community participation.',
      },
      {
        q: 'How can I contribute to Verus?',
        a: 'You can contribute by:\n- Mining or staking to secure the network\n- Developing applications\n- Participating in community discussions\n- Running a node\n- Building on PBaaS chains',
      },
      {
        q: 'Where can I learn more about Verus?',
        a: 'Join the Discord community, read the Vision Paper, and explore the documentation to learn more about building with Verus.',
      },
      {
        q: 'How is Verus different from a company or business?',
        a: 'Verus is pure public infrastructure with no profit motive or controlling entity. It operates like a protocol (like TCP/IP) than a business.',
      },
    ],
  },
]
