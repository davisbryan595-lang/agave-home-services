import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { BeforeAfter } from "@/components/before-after"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[oklch(0.12_0.01_240)] via-[oklch(0.15_0.015_240)] to-[oklch(0.18_0.02_240)]">
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <BeforeAfter />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  )
}
