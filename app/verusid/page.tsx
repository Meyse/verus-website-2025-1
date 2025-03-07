import { Footer } from "@/components/footer"
import { FeaturesGrid } from "@/components/verusid/features-grid"
import { FutureSection } from "@/components/verusid/future-section"
import { DigitalControlSection } from "@/components/verusid/digital-control-section"
import { RealWorldSection } from "@/components/verusid/real-world-section"

export default function VerusIDPage() {
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
            Own Your Digital Future
          </h1>
          <p className="text-[16px] md:text-[32px] pt-[10px] md:pt-[1px] leading-snug text-white font-normal text-center max-w-[400px] md:max-w-[900px] tracking-tight opacity-90 mx-auto">
            VerusID—where your identity, data, and digital assets truly belong to you.
          </p>
        </div>

        <div className="flex justify-center w-full">
          <FeaturesGrid />
        </div>

        <div className="flex justify-center w-full">
          <DigitalControlSection />
        </div>

        <div className="flex justify-center w-full">
          <RealWorldSection />
        </div>

        <div className="flex justify-center w-full">
          <FutureSection />
        </div>

        <Footer />
      </div>
    </main>
  )
}