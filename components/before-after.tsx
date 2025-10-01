"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"

export function BeforeAfter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.clientX, rect)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.touches[0].clientX, rect)
  }

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {"See The "}
            <span className="text-[oklch(0.7_0.14_150)]">{"Transformation"}</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {"Drag the slider to see how we transform spaces with our custom woodwork."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="relative aspect-[16/10] rounded-2xl overflow-hidden glass-strong border border-[oklch(0.7_0.14_150/0.2)] cursor-ew-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* After Image (now showing first, base layer) */}
            <Image
              src="/modern-custom-built-in-cabinetry-after-renovation.jpg"
              alt="After renovation"
              fill
              className="object-cover"
            />

            {/* Before Image with Clip */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src="/empty-room-before-renovation.jpg"
                alt="Before renovation"
                fill
                className="object-cover"
              />
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[oklch(0.7_0.14_150)] cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-strong border-2 border-[oklch(0.7_0.14_150)] flex items-center justify-center glow-primary-sm">
                <div className="flex gap-1">
                  <div className="w-0.5 h-4 bg-[oklch(0.7_0.14_150)] rounded-full" />
                  <div className="w-0.5 h-4 bg-[oklch(0.7_0.14_150)] rounded-full" />
                </div>
              </div>
            </div>

            {/* Labels (swapped positions) */}
            <div className="absolute top-4 left-4 glass px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-foreground">After</span>
            </div>
            <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-foreground">Before</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
