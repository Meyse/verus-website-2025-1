import type {ReactNode} from 'react'

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

interface SocialLinkProps {
  href: string
  icon: ReactNode
  label: string
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
        const linkProps = {
          href,
          icon: getIcon(key),
          label: service.name || service.accountname || key,
        }
        const serviceCardData = {user: userId, ...service}

        // Reddit proofs load through an unofficial route. Show the link only
        // after its check, and hide it when Reddit blocks the check.
        if (key === 'reddit') {
          return (
            <Suspense key={`${i}-${key}-profile`} fallback={null}>
              <RedditSocialLink
                {...linkProps}
                serviceCardData={serviceCardData}
              />
            </Suspense>
          )
        }

        return (
          <SocialLink key={`${i}-${key}-profile`} {...linkProps}>
            <Suspense
              fallback={
                <VerificationBadge
                  status="loading"
                  showText={false}
                  className="ml-1"
                />
              }
            >
              <ValidateSocialLink serviceCardData={serviceCardData} />
            </Suspense>
          </SocialLink>
        )
      })}
    </div>
  )
}

function SocialLink({
  href,
  icon,
  label,
  children,
}: SocialLinkProps & {children: ReactNode}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-900 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
    >
      {icon}
      <span>{label}</span>
      {children}
    </a>
  )
}

async function getSocialLinkStatus(serviceCardData: ServiceCardData) {
  const hasProofData = Object.values(serviceCardData).some(
    (val) =>
      typeof val === 'string' && (val.startsWith('http') || val.includes('@'))
  )
  if (!hasProofData) return getVerificationStatus()

  return getVerificationStatus(await verifyServiceProof(serviceCardData))
}

async function ValidateSocialLink({
  serviceCardData,
}: {
  serviceCardData: ServiceCardData
}) {
  const status = await getSocialLinkStatus(serviceCardData)
  return <VerificationBadge status={status} showText={false} className="ml-1" />
}

async function RedditSocialLink({
  serviceCardData,
  ...linkProps
}: SocialLinkProps & {serviceCardData: ServiceCardData}) {
  const status = await getSocialLinkStatus(serviceCardData)
  // Unknown means the proof could not be checked. A failed proof still shows.
  if (status === 'unknown') return null

  return (
    <SocialLink {...linkProps}>
      <VerificationBadge status={status} showText={false} className="ml-1" />
    </SocialLink>
  )
}
