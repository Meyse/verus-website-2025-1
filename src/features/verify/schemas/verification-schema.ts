import {z} from 'zod'

const verify_type = z.enum(['message', 'hash', 'file'])
export type VerifyType = z.infer<typeof verify_type>
export type VerifySchema = Partial<z.infer<typeof verificationSchema>>
export const verificationSchema = z
  .object({
    verify_type,
    verusid: z.string().min(1, 'Please enter a VerusID or i-address'),
    signature: z.string().min(1, 'Please enter a signature'),
    message: z.string().optional(),
    hash: z.string().optional(),
    fileName: z.string().optional(),
    fileHash: z.string().optional(),
    auto: z.boolean(),
  })
  .refine(
    (args) => {
      if (args.verify_type === 'message') return !!args.message
      return true
    },
    {path: ['message'], message: 'Please enter a message'}
  )
  .refine(
    (args) => {
      if (args.verify_type === 'hash') return !!args.hash
      return true
    },
    {path: ['hash'], message: 'Please enter a hash'}
  )
  .refine(
    (args) => {
      if (args.verify_type === 'file') return !!args.fileName
      return true
    },
    {path: ['fileName'], message: 'Please upload a file to check'}
  )
  .refine(
    (args) => {
      if (args.fileName) return !!args.fileHash
      return true
    },
    {
      path: ['fileName'],
      message: 'File hash calculation failed. Please try again.',
    }
  )
