import Image from 'next/image'

import {CryptoAddressProvider} from '@/features/verusid_search/hooks/crypto-addresses'
import {getVerusProfile} from '@/features/verusid_search/server/get_verus_profile_info'
import {validateVerusId} from '@/features/verusid_search/server/validate-verusId'

import ProfileTabs from './profile-tabs'
import {VerifiedCryptoAddresses} from './verified-crypto-addresses'
import {VerifiedSocialLinks} from './verified-social-links'

export async function DisplayProfile({verusId}: {verusId: string}) {
  //get cached value instead of trying to pass the whole result
  const profile = (await validateVerusId(verusId)).result! //getting infor from cached value
  console.log(profile)

  const profileData = await getVerusProfile(profile.identity)
  // Proof checks lowercase the name, so every spelling shares one cache entry
  const userId = verusId.toLowerCase()

  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-blue-100/80 bg-white/90 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.1)] backdrop-blur-sm dark:border-blue-900/30 dark:bg-gray-800/90 dark:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.3)]">
      {/* Header with Banner Image */}
      <div className="relative">
        {/* Profile Banner */}
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600">
          {profileData?.public?.header ? (
            <Image
              src={profileData.public.header.image}
              alt="Profile header"
              fill
              className="fixed size-full object-cover"
            />
          ) : (
            <div className="size-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          )}
        </div>
        {/* Profile Picture (overlaying banner) */}
        <div className="absolute -bottom-16 left-6">
          {profileData?.public?.avatar ? (
            <Image
              src={profileData.public.avatar.image}
              alt={`${profile.identity.name} avatar`}
              height={500}
              width={500}
              className="size-32 rounded-full border-4 border-white bg-white object-cover shadow-md dark:border-gray-800"
            />
          ) : (
            <div className="flex size-32 items-center justify-center rounded-full border-4 border-white bg-gray-300 shadow-md dark:border-gray-800 dark:bg-gray-600">
              <span className="text-3xl font-bold text-gray-600 dark:text-gray-300">
                {profile.identity.name?.slice(0, 2).toUpperCase() || 'ID'}
              </span>
            </div>
          )}
        </div>
      </div>
      {/* Profile Info (with space for the overlapping profile picture) */}
      <div className="px-6 pb-6 pt-20">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {profile.identity.name}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            {profile.fullyqualifiedname || profile.friendlyname || verusId}
          </p>

          {profileData?.public?.about && (
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              {profileData.public.about.text}
            </p>
          )}

          {/* Social Links & Crypto Addresses */}

          <div className="mt-4 space-y-4">
            {/* Display social links if available */}

            {profileData?.services && (
              <VerifiedSocialLinks
                services={profileData.services}
                userId={userId}
              />
            )}

            {/* Display crypto addresses if available */}
            {profileData?.keys && (
              <CryptoAddressProvider>
                <VerifiedCryptoAddresses
                  keys={profileData.keys}
                  userId={userId}
                />
              </CryptoAddressProvider>
            )}
          </div>
        </div>
      </div>
      <ProfileTabs profile={profile} profileData={profileData} />
    </div>
  )
}
