export function RealWorldSection() {
  return (
    <section className="border-t border-gray-200 bg-gradient-to-br from-blue-50 to-white dark:border-gray-800 dark:from-blue-950/40 dark:to-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="px-8 py-16 md:px-14 md:py-24">
          <div className="max-w-[760px]">
            <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
              Your data, your rules
            </h2>
            <div className="space-y-4">
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                VerusID is a new type of digital identity that connects your
                online and offline information in one place. Instead of having
                your important documents and credentials scattered across
                different organizations, you can store them securely in your
                personal database.
              </p>
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                Your VerusID can hold verified information from trusted sources
                like government agencies, schools, employers, and banks. This
                means your degrees, work history, and official documents are all
                accessible through one secure identity that you control.
              </p>
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                The key difference is that you decide who gets to see your
                information. Rather than organizations storing and sharing your
                data without your knowledge, you choose when and with whom to
                share your credentials.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center border-t border-gray-200 px-8 py-12 dark:border-gray-800 md:border-l md:border-t-0 md:px-14 md:py-24">
          <div>
            <p className="text-[15px] font-medium uppercase text-verus-blue dark:text-blue-400 md:text-[16px]">
              Selective disclosure
            </p>
            <blockquote className="mt-4 text-[22px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[34px]">
              Your credentials, your choice of who sees them.
            </blockquote>
            <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-800">
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                Share what is needed for the moment, keep everything else under
                your control, and avoid making every service a permanent copy of
                your personal records.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
