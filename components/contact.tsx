"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {"Let's Build "}
            <span className="text-[oklch(0.65_0.18_155)]">{"Something Amazing"}</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            {"Ready to transform your space? Get in touch for a free consultation and estimate."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-strong rounded-2xl p-8 border border-[oklch(0.65_0.18_155/0.2)]">
              <h3 className="text-2xl font-semibold text-foreground mb-6">{"Get In Touch"}</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 glass rounded-xl">
                    <Phone size={24} className="text-[oklch(0.65_0.18_155)]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{"Phone"}</p>
                    <a
                      href="tel:480-747-7925"
                      className="text-foreground font-medium hover:text-[oklch(0.65_0.18_155)] transition-colors"
                    >
                      480-747-7925
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 glass rounded-xl">
                    <Mail size={24} className="text-[oklch(0.65_0.18_155)]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{"Email"}</p>
                    <a
                      href="mailto:info@remopaul.com"
                      className="text-foreground font-medium hover:text-[oklch(0.65_0.18_155)] transition-colors"
                    >
                      info@remopaul.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 glass rounded-xl">
                    <MapPin size={24} className="text-[oklch(0.65_0.18_155)]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{"Address"}</p>
                    <p className="text-foreground font-medium">2633 E Geronimo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8 border border-[oklch(0.65_0.18_155/0.2)]">
              <h3 className="text-xl font-semibold text-foreground mb-4">{"Service Area"}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {
                  "We proudly serve the East Valley including Gilbert, Chandler, Queen Creek, Scottsdale, Mesa, and Tempe."
                }
              </p>
            </div>

            <div className="glass-strong rounded-2xl p-8 border border-[oklch(0.65_0.18_155/0.2)]">
              <h3 className="text-xl font-semibold text-foreground mb-4">{"Business Hours"}</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>{"Monday - Friday"}</span>
                  <span className="text-foreground">{"8:00 AM - 6:00 PM"}</span>
                </div>
                <div className="flex justify-between">
                  <span>{"Saturday"}</span>
                  <span className="text-foreground">{"9:00 AM - 4:00 PM"}</span>
                </div>
                <div className="flex justify-between">
                  <span>{"Sunday"}</span>
                  <span className="text-foreground">{"Closed"}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-strong rounded-2xl p-8 border border-[oklch(0.65_0.18_155/0.2)] space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  {"Name *"}
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="glass border-[oklch(0.65_0.18_155/0.2)] focus:border-[oklch(0.65_0.18_155)] bg-transparent text-foreground"
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  {"Email *"}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="glass border-[oklch(0.65_0.18_155/0.2)] focus:border-[oklch(0.65_0.18_155)] bg-transparent text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">
                  {"Phone *"}
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="glass border-[oklch(0.65_0.18_155/0.2)] focus:border-[oklch(0.65_0.18_155)] bg-transparent text-foreground"
                  placeholder="(480) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-foreground">
                  {"Service Interested In *"}
                </Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full glass border border-[oklch(0.65_0.18_155/0.2)] focus:border-[oklch(0.65_0.18_155)] bg-transparent text-foreground rounded-md px-3 py-2 outline-none"
                >
                  <option value="" className="bg-[oklch(0.18_0.02_240)] text-foreground">
                    {"Select a service"}
                  </option>
                  <option value="build-outs" className="bg-[oklch(0.18_0.02_240)] text-foreground">
                    {"Build Outs"}
                  </option>
                  <option value="built-ins" className="bg-[oklch(0.18_0.02_240)] text-foreground">
                    {"Built-ins"}
                  </option>
                  <option value="custom-offices" className="bg-[oklch(0.18_0.02_240)] text-foreground">
                    {"Custom Offices"}
                  </option>
                  <option value="custom-cabinetry" className="bg-[oklch(0.18_0.02_240)] text-foreground">
                    {"Custom Cabinetry"}
                  </option>
                  <option value="fireplace-mantels" className="bg-[oklch(0.18_0.02_240)] text-foreground">
                    {"Fireplace Mantels"}
                  </option>
                  <option value="other" className="bg-[oklch(0.18_0.02_240)] text-foreground">
                    {"Other"}
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  {"Message *"}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="glass border-[oklch(0.65_0.18_155/0.2)] focus:border-[oklch(0.65_0.18_155)] bg-transparent text-foreground resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[oklch(0.65_0.18_155)] text-black hover:bg-[oklch(0.7_0.18_155)] glow-primary-sm transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    {"Sending..."}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={18} />
                    {"Send Message"}
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
