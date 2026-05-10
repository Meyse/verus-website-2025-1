import Link from 'next/link'

import {env} from '@/configs/env'
import {MessageCircle} from 'lucide-react'
import {IoLogoDiscord} from 'react-icons/io5'

import {Button} from '@/components/ui/button'

export function TestnetSection() {
  return (
    <div className="flex h-full min-h-[300px] min-w-0 flex-col p-8 md:p-10">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-gray-200 bg-white text-verus-blue dark:border-gray-800 dark:bg-gray-900 dark:text-blue-400">
        <MessageCircle className="h-6 w-6" />
      </div>

      <h3 className="mb-4 text-[24px] font-medium tracking-tight text-gray-800 dark:text-white md:text-[30px]">
        Get testnet coins
      </h3>
      <p className="max-w-[500px] flex-1 break-words text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
        To start developing on Verus testnet, you will need VRSCTEST coins. Join
        Discord and ask in the #pbaas-development channel.
      </p>

      <Button
        asChild
        variant="verusPrimary"
        size="verusWide"
        className="mt-8 w-fit"
      >
        <Link
          href={env.NEXT_PUBLIC_DISCORD}
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Discord
          <IoLogoDiscord className="h-5 w-5 md:h-6 md:w-6" />
        </Link>
      </Button>
    </div>
  )
}
