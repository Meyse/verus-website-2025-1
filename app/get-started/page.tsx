import { GetStartedSections } from "@/components/get-started/sections"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Getting Started with Verus | Verus",
  description: "Your guide to joining the Verus ecosystem, from setting up your first wallet to participating in the network.",
  keywords: "get started blockchain, Verus wallet, cryptocurrency tutorial, Verus setup, blockchain beginners",
  openGraph: {
    title: "Getting Started with Verus | Verus",
    description: "Your guide to joining the Verus ecosystem, from setting up your first wallet to participating in the network.",
    url: "/get-started",
    siteName: "Verus",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Getting Started with Verus | Verus",
    description: "Your guide to joining the Verus ecosystem, from setting up your first wallet to participating in the network.",
  },
  alternates: {
    canonical: "/get-started",
  },
}

export default function GetStartedPage() {
  return (
    <main className="relative h-[calc(100vh-50px)] md:h-[calc(100vh-70px)] w-screen mt-[50px] md:mt-[70px]">
      {/* Background images - separate for light and dark mode */}
      <img 
        src="/img/bg-small.webp"
        alt="Background - light"
        className="absolute h-full w-full object-cover fixed -translate-y-[300px] md:-translate-y-[50px] dark:hidden"
      />
      <img 
        src="/img/bg-small-dark.webp"
        alt="Background - dark"
        className="absolute h-full w-full object-cover fixed -translate-y-[300px] md:-translate-y-[50px] hidden dark:block"
      />
      
      <div className="relative z-10 flex flex-col min-h-[calc(100vh-50px)] md:min-h-[calc(100vh-70px)]">
        <div className="flex-grow py-8 md:py-16">
          <div className="max-w-[1220px] mx-auto md:px-8">
            <div className="px-4 md:px-0 mb-8 md:mb-16">
              <h1 className="text-[22px] md:text-[40px] leading-snug text-verus-blue dark:text-blue-400 font-medium tracking-tight">
                Getting started with Verus.
              </h1>
              <p className="text-[16px] md:text-[20px] tracking-tight text-gray-700 dark:text-gray-300 mt-4 max-w-[800px]">
                Your guide to joining the Verus ecosystem, from setting up your first wallet to participating in the network.
              </p>
            </div>
            
            <GetStartedSections />
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  )
} 