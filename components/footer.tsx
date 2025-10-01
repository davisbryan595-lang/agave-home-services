import Link from "next/link"
import Image from "next/image"
import { Instagram, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass-strong border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agavelogo-removebg-preview-VyuO1X9uKR9DZgkSqRfEzzWQeBpEc9.png"
              alt="Agave Home Services"
              width={160}
              height={50}
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {"Custom cabinetry and built-ins across the East Valley."}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Services", "Gallery", "Projects", "Testimonials", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Build Outs</li>
              <li>Built-ins</li>
              <li>Custom Offices</li>
              <li>Custom Cabinetry</li>
              <li>Fireplace Mantels</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="mt-0.5 text-primary" />
                <a href="tel:480-747-7925" className="hover:text-primary transition-colors">
                  480-747-7925
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="mt-0.5 text-primary" />
                <a href="mailto:info@remopaul.com" className="hover:text-primary transition-colors">
                  info@remopaul.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 text-primary" />
                <span>2633 E Geronimo</span>
              </li>
              <li className="flex items-center gap-2 mt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg hover:bg-primary/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-primary" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} Agave Home Services. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">
            {"Serving Gilbert, Chandler, Queen Creek, Scottsdale, Mesa, Tempe"}
          </p>
        </div>
      </div>
    </footer>
  )
}
