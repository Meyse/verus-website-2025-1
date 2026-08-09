import assert from 'node:assert/strict'
import test from 'node:test'

import {renderToStaticMarkup} from 'react-dom/server'

import {ProjectMarkdown} from './project-markdown'

void test('renders the approved project Markdown formatting subset', () => {
  const html = renderToStaticMarkup(
    <ProjectMarkdown>{`## Heading

**Bold** and *emphasized* text.

1. First
2. Second

> Quoted text

\`inline code\``}</ProjectMarkdown>
  )

  assert.match(html, /<h2/)
  assert.match(html, /<strong>Bold<\/strong>/)
  assert.match(html, /<em>emphasized<\/em>/)
  assert.match(html, /<ol/)
  assert.match(html, /<blockquote/)
  assert.match(html, /<code>inline code<\/code>/)
})

void test('removes active links, remote images, and raw HTML', () => {
  const html = renderToStaticMarkup(
    <ProjectMarkdown>{`[Reviewed-looking link](https://attacker.example/phish)

[Script link](javascript:alert(1))

![Tracking image](https://attacker.example/pixel.png)

<script>alert(1)</script>

<img src="https://attacker.example/raw.png" onerror="alert(1)">

<a href="https://attacker.example">Raw link</a>`}</ProjectMarkdown>
  )

  assert.doesNotMatch(html, /<a\b/i)
  assert.doesNotMatch(html, /<img\b/i)
  assert.doesNotMatch(html, /<script\b/i)
  assert.doesNotMatch(html, /href=/i)
  assert.doesNotMatch(html, /src=/i)
  assert.doesNotMatch(html, /onerror=/i)
  assert.doesNotMatch(html, /attacker\.example/i)
  assert.match(html, /Reviewed-looking link/)
  assert.match(html, /Script link/)
})
