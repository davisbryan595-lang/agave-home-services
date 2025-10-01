"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "/modern-custom-wood-cabinetry-built-in-shelving.jpg",
    alt: "Custom built-in shelving with wood cabinetry",
    category: "Built-ins",
  },
  {
    src: "/luxury-home-office-custom-desk-built-in.jpg",
    alt: "Custom home office with built-in desk",
    category: "Custom Offices",
  },
  {
    src: "/elegant-fireplace-mantel-custom-woodwork.jpg",
    alt: "Elegant custom fireplace mantel",
    category: "Fireplace Mantels",
  },
  {
    src: "/modern-kitchen-custom-cabinetry-white.jpg",
    alt: "Modern kitchen with custom cabinetry",
    category: "Custom Cabinetry",
  },
  {
    src: "/living-room-built-in-entertainment-center.jpg",
    alt: "Built-in entertainment center",
    category: "Built-ins",
  },
  {
    src: "/custom-closet-organization.png",
    alt: "Custom closet organization",
    category: "Build Outs",
  },
  {
    src: "/home-library-custom-bookshelves-wood.jpg",
    alt: "Custom library bookshelves",
    category: "Built-ins",
  },
  {
    src: "/modern-bathroom-custom-vanity-cabinetry.jpg",
    alt: "Custom bathroom vanity",
    category: "Custom Cabinetry",
  },
]

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="gallery" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {"Our "}
            <span className="text-[oklch(0.65_0.18_155)]">{"Portfolio"}</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-6">
            {"Explore our collection of custom woodwork projects that showcase our commitment to quality and design."}
          </p>
          <Button
            asChild
            variant="outline"
            className="glass border-[oklch(0.65_0.18_155/0.3)] text-foreground hover:bg-[oklch(0.65_0.18_155/0.1)] bg-transparent"
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Instagram size={18} />
              {"Follow us on Instagram"}
            </a>
          </Button>
        </motion.div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-2xl glass-strong border border-[oklch(0.65_0.18_155/0.1)] hover:border-[oklch(0.65_0.18_155/0.3)] transition-all duration-300">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-[oklch(0.65_0.18_155)] text-sm font-medium mb-1">{image.category}</p>
                    <p className="text-foreground text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 glass rounded-full hover:bg-[oklch(0.65_0.18_155/0.2)] transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={24} className="text-foreground" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 p-3 glass rounded-full hover:bg-[oklch(0.65_0.18_155/0.2)] transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} className="text-foreground" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 p-3 glass rounded-full hover:bg-[oklch(0.65_0.18_155/0.2)] transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={28} className="text-foreground" />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
              alt={galleryImages[currentImageIndex].alt}
              width={1200}
              height={800}
              className="w-full h-auto rounded-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-[oklch(0.65_0.18_155)] text-sm font-medium mb-1">
                {galleryImages[currentImageIndex].category}
              </p>
              <p className="text-foreground">{galleryImages[currentImageIndex].alt}</p>
              <p className="text-muted-foreground text-sm mt-2">
                {currentImageIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}
