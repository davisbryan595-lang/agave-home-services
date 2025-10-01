"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/modern-luxury-custom-wood-cabinetry-built-in-shelv.jpg')`,
          }}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        {/* Subtle Agave Green Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[oklch(0.65_0.18_155/0.15)]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <div className="glass px-6 py-2 rounded-full inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[oklch(0.65_0.18_155)] animate-pulse" />
              <span className="text-sm text-muted-foreground">Premium Home Services</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight"
          >
            <span className="text-[oklch(0.65_0.18_155)] glow-primary-sm">Built Better</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed"
          >
            Custom cabinetry, built-ins, office fitouts, and fireplace mantels across the East Valley
          </motion.p>

          {/* Service Area */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm text-muted-foreground/80"
          >
            Serving Gilbert, Chandler, Queen Creek, Scottsdale, Mesa, Tempe
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-[oklch(0.65_0.18_155)] text-white hover:bg-[oklch(0.7_0.18_155)] glow-primary transition-all group"
            >
              <Link href="#contact" className="flex items-center gap-2">
                Request an Estimate
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="glass border-[oklch(0.65_0.18_155/0.3)] text-foreground hover:bg-[oklch(0.65_0.18_155/0.1)] transition-all bg-transparent"
            >
              <a href="tel:480-747-7925" className="flex items-center gap-2">
                <Phone size={18} />
                480-747-7925
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-12"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="w-6 h-10 rounded-full border-2 border-[oklch(0.65_0.18_155/0.5)] flex items-start justify-center p-2"
              >
                <div className="w-1 h-2 rounded-full bg-[oklch(0.65_0.18_155)]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
