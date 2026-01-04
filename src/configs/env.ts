// import type {StandardSchemaV1} from '@/types/standardSchema'

import {createEnv} from '@t3-oss/env-nextjs'
import {z, ZodError} from 'zod'

/**
 * By default, this library will feed the environment variables directly to
 * the Zod validator.
 *
 * This means that if you have an empty string for a value that is supposed
 * to be a number (e.g. `PORT=` in a ".env" file), Zod will incorrectly flag
 * it as a type mismatch violation. Additionally, if you have an empty string
 * for a value that is supposed to be a string with a default value (e.g.
 * `DOMAIN=` in an ".env" file), the default value will never be applied.
 *
 * In order to solve these issues, we recommend that all new projects
 * explicitly specify this option as true.
 */

export const env = createEnv({
  shared: {
    NODE_ENV: z.enum(['development', 'production']).default('development'),
  },
  /**
   * Specify your server-side environment variables schema here.
   * This way you can ensure the app isn't built with invalid env vars.
   */
  server: {
    VERUS_GITHUB_API: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    VERUS_API: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    VERUS_EXPLORER_API: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    MEDIUM_FEED_URL: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    COINPAPRIKA_URL: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),

    // DATABASE_URL: z.string(),
  },
  /**
   * Specify your client-side environment variables schema here.
   * For them to be exposed to the client, prefix them with `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_BASE_URL: z.string().url({message: 'Invalid url'}),
    NEXT_PUBLIC_DISCORD: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    NEXT_PUBLIC_VERUS_EXPLORER: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    NEXT_PUBLIC_VERUS_BRIDGE: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    NEXT_PUBLIC_VERUS_GITHUB: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    NEXT_PUBLIC_VERUS_DOCS: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    NEXT_PUBLIC_VERUS_WIKI: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    NEXT_PUBLIC_VERUS_MEDIUM: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    NEXT_PUBLIC_TWITTER: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    NEXT_PUBLIC_VERUS_TWITTER: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    NEXT_PUBLIC_TELEGRAM: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    NEXT_PUBLIC_VERUS_TELEGRAM: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    NEXT_PUBLIC_VERUS_REDDIT: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    NEXT_PUBLIC_VERUS_FACEBOOK: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    NEXT_PUBLIC_VERUS_YOUTUBE: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    NEXT_PUBLIC_CRYPTO_DASHBOARD: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    NEXT_PUBLIC_MONKINS_GITHUB: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    NEXT_PUBLIC_GOOGLE_PLAYSTORE: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    NEXT_PUBLIC_APPLE_STORE: z
      .string()
      .url({message: 'Invalid url'})
      .startsWith('https://', {message: 'Must provide secure URL'}),
    NEXT_PUBLIC_HOST_ID: z.string().optional(),
    // NEXT_PUBLIC_PUBLISHABLE_KEY: z.string().min(1),
  },
  /**
   * Destructure all variables from `process.env` to make sure they aren't tree-shaken away.
   */

  runtimeEnv: {
    VERUS_GITHUB_API: process.env.VERUS_GITHUB_API,
    VERUS_API: process.env.VERUS_API,
    VERUS_EXPLORER_API: process.env.VERUS_EXPLORER_API,
    MEDIUM_FEED_URL: process.env.MEDIUM_FEED_URL,
    COINPAPRIKA_URL: process.env.COINPAPRIKA_URL,
    NODE_ENV: process.env.NODE_ENV,

    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_DISCORD: process.env.NEXT_PUBLIC_DISCORD,
    NEXT_PUBLIC_VERUS_EXPLORER: process.env.NEXT_PUBLIC_VERUS_EXPLORER,
    NEXT_PUBLIC_VERUS_BRIDGE: process.env.NEXT_PUBLIC_VERUS_BRIDGE,
    NEXT_PUBLIC_VERUS_GITHUB: process.env.NEXT_PUBLIC_VERUS_GITHUB,
    NEXT_PUBLIC_VERUS_DOCS: process.env.NEXT_PUBLIC_VERUS_DOCS,
    NEXT_PUBLIC_VERUS_WIKI: process.env.NEXT_PUBLIC_VERUS_WIKI,
    NEXT_PUBLIC_VERUS_MEDIUM: process.env.NEXT_PUBLIC_VERUS_MEDIUM,
    NEXT_PUBLIC_TWITTER: process.env.NEXT_PUBLIC_TWITTER,
    NEXT_PUBLIC_VERUS_TWITTER: process.env.NEXT_PUBLIC_VERUS_TWITTER,
    NEXT_PUBLIC_TELEGRAM: process.env.NEXT_PUBLIC_TELEGRAM,
    NEXT_PUBLIC_VERUS_TELEGRAM: process.env.NEXT_PUBLIC_VERUS_TELEGRAM,
    NEXT_PUBLIC_VERUS_REDDIT: process.env.NEXT_PUBLIC_VERUS_REDDIT,
    NEXT_PUBLIC_VERUS_FACEBOOK: process.env.NEXT_PUBLIC_VERUS_FACEBOOK,
    NEXT_PUBLIC_VERUS_YOUTUBE: process.env.NEXT_PUBLIC_VERUS_YOUTUBE,
    NEXT_PUBLIC_CRYPTO_DASHBOARD: process.env.NEXT_PUBLIC_CRYPTO_DASHBOARD,
    NEXT_PUBLIC_MONKINS_GITHUB: process.env.NEXT_PUBLIC_MONKINS_GITHUB,
    NEXT_PUBLIC_GOOGLE_PLAYSTORE: process.env.NEXT_PUBLIC_GOOGLE_PLAYSTORE,
    NEXT_PUBLIC_APPLE_STORE: process.env.NEXT_PUBLIC_APPLE_STORE,
    NEXT_PUBLIC_HOST_ID: process.env.NEXT_PUBLIC_HOST_ID,
    // NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  },
  // Tell the library when we're in a server context.
  isServer: typeof window === 'undefined',
  emptyStringAsUndefined: true,
  // Create a clean invalidator error for env variables
  onValidationError: (issues: readonly StandardSchemaV1.Issue[]) => {
  /*  const errors = new ZodError(issues as any[])
    // console.info('❌ Invalid environment variables:', issues)
    console.error(
      '❌ Invalid environment variables:',
      errors.flatten().fieldErrors
    )
    //exit before building
    process.exit(1)
  },
  */
  // Called when server variables are accessed on the client.
  onInvalidAccess: (variable: string) => {
    console.error(
      `❌ Attempted to access server-side environment variable "${variable}" on the client:`
    )
    throw new Error(
      '❌ Attempted to access a server-side environment variable on the client'
    )
  },
  // Skip validation if any of these cases
  skipValidation:
    !!process.env.CI || process.env.npm_lifecycle_event === 'lint',
})
