import { Footer } from "@/components/footer"
import { FeaturesGrid } from "@/components/defi-payments/features-grid"
import { DeFiContent } from "@/components/defi-payments/content"

export default function DeFiPaymentsPage() {
  return (
    <main className="relative min-h-[calc(100vh-50px)] md:min-h-[calc(100vh-70px)] w-screen mt-[50px] md:mt-[70px]">
      {/* Background wrapper with fixed height */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/img/hero-bg2-2.webp"
          alt="Hero background"
          className="w-full h-[1200px] md:h-[1000px] object-cover -translate-y-[250px] md:-translate-y-[50px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4">
        <div className="pt-[30px] md:pt-[70px]">
          <h1 className="text-[32px] md:text-[75px] text-white font-medium text-center leading-[1.1] tracking-tight">
            DeFi & Payments
          </h1>
          <p className="text-[16px] md:text-[32px] pt-[10px] md:pt-[20px] leading-snug text-white font-normal text-center max-w-[400px] md:max-w-[900px] tracking-tight opacity-90 mx-auto">
            Fair DeFi without MEV exploitation. Low fees, secure payments, and protocol-level privacy—no smart contracts needed.
          </p>
        </div>

        <div className="flex justify-center w-full">
          <FeaturesGrid />
        </div>
        
        <div className="flex justify-center w-full">
          <DeFiContent />
        </div>

        <Footer />
      </div>
    </main>
  )
}