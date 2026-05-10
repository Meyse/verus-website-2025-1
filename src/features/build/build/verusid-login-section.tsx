import Image from 'next/image'

import {env} from '@/configs/env'
import {ArrowRight, ExternalLink} from 'lucide-react'

import {Button} from '@/components/ui/button'

export function VerusIDLoginSection() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="px-8 py-12 md:px-12 md:py-14">
          <Image
            src="/img/verusid-logo.svg"
            alt="VerusID"
            height={24}
            width={118}
            className="mb-8 h-6 w-auto"
          />
          <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
            Introduce password-free login to your users
          </h2>
          <p className="max-w-[760px] text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            Let your users log in with their VerusID. No more passwords, no
            more data breaches, no more forgotten credentials. Just scan a QR
            code and you're in.
          </p>
          <div className="mt-8 flex flex-col gap-4 md:flex-row">
            <Button asChild variant="verusPrimary" size="verusWide">
              <a
                href={`${env.NEXT_PUBLIC_MONKINS_GITHUB}/veruslogin/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Integrate VerusID
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="verusSecondaryDark" size="verusWide">
              <a href="/build/verusid">
                What is VerusID?
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center border-t border-gray-200 px-8 py-10 dark:border-gray-800 md:border-l md:border-t-0 md:px-12 md:py-14">
          <Image
            src="/img/login-verusid.png"
            alt="VerusID login"
            width={450}
            height={450}
            className="h-auto w-full max-w-[320px] dark:opacity-90 md:max-w-[450px]"
          />
        </div>
      </div>
    </section>
  )
}
