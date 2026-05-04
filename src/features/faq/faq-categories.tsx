function getCategoryId(category: string) {
  return category.toLowerCase().replace(/\s+/g, '-')
}

export function FaqCategories({categories}: {categories: string[]}) {
  return (
    <nav className="md:sticky md:top-24" aria-label="FAQ categories">
      <h2 className="mb-4 text-[16px] font-medium text-gray-800 dark:text-white md:text-[18px]">
        Categories
      </h2>
      <ul className="grid grid-cols-1 border border-gray-200 dark:border-gray-800 md:block md:space-y-2 md:border-0">
        {categories.map((cat) => (
          <li
            key={cat}
            className="border-b border-gray-200 last:border-b-0 dark:border-gray-800 md:border-b-0"
          >
            <a
              href={`#${getCategoryId(cat)}`}
              className="flex px-4 py-3 text-[15px] font-[450] text-gray-600 transition-colors hover:text-verus-blue hover:underline dark:text-gray-300 dark:hover:text-blue-400 md:inline-flex md:px-0 md:py-1"
            >
              {cat}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
