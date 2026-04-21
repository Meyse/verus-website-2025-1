'use client'

import type {Dispatch, ReactNode, SetStateAction} from 'react'
import type {VerificationStatus} from '@/features/verusid_search/components/verification-badge'
import type {KeyData} from '@/features/verusid_search/components/verified-crypto-addresses'
import type {VerificationResult} from '@/features/verusid_search/lib/types'

import {createContext, useContext, useEffect, useState} from 'react'

import {verifyBlockchainSignature} from '@/features/verusid_search/server/verify_blockchain_signature'

interface CryptoAddressProps {
  results: Record<string, VerificationResult> | undefined
  keys: Record<string, KeyData> | undefined
  setKeys: Dispatch<SetStateAction<Record<string, KeyData> | undefined>>
  valid: (keyName: string) => VerificationStatus
  setUserId: Dispatch<SetStateAction<string | undefined>>
}

const CryptoAddresses = createContext<CryptoAddressProps>(
  {} as CryptoAddressProps
)

export function useVerifyCryptoAddress() {
  return useContext(CryptoAddresses)
}

export function CryptoAddressProvider({children}: {children: ReactNode}) {
  const [keys, setKeys] = useState<Record<string, KeyData> | undefined>(
    undefined
  )
  const [verificationResults, setVerificationResults] = useState<
    Record<string, VerificationResult> | undefined
  >(undefined)
  const [loadingStates, setLoadingStates] = useState<
    Record<string, boolean> | undefined
  >(undefined)
  const [userId, setUserId] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (!keys || !userId) return

    const entries = Object.entries(keys)
    const currentUserId = userId

    async function verifyAddresses() {
      setLoadingStates(
        Object.fromEntries(entries.map(([keyName]) => [keyName, true]))
      )

      await Promise.all(
        entries.map(async ([keyName, keyData]) => {
          async function verify(keyName: string, keyData: KeyData) {
            //Skip
            if (!keyData.address) {
              setVerificationResults((prev) => ({
                ...prev,
                [keyName]: {valid: 'error'},
              }))
              setLoadingStates((prev) => ({...prev, [keyName]: false}))
              return
            }
            // Prepare verification data for blockchain
            const verificationData = {
              user: currentUserId,
              type: 'blockchain', // This is critical - explicitly set type to blockchain
              address: keyData.address,
              qualifiedname: keyData.qualifiedname, // Ensure this is passed through
              ...keyData,
            }
            console.log(`Verifying ${keyName} address:`, verificationData)
            // Verify the key
            // const time = getRandomIntInclusive(2, 10) * 1000
            // await testAwait(time)
            // const result = {valid: 'true'} as VerificationResult

            const result = await verifyBlockchainSignature(verificationData)
            console.log(`Verification result for ${keyName}:`, result)
            setVerificationResults((prev) => ({...prev, [keyName]: result}))
            setLoadingStates((prev) => ({...prev, [keyName]: false}))
          }

          await verify(keyName, keyData)
        })
      )
    }

    void verifyAddresses()
  }, [keys, userId])

  const valid = (keyName: string): VerificationStatus =>
    loadingStates?.[keyName]
      ? 'loading'
      : verificationResults?.[keyName]?.valid === 'true'
        ? 'pass'
        : verificationResults?.[keyName]?.valid === 'false'
          ? 'fail'
          : verificationResults?.[keyName]?.valid === 'error'
            ? 'unknown'
            : 'loading'
  const value = {valid, keys, setKeys, setUserId, results: verificationResults}

  return (
    <CryptoAddresses.Provider value={value}>
      {children}
    </CryptoAddresses.Provider>
  )
}
