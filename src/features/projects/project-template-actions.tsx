'use client'

import {useMemo, useState} from 'react'
import {Check, Copy, Download} from 'lucide-react'

import {Button} from '@/components/ui/button'

export function ProjectTemplateActions({template}: {template: string}) {
  const [copied, setCopied] = useState(false)
  const downloadHref = useMemo(
    () => `data:text/yaml;charset=utf-8,${encodeURIComponent(template)}`,
    [template]
  )

  async function handleCopy() {
    await navigator.clipboard.writeText(template)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="mb-4 flex flex-wrap gap-3">
      <Button
        className="px-5"
        onClick={handleCopy}
        size="verus"
        type="button"
        variant="verusPrimary"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        {copied ? 'Copied' : 'Copy YAML'}
      </Button>

      <Button asChild className="px-5" size="verus" variant="verusSecondary">
        <a download="project-template.yaml" href={downloadHref}>
          <Download className="h-4 w-4" />
          Download YAML
        </a>
      </Button>
    </div>
  )
}

