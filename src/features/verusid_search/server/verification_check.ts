import 'server-only'

import type {VerificationRequest, VerificationResult} from '../lib/types'

import ProofsJSON from '@/data/vdxfid/proofsJSON'
import {verifyMessage} from '@/features/verify/server/verify-message'

import {isValidUrl, verusBlockchainProof, verusWebProof} from '../lib/utils'
import {fetchProofPage} from './fetch_proof_page'

/**
 * Verifies a message against the Verus API
 */
async function verifyVerusMessage(
  identity: string,
  signature: string,
  message: string
): Promise<VerificationResult> {
  try {
    const result = await verifyMessage(identity, signature, message)
    console.log('result', result)

    return {valid: result ? 'true' : 'false'}
  } catch (error) {
    console.error('Error verifying Verus message:', error)
    return {valid: 'error', message: 'Verification failed'}
  }
}

// Define clear types for the verification results
type ValidStatus = 'true' | 'false' | 'error'

interface BlockchainVerificationResult {
  valid: ValidStatus
  key1?: VerificationResult
  key2?: VerificationResult
  overall?: VerificationResult
  address?: string
  proofLink?: string
  message?: string
}

export async function verificationCheck(
  data: VerificationRequest
): Promise<BlockchainVerificationResult> {
  const user = data.user.toLowerCase()
  // Initialize result
  let result: BlockchainVerificationResult = {valid: 'error'}

  // Get the controller key from ProofsJSON
  const controllerVdxfid =
    ProofsJSON.controller.vdxfid || 'i9TbCypmPKRpKPZDjk3YcCEZXK6wmPTXjw'

  const verifyKey = data[controllerVdxfid]

  // Handle URL verification (for social media)
  if (isValidUrl(verifyKey)) {
    let verifiedData
    console.log(`Verification Check: Processing URL proof: ${verifyKey}`)
    try {
      console.log(`Verification Check: Fetching content from ${verifyKey}...`)
      verifiedData = await fetchProofPage(verifyKey)
      // console.info('verification with VerifyKey verifiedData', verifiedData)
      console.log(
        `Verification Check: Content fetched from ${verifyKey}. Length: ${verifiedData.length}`
      )
      // Extract proof from content
      console.log('Verification Check: Parsing web proof...')

      const parsedProof = verusWebProof(verifiedData)
      if (parsedProof && parsedProof.Signature && parsedProof.Message) {
        console.log('Verification Check: Web proof parsed. Verifying...')
        // Verify the proof with Verus API
        const verificationResult = await verifyVerusMessage(
          user,
          parsedProof.Signature,
          parsedProof.Message.replace(/&quot;/g, '"')
        )
        console.log(
          `Verification Check: Web proof verification result: ${JSON.stringify(verificationResult)}`
        )

        // Add the proof link to the result
        result = {
          ...verificationResult,
          proofLink: verifyKey,
        }
      } else {
        console.error('Verification Check: Could not parse proof from content.')
        result = {
          valid: 'error',
          message: 'Could not parse proof from content',
        }
      }
    } catch (error) {
      console.error('Error verifying URL content:', error)
      result = {valid: 'error', message: 'Failed to verify URL content'}
    }
  } else if (data.type === 'blockchain') {
    console.log('Verifying blockchain address:', data)
    try {
      // Check for required fields
      if (!data.address || !data.qualifiedname) {
        console.warn(
          'Missing address or qualifiedname for blockchain verification'
        )
        return {
          valid: 'error',
          message:
            'Missing required blockchain data (address or qualifiedname)',
        }
      }
      // Extract proofs
      const proofChecks = verusBlockchainProof(verifyKey)
      if (!proofChecks) {
        console.warn('Invalid proof format:', verifyKey)
        return {
          valid: 'error',
          message: 'Invalid proof format',
        }
      }
      console.log('Extracted proofs:', proofChecks)

      // First key: verify against Verus ID
      console.log('Verifying key1 with user:', user)
      const key1Result = await verifyVerusMessage(
        user,
        proofChecks.key1.Signature,
        proofChecks.key1.Message
      )
      console.log('Key1 verification result:', key1Result)

      // Get blockchain type from qualified name
      const chain = data.qualifiedname.split('.')[2] || ''
      console.log('Blockchain type:', chain)

      let key2Result: VerificationResult['key2'] = {valid: 'error'}
      // Verify second key based on blockchain type
      switch (chain) {
        case 'vrsc':
          // For Verus, use Verus API
          console.log('Verifying VRSC key2 with address:', data.address)
          key2Result = await verifyVerusMessage(
            data.address,
            proofChecks.key2.Signature,
            proofChecks.key2.Message
          )
          console.log('Key2 VRSC verification result:', key2Result)
          break

        case 'eth':
          //TODO:
          // Ethereum verification commented out
          /*
            if (Web3) {
              try {
                const web3 = new Web3(Web3.givenProvider || 'https://mainnet.infura.io/v3/YOUR_INFURA_KEY');
                const recovered = web3.eth.accounts.recover(
                  proofChecks.key2.Message,
                  proofChecks.key2.Signature
                );
                
                key2Result = { 
                  valid: recovered?.toLowerCase() === data.address?.toLowerCase() ? 'true' : 'false' 
                };
              } catch (error) {
                console.error('Error verifying Ethereum message:', error);
                key2Result = { valid: 'error', message: 'Failed to verify Ethereum message' };
              }
            } else {
              key2Result = { valid: 'error', message: 'Web3 not available' };
            }
            */
          // Temporarily returning success for Ethereum verification
          key2Result = {valid: 'true'}
          break
        case 'btc':
          //TODO:
          // Bitcoin verification commented out
          /*
            if (bitcoinMessage) {
              try {
                const isValid = bitcoinMessage.verify(
                  proofChecks.key2.Message,
                  data.address,
                  proofChecks.key2.Signature,
                  undefined,
                  true
                );
                
                key2Result = { valid: isValid ? 'true' : 'false' };
              } catch (error) {
                console.error('Error verifying Bitcoin message:', error);
                key2Result = { valid: 'error', message: 'Failed to verify Bitcoin message' };
              }
            } else {
              key2Result = { valid: 'error', message: 'bitcoinjs-message not available' };
            }
            */
          // Temporarily returning success for Bitcoin verification
          key2Result = {valid: 'true'}
          break
        default:
          key2Result = {valid: 'error', message: 'Unsupported blockchain'}
      }

      // Combine results
      const overallValid =
        key1Result.valid === 'true' && key2Result.valid === 'true'
          ? 'true'
          : 'false'

      result = {
        key1: key1Result,
        key2: key2Result,
        overall: {valid: overallValid},
        address: data.address,
        valid: overallValid,
      }
    } catch (error) {
      console.error('Error in blockchain verification:', error)
      result = {valid: 'error', message: 'Failed to verify blockchain proof'}
    }
  }
  return result
}
