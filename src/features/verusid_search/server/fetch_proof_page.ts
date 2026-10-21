import 'server-only'

const REDDIT_HOST = /(^|\.)reddit\.com$/
// Reddit rejects some generic clients, so identify the site
const REDDIT_USER_AGENT = 'web:io.verus.verusid-search:v1.0 (+https://verus.io)'

// Reddit blocks server requests to its JSON API and serves normal pages as a
// script shell, but its comment embed page includes the proof text
const toRedditEmbedUrl = (proofUrl: string) => {
  const url = new URL(proofUrl)
  if (!REDDIT_HOST.test(url.hostname)) return undefined

  url.hostname = 'embed.reddit.com'
  url.search = ''
  if (!url.pathname.endsWith('/')) url.pathname += '/'
  return url.toString()
}

// Fetch the page that holds a social media proof post
export async function fetchProofPage(proofUrl: string) {
  const redditEmbedUrl = toRedditEmbedUrl(proofUrl)
  const fetchUrl = redditEmbedUrl ?? proofUrl

  const response = await fetch(fetchUrl, {
    cache: 'no-cache',
    ...(redditEmbedUrl && {headers: {'User-Agent': REDDIT_USER_AGENT}}),
  })
  if (!response.ok) {
    console.error(`URL fetch error: ${response.status} for ${fetchUrl}`)
    throw new Error(`URL fetch error: ${response.status}`)
  }
  return response.text()
}
