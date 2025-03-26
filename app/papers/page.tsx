import { PapersContent } from "@/components/papers/content"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Verus Whitepapers & Technical Documents | Verus",
  description: "Learn about the technical foundations and innovations behind the Verus Protocol.",
  keywords: "blockchain whitepaper, Verus technical documents, cryptocurrency research, blockchain technology papers, Verus documentation",
  openGraph: {
    title: "Verus Whitepapers & Technical Documents | Verus",
    description: "Learn about the technical foundations and innovations behind the Verus Protocol.",
    url: "https://verus.io/papers",
    siteName: "Verus",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verus Whitepapers & Technical Documents | Verus",
    description: "Learn about the technical foundations and innovations behind the Verus Protocol.",
  },
  alternates: {
    canonical: "https://verus.io/papers",
  },
}

export default function PapersPage() {
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
                Verus whitepapers & technical documents.
              </h1>
              <p className="text-[16px] md:text-[20px] text-gray-700 dark:text-gray-300 mt-4 max-w-[800px]">
                Learn about the technical foundations and innovations behind the Verus Protocol.
              </p>
            </div>
            
            <PapersContent />
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  )
} 