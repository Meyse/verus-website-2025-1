import {createHash} from 'crypto'

// Calculate file hash using Web Crypto API
export const calculateFileHash = async (file: File): Promise<string> => {
  try {
    const buffer = Buffer.from(await file.arrayBuffer())

    return createHash('sha256').update(buffer).digest('hex')
  } catch (error) {
    console.error('Error calculating file hash:', error)
    throw error
  }
}
