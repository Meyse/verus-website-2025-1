export function DigitalControlSection() {
  return (
    <section className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="px-8 py-16 md:px-14 md:py-24">
          <div className="max-w-[760px]">
            <h2 className="mb-4 text-[28px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:mb-8 md:text-[44px]">
              Your personal digital database
            </h2>
            <div className="space-y-4">
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                Today, your personal data is spread across many different
                websites and services. Each platform stores your preferences,
                history, and settings on their servers. VerusID offers a
                different approach by giving you a personal database that you
                control.
              </p>
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                At its core, VerusID is a digital identity that belongs to you.
                It works like an address where you can store your data,
                settings, and digital assets. Everything stays with you instead
                of being stored on company servers.
              </p>
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                When you use services or websites, you decide what information
                to share. Instead of companies collecting and storing your data
                automatically, you can choose exactly what they can access and
                for how long. This puts you in control of your personal
                information.
              </p>
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                The system works through a user-friendly address that's both
                your identity and your data storage. You can use it to manage
                your information while keeping your privacy. And since you
                control the data directly, you don't have to trust companies to
                protect it.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center border-t border-gray-200 px-8 py-12 dark:border-gray-800 md:border-l md:border-t-0 md:px-14 md:py-24">
          <div>
            <p className="text-[15px] font-medium uppercase text-verus-blue dark:text-blue-400 md:text-[16px]">
              User-owned storage
            </p>
            <blockquote className="mt-4 text-[22px] font-medium leading-[1.2] tracking-tight text-gray-800 dark:text-white md:text-[34px]">
              Your data stays with you instead of being stored on company
              servers.
            </blockquote>
            <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-800">
              <p className="text-[15px] leading-relaxed tracking-normal text-gray-600 dark:text-gray-300 md:text-[17px]">
                VerusID turns identity into a control point for access,
                settings, assets, and records, so applications can request data
                without becoming the permanent owner of it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
