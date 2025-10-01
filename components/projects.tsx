"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { MapPin, Calendar, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Modern Home Office Suite",
    location: "Gilbert, AZ",
    date: "December 2024",
    category: "Custom Offices",
    image: "/luxury-home-office-custom-desk-built-in.jpg",
    description:
      "Complete home office transformation featuring custom built-in desk, floor-to-ceiling shelving, and integrated cable management. Premium walnut finish with soft-close drawers.",
    services: ["Custom Offices", "Built-ins", "Custom Cabinetry"],
    images: ["/luxury-home-office-custom-desk-built-in.jpg", "/home-library-custom-bookshelves-wood.jpg", "/modern-custom-wood-cabinetry-built-in-shelving.jpg"],
  },
  {
    id: 2,
    title: "Luxury Living Room Built-ins",
    location: "Chandler, AZ",
    date: "November 2024",
    category: "Built-ins",
    image: "/living-room-built-in-entertainment-center.jpg",
    description:
      "Stunning entertainment center with custom cabinetry, LED accent lighting, and hidden storage. Seamlessly integrated with existing architecture.",
    services: ["Built-ins", "Custom Cabinetry"],
    images: ["/living-room-built-in-entertainment-center.jpg", "/custom-closet-organization.png", "/modern-kitchen-custom-cabinetry-white.jpg"],
  },
  {
    id: 3,
    title: "Elegant Fireplace Mantel",
    location: "Scottsdale, AZ",
    date: "October 2024",
    category: "Fireplace Mantels",
    image: "/elegant-fireplace-mantel-custom-woodwork.jpg",
    description:
      "Hand-crafted fireplace mantel with intricate crown molding and custom corbels. Stained to match existing woodwork throughout the home.",
    services: ["Fireplace Mantels"],
    images: ["/elegant-fireplace-mantel-custom-woodwork.jpg", "/home-library-custom-bookshelves-wood.jpg"],
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {"Featured "}
            <span className="text-[oklch(0.65_0.18_155)]">{"Projects"}</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {"Explore our recent work and see how we bring custom woodwork visions to life."}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-strong rounded-2xl overflow-hidden border border-[oklch(0.65_0.18_155/0.1)] hover:border-[oklch(0.65_0.18_155/0.3)] transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="glass px-3 py-1 rounded-full text-xs font-medium text-[oklch(0.65_0.18_155)]">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-[oklch(0.65_0.18_155)] transition-colors">
                  {project.title}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-[oklch(0.65_0.18_155)]" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-[oklch(0.65_0.18_155)]" />
                    <span>{project.date}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="mt-4 w-full text-[oklch(0.65_0.18_155)] hover:bg-[oklch(0.65_0.18_155/0.1)]"
                >
                  {"View Details"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div className="max-w-4xl w-full glass-strong rounded-2xl p-8 my-8" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 glass rounded-full hover:bg-[oklch(0.65_0.18_155/0.2)] transition-colors"
              aria-label="Close modal"
            >
              <X size={24} className="text-foreground" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="glass px-3 py-1 rounded-full text-xs font-medium text-[oklch(0.65_0.18_155)] inline-block mb-4">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl font-bold text-foreground mb-4">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[oklch(0.65_0.18_155)]" />
                    <span>{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[oklch(0.65_0.18_155)]" />
                    <span>{selectedProject.date}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProject.images.map((img, idx) => (
                  <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${selectedProject.title} ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{"Project Description"}</h4>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{"Services Provided"}</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.services.map((service) => (
                    <span key={service} className="glass px-4 py-2 rounded-full text-sm text-foreground">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}
