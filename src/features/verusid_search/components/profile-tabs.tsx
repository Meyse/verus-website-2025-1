import type {ReactNode} from 'react'
import type {ProfileJSONType} from '@/features/verusid_search/lib/create_verus_profile'
import type {VerusID} from '@/features/verusid_search/server/fetch_verus_id'

import {ProfileContent} from './profile-content'

export default function ProfileTabs({
  profile,
  profileData,
}: {
  profile: VerusID
  profileData:
    | {
        public?: ProfileJSONType
        services?: ProfileJSONType
        keys?: ProfileJSONType
        collections?: ProfileJSONType
      }
    | undefined
}) {
  const identity = profile.identity
  console.log(profileData)

  return (
    <div>
      {/* Content Section - only show if collections exist */}
      {profileData?.collections && (
        <div className="border-t border-blue-100/80 p-6 dark:border-blue-900/30">
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Content
          </h3>
          <div className="space-y-6">
            <ContentCard>
              <ProfileContent
                content={profileData.collections.content.content}
              />
            </ContentCard>
          </div>
        </div>
      )}

      {/* Profile Information */}
      <div className="border-t border-blue-100/80 p-6 dark:border-blue-900/30">
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          Identity Information
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InfoItem label="Name" value={identity.name} />
          <InfoItem label="Identity Address" value={identity.identityaddress} />
          <InfoItem
            label="Primary Address"
            value={identity.primaryaddresses[0]}
          />
        </div>
      </div>
    </div>
  )
}

function InfoItem({label, value}: {label: string; value?: string}) {
  if (!value) return null

  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
      <span className="break-all text-gray-900 dark:text-gray-100">
        {value}
      </span>
    </div>
  )
}

function ContentCard({title, children}: {title?: string; children: ReactNode}) {
  return (
    <div className="flex w-full flex-col rounded-lg border border-gray-100/80 bg-gray-50/80 p-4 shadow-sm dark:border-gray-700/50 dark:bg-gray-800/60">
      {title && (
        <h4 className="font-medium text-gray-900 dark:text-white">{title}</h4>
      )}
      {children}
    </div>
  )
}
