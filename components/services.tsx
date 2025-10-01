"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Hammer, BookOpen, Briefcase, Package, Flame } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Hammer,
    title: "Build Outs",
    description: "Complete room transformations with custom millwork and precision craftsmanship.",
  },
  {
    icon: BookOpen,
    title: "Built-ins",
    description: "Seamlessly integrated storage solutions that maximize space and enhance aesthetics.",
  },
  {
    icon: Briefcase,
    title: "Custom Offices",
    description: "Tailored workspace designs that boost productivity and reflect your professional style.",
  },
  {
    icon: Package,
    title: "Custom Cabinetry",
    description: "Handcrafted cabinets designed to your exact specifications with premium materials.",
  },
  {
    icon: Flame,
    title: "Fireplace Mantels",
    description: "Stunning focal points that combine traditional craftsmanship with modern design.",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {"Craftsmanship That "}
            <span className="text-[oklch(0.65_0.18_155)]">{"Transforms Spaces"}</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {"From concept to completion, we deliver exceptional custom woodwork that elevates your home."}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-strong rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group cursor-pointer border border-[oklch(0.65_0.18_155/0.15)] hover:border-[oklch(0.65_0.18_155/0.35)]"
            >
              <div className="mb-6 inline-flex p-4 rounded-xl glass group-hover:bg-[oklch(0.65_0.18_155/0.25)] transition-colors">
                <service.icon size={32} className="text-[oklch(0.65_0.18_155)]" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-[oklch(0.65_0.18_155)] transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-[oklch(0.65_0.18_155)] text-white hover:bg-[oklch(0.7_0.18_155)] glow-primary-sm transition-all"
          >
            <Link href="#contact">{"Get Started on Your Project"}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
