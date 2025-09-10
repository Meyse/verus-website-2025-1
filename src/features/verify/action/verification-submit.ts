'use server'

import {verificationSchema} from '@/features/verify/schemas/verification-schema'
import {verifyHash} from '@/features/verify/server/verify-hash'
import {verifyMessage} from '@/features/verify/server/verify-message'
import {flattenValidationErrors, returnValidationErrors} from 'next-safe-action'

import {actionClient} from '@/lib/safe-actions'

export const verificationFormAction = actionClient
  .metadata({actionName: 'verification'})
  .schema(verificationSchema, {
    // Here we use the `flattenValidationErrors` function to customize the returned validation errors
    // object to the client.
    // eslint-disable-next-line @typescript-eslint/require-await
    handleValidationErrorsShape: async (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(
    async ({
      parsedInput: {verify_type, hash, message, fileHash, verusid, signature},
    }) => {
      try {
        let result
        switch (verify_type) {
          case 'message':
            if (!message) throw new Error('Missing Message')
            result = await verifyMessage(verusid, signature, message)
            break
          case 'hash':
            if (!hash) throw new Error('Missing Hash')
            result = await verifyHash(verusid, signature, hash)
            break
          case 'file':
            if (!fileHash) throw new Error('Missing File')
            result = await verifyHash(verusid, signature, fileHash)
            break
        }
        if (!result) throw new Error('Not Valid')
        return result
      } catch {
        returnValidationErrors(verificationSchema, {
          _errors: [
            `Ensure that the VerusID, signature, and ${verify_type} are correct
            and try again.`,
          ],
        })
      }

      // // throw new ActionError('Invalid Creditials')
    }
  )
