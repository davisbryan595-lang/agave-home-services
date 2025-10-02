"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Gilbert, AZ",
    rating: 5,
    text: "Agave Home Services transformed our home office beyond our expectations. The attention to detail and craftsmanship is outstanding. They listened to our needs and delivered a space that's both beautiful and functional.",
    project: "Custom Home Office",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Chandler, AZ",
    rating: 5,
    text: "We couldn't be happier with our new built-in entertainment center. The team was professional, punctual, and the quality of work is exceptional. It's become the centerpiece of our living room.",
    project: "Living Room Built-ins",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Scottsdale, AZ",
    rating: 5,
    text: "The custom fireplace mantel they created is absolutely stunning. It perfectly matches our home's aesthetic and has become a conversation piece. Highly recommend their services!",
    project: "Fireplace Mantel",
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Mesa, AZ",
    rating: 5,
    text: "From consultation to completion, the entire process was smooth and professional. The custom cabinetry in our kitchen is beautiful and has significantly improved our storage space.",
    project: "Custom Kitchen Cabinetry",
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {"What Our "}
            <span className="text-[oklch(0.704_0.184_129/.6)]">{"Clients Say"}</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {"Don't just take our word for it. Here's what our satisfied clients have to say about our work."}
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-strong rounded-2xl p-8 md:p-12 border border-[oklch(0.7_0.14_150/0.2)] relative">
            <Quote size={48} className="text-[oklch(0.7_0.14_150/0.3)] mb-6" />

            <div className="space-y-6">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-[oklch(0.704_0.184_129/.6)] text-[oklch(0.704_0.184_129/.6)]" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-foreground leading-relaxed text-pretty">
                {testimonials[currentIndex].text}
              </p>

              <div className="pt-6 border-t border-border/30">
                <p className="font-semibold text-foreground text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
                <p className="text-sm text-[oklch(0.704_0.184_129/.6)] mt-1">{testimonials[currentIndex].project}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 glass rounded-full hover:bg-[oklch(0.7_0.14_150/0.2)] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-foreground" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-[oklch(0.704_0.184_129/.6)] w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 glass rounded-full hover:bg-[oklch(0.7_0.14_150/0.2)] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-foreground" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
