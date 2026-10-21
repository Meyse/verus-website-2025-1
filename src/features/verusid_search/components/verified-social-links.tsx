import {Suspense} from 'react'

import {getVerificationStatus} from '@/features/verusid_search/lib/verification_status'
import {verifyServiceProof} from '@/features/verusid_search/server/verify_service_proof'

import {getIcon} from './icons'
import {VerificationBadge} from './verification-badge'

interface ServiceData {
  name?: string
  accountname?: string
  accountid?: string
  qualifiedname?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

interface VerifiedSocialLinksProps {
  services: Record<string, ServiceData>
  userId: string
}

interface ServiceCardData extends ServiceData {
  user: string
}

export function VerifiedSocialLinks({
  services,
  userId,
}: VerifiedSocialLinksProps) {
  // console.log('services', Object.entries(services))

  return (
    <div className="flex flex-wrap gap-3">
      {Object.entries(services).map(([key, service], i) => {
        const href = Object.values(service).find(
          (s) => typeof s === 'string' && s.startsWith('http')
        )

        if (!href) return null
        const icon = getIcon(key)
        return (
          <a
            key={`${i}-${key}-profile`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-900 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            {icon}
            <span>{service.name || service.accountname || key}</span>
            <Suspense
              fallback={
                <VerificationBadge
                  status="loading"
                  showText={false}
                  className="ml-1"
                />
              }
            >
              <ValidateSocialLink
                serviceCardData={{user: userId, ...service}}
              />
            </Suspense>
          </a>
        )
      })}
    </div>
  )
}

async function ValidateSocialLink({
  serviceCardData,
}: {
  serviceCardData: ServiceCardData
}) {
  let valid = getVerificationStatus()
  const hasProofData = Object.values(serviceCardData).some(
    (val) =>
      typeof val === 'string' && (val.startsWith('http') || val.includes('@'))
  )
  if (hasProofData) {
    const result = await verifyServiceProof(serviceCardData)

    valid = getVerificationStatus(result)
  }
  return <VerificationBadge status={valid} showText={false} className="ml-1" />
}
