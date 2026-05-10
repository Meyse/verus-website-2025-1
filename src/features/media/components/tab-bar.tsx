import Link from 'next/link'

const tabs = [
  {href: '/media/press-kit', label: 'Press kit', value: 'press-kit'},
  {href: '/media/brand-assets', label: 'Brand assets', value: 'brand-assets'},
]

export function TabBar({activeTab}: {activeTab: string}) {
  return (
    <div className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="scrollbar-hide flex overflow-x-auto">
        {tabs.map((tab) => (
          <Link
            key={tab.value}
            href={tab.href}
            className={`whitespace-nowrap border-b-2 px-5 py-4 text-[14px] font-medium tracking-normal transition-colors md:px-8 md:text-[16px] ${
              activeTab === tab.value
                ? 'border-verus-blue text-verus-blue dark:border-blue-400 dark:text-blue-400'
                : 'border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
