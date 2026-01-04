'use server'

import {actionClient} from '@/lib/safe-actions'

import {verusIDsearchSchema} from '../schema/search-verusID-schema'
import {validateVerusId} from '../server/validate-verusId'

export const searchVerusIdAction = actionClient
  .metadata({actionName: 'verusID search'})
  .inputSchema(verusIDsearchSchema)
  .action(async ({parsedInput: {verusid}}) => {
    // console.log(verusid)
    let verusID = verusid
    if (verusID.slice(-1) !== '@') verusID = verusID + '@'
    await validateVerusId(verusID) //going to cache result for 5 minutes
    // console.log(IdInfo)
    // if (IdInfo.error) {
    //   returnValidationErrors(verusIDsearchSchema, {
    //     _errors: [IdInfo.error.message],
    //   })
    // }
    // returnValidationErrors(verusIDsearchSchema, {
    //   _errors: ['Identity not found'],
    // })
    return verusID
  })
