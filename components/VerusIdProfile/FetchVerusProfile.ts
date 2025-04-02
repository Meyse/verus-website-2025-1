import Arweave from 'arweave'
import CreateProfile from './CreateProfile'
import FetchArweaveProfile from './FetchArweaveProfile'
import { reverseHex } from './Validators'
import { PublicProfileProps } from './ProfileTypes'
import CollectionsJSON from '@/data/collectionsJSON'
import IdentityJSON from '@/data/identityJSON'

const arConfig = {
  host: 'arweave.net', // Hostname or IP address for a Arweave host
  port: 443, // Port
  protocol: 'https', // Network protocol http or https
}
const arweave = Arweave.init(arConfig)

const FetchVerusProfile = async (content: Record<string, any>) => {
  console.log("FetchVerusProfile: Starting with content:", content)
  
  // Validate inputs
  if (!content) {
    console.error("FetchVerusProfile: No content provided")
    return null
  }
  
  if (!CollectionsJSON?.arweave?.hash160result) {
    console.error("FetchVerusProfile: Collections JSON arweave hash160result not found")
    console.log("CollectionsJSON:", CollectionsJSON)
    return null
  }
  
  if (!IdentityJSON?.public?.vdxfid) {
    console.error("FetchVerusProfile: Identity JSON public vdxfid not found")
    console.log("IdentityJSON:", IdentityJSON)
    return null
  }

  // Check specifically for arweave collection in contentmap
  const arweaveVdxfid = CollectionsJSON.arweave.hash160result
  console.log("FetchVerusProfile: Looking for arweave vdxfid:", arweaveVdxfid)
  console.log("FetchVerusProfile: Reversed arweave vdxfid:", reverseHex(arweaveVdxfid))
  
  // Try both direct and reversed hex values from the contentmap
  const contentmapValue = content.contentmap?.[arweaveVdxfid] || 
                         content.contentmap?.[reverseHex(arweaveVdxfid)] ||
                         content[arweaveVdxfid] || 
                         content[reverseHex(arweaveVdxfid)]

  if (!contentmapValue) {
    console.log("FetchVerusProfile: No Arweave content map entry found in:", content)
    return null
  }

  console.log("FetchVerusProfile: Found contentmap value:", contentmapValue)
  console.log("FetchVerusProfile: Using public vdxfid:", IdentityJSON.public.vdxfid)

  // Get Arweave transaction ID using the contentmap value
  const arweaveTxId = await FetchArweaveProfile(
    contentmapValue,
    IdentityJSON.public.vdxfid
  )

  if (arweaveTxId) {
    console.log("FetchVerusProfile: Arweave transaction ID found:", arweaveTxId)
    
    try {
      // Fetch the transaction data from Arweave
      console.log("FetchVerusProfile: Fetching Arweave transaction data...")
      const arweaveData = await arweave.transactions.getData(arweaveTxId, {
        decode: true,
        string: true,
      })
      
      console.log("FetchVerusProfile: Raw Arweave data length:", arweaveData?.toString()?.length || 0)
      
      // Parse JSON data
      let arweaveJSON
      try {
        arweaveJSON = JSON.parse(arweaveData.toString())
        console.log("FetchVerusProfile: Successfully parsed Arweave JSON data")
        console.log("FetchVerusProfile: Available keys in Arweave data:", Object.keys(arweaveJSON))
      } catch (parseError) {
        console.error("FetchVerusProfile: Error parsing Arweave data:", parseError)
        console.log("FetchVerusProfile: Raw data:", arweaveData.toString().substring(0, 200) + "...")
        return null
      }

      if (arweaveJSON) {
        // If it's a manifest, look for a path to the actual data
        if (arweaveJSON.manifest === "arweave/paths") {
          console.log("FetchVerusProfile: Detected manifest format, looking for data path")
          
          // Get the data TX ID from the manifest
          const dataPath = arweaveJSON.paths?.["undefined"]?.id || 
                         (Object.values(arweaveJSON.paths || {}).length > 0 
                          ? (Object.values(arweaveJSON.paths || {})[0] as any)?.id 
                          : undefined)
          
          if (dataPath) {
            console.log("FetchVerusProfile: Found data path in manifest:", dataPath)
            
            // Fetch the actual data transaction
            console.log("FetchVerusProfile: Fetching data from path transaction...")
            const pathData = await arweave.transactions.getData(dataPath, {
              decode: true,
              string: true,
            })
            
            try {
              arweaveJSON = JSON.parse(pathData.toString())
              console.log("FetchVerusProfile: Successfully parsed path data")
              console.log("FetchVerusProfile: Available keys in path data:", Object.keys(arweaveJSON))
            } catch (pathError) {
              console.error("FetchVerusProfile: Error parsing path data:", pathError)
              return null
            }
          } else {
            console.error("FetchVerusProfile: No data path found in manifest")
            return null
          }
        }

        // Check if the public profile data exists
        let publicData = arweaveJSON[IdentityJSON.public.vdxfid]
        
        // If not found directly, try a nested structure
        if (!publicData && arweaveJSON.iEXZ3nd4K9fmGDSiQ8J6XLATzUUSKp1eAz) {
          console.log("FetchVerusProfile: Public data found in nested structure")
          publicData = arweaveJSON.iEXZ3nd4K9fmGDSiQ8J6XLATzUUSKp1eAz
        }
        
        if (!publicData) {
          console.error(`FetchVerusProfile: Public profile data not found at key: ${IdentityJSON.public.vdxfid}`)
          console.log("FetchVerusProfile: Available keys:", Object.keys(arweaveJSON))
          return null
        }
        
        console.log("FetchVerusProfile: Public profile data found, creating profile")
        
        // Create structured profile data
        const profileJSON: PublicProfileProps = await CreateProfile(publicData)
        console.log("FetchVerusProfile: Profile creation complete")
        
        return profileJSON
      } else {
        console.error("FetchVerusProfile: No Arweave JSON data available")
      }
    } catch (error) {
      console.error("FetchVerusProfile: Error fetching or processing Arweave data:", error)
    }

    return null
  } else {
    console.log("FetchVerusProfile: No Arweave transaction ID found")
    return null
  }
}

export default FetchVerusProfile
