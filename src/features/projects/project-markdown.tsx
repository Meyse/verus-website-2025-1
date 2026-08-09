import Markdown from 'react-markdown'
import rehypeSanitize from 'rehype-sanitize'

export const PROJECT_MARKDOWN_ALLOWED_ELEMENTS = [
  'blockquote',
  'br',
  'code',
  'del',
  'em',
  'h2',
  'h3',
  'hr',
  'li',
  'ol',
  'p',
  'pre',
  'strong',
  'ul',
]

export function ProjectMarkdown({children}: {children: string}) {
  return (
    <Markdown
      allowedElements={PROJECT_MARKDOWN_ALLOWED_ELEMENTS}
      components={{
        blockquote: ({children}) => (
          <blockquote className="mb-5 border-l-2 border-gray-300 pl-4 text-gray-600 dark:border-gray-700 dark:text-gray-300">
            {children}
          </blockquote>
        ),
        h2: ({children}) => (
          <h2 className="mb-3 mt-8 text-[22px] font-medium leading-[1.2] tracking-tight text-gray-800 first:mt-0 dark:text-white md:text-[26px]">
            {children}
          </h2>
        ),
        h3: ({children}) => (
          <h3 className="mb-2 mt-6 text-[18px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white">
            {children}
          </h3>
        ),
        li: ({children}) => (
          <li className="pl-1 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            {children}
          </li>
        ),
        ol: ({children}) => (
          <ol className="mb-5 list-decimal space-y-2 pl-5">{children}</ol>
        ),
        p: ({children}) => (
          <p className="mb-4 text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
            {children}
          </p>
        ),
        ul: ({children}) => (
          <ul className="mb-5 list-disc space-y-2 pl-5">{children}</ul>
        ),
      }}
      rehypePlugins={[rehypeSanitize]}
      skipHtml
      unwrapDisallowed
    >
      {children}
    </Markdown>
  )
}
