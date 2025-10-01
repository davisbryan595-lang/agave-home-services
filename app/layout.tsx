import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Agave Home Services — Built Better",
  description:
    "Custom cabinetry, built-ins, office fitouts, and fireplace mantels across the East Valley. Gilbert, Chandler, Queen Creek, Scottsdale, Mesa, Tempe.",
  generator: "linkage digital",
  keywords: ["custom cabinetry", "built-ins", "home services", "Gilbert", "Chandler", "Arizona"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
