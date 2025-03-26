// People Page - Meet the Verus team and community
import { Footer } from "@/components/footer"
import { PeopleSections } from "@/components/people/sections"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meet the People Behind Verus | Verus",
  description: "Meet the developers, contributors, and community members building the Verus ecosystem.",
  keywords: "Verus contributors, blockchain developers, cryptocurrency community, blockchain contributors, open source contributors",
  openGraph: {
    title: "Meet the People Behind Verus | Verus",
    description: "Meet the developers, contributors, and community members building the Verus ecosystem.",
    url: "https://verus.io/people",
    siteName: "Verus",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet the People Behind Verus | Verus",
    description: "Meet the developers, contributors, and community members building the Verus ecosystem.",
  },
  alternates: {
    canonical: "https://verus.io/people",
  },
}

export default function PeoplePage() {
  return (
    <main className="relative h-screen w-screen mt-[50px] md:mt-[70px]">
      {/* Background images - separate for light and dark mode */}
      <img 
        src="/img/bg-small.webp"
        alt="Background - light"
        className="absolute h-full w-full object-cover -translate-y-[300px] md:-translate-y-[50px] dark:hidden"
      />
      <img 
        src="/img/bg-small-dark.webp"
        alt="Background - dark"
        className="absolute h-full w-full object-cover -translate-y-[300px] md:-translate-y-[50px] hidden dark:block"
      />
      
      <div className="relative z-10 flex flex-col min-h-[calc(100vh-50px)] md:min-h-[calc(100vh-70px)]">
        <div className="flex-grow py-8 md:py-16">
          <div className="max-w-[1220px] mx-auto md:px-8">
            <div className="px-4 md:px-0 mb-8 md:mb-16">
              <h1 className="text-[22px] md:text-[40px] leading-snug text-verus-blue dark:text-blue-400 font-medium tracking-tight">
                Meet the people building the Verus ecosystem.
              </h1>
              
            </div>
            
            <PeopleSections />
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  )
} 