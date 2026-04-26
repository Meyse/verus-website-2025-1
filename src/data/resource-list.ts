import type {ResourceCardProps} from '@/features/build/start/resource_card'

import {env} from '@/configs/env'

export const developerResources: ResourceCardProps[] = [
  {
    title: 'Registering VerusID',
    description: 'Learn how to create decentralized identities on Verus.',
    link: `${env.NEXT_PUBLIC_MONKINS_GITHUB}/verusid/`,
  },
  {
    title: 'Using VDXF keys',
    description:
      'Understand how to work with VDXF keys in the Verus ecosystem.',
    link: `${env.NEXT_PUBLIC_MONKINS_GITHUB}/verusvdxf/getting-started-copy/`,
  },
  {
    title: 'Storing data in VerusID',
    description: 'Explore how to store and manage data on a VerusID.',
    link: `${env.NEXT_PUBLIC_MONKINS_GITHUB}/verusstorage/getting-started/`,
  },
  {
    title: 'VerusID login client',
    description: 'Implement decentralized authentication using VerusID.',
    link: `${env.NEXT_PUBLIC_MONKINS_GITHUB}/veruslogin/`,
  },
  {
    title: 'Storing files on chain',
    description:
      'Learn how to store and manage files directly on Verus or PBaaS chains.',
    link: `${env.NEXT_PUBLIC_MONKINS_GITHUB}/verusstorage/storing-files/`,
  },
  {
    title: 'VerusID login template',
    description:
      'Get started quickly with this VerusID login integration template.',
    link: `${env.NEXT_PUBLIC_MONKINS_GITHUB}/veruslogin/login-template/`,
  },
  {
    title: 'Create attestations',
    description: 'Build and manage attestations using VerusID.',
    link: `${env.NEXT_PUBLIC_MONKINS_GITHUB}/attestations/getting-started/`,
  },
  {
    title: 'Launch currencies',
    description: 'Create currencies on the Verus network.',
    link: `${env.NEXT_PUBLIC_VERUS_DOCS}/currencies/`,
  },
  {
    title: 'Verus DeFi',
    description: 'Build decentralized financial applications on Verus.',
    link: `${env.NEXT_PUBLIC_VERUS_DOCS}/sendcurrency/`,
  },
  {
    title: 'DeFi API commands',
    description: 'Explore the DeFi API commands for building transactions.',
    link: `${env.NEXT_PUBLIC_VERUS_DOCS}/sendcurrency/sendcurrency-examples.html`,
  },
]
