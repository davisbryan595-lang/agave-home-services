# Agave Home Services Website

A premium, production-ready website for Agave Home Services featuring a molten glass aesthetic with dark theme and agave green accents.

## Features

- **Molten Glass UI**: Glassmorphism design with frosted panels, subtle glows, and liquid gradients
- **Dark Theme**: Premium dark color palette with no white backgrounds
- **Smooth Animations**: Framer Motion powered animations throughout
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Interactive Gallery**: Masonry grid with lightbox, before/after slider
- **Project Showcase**: Featured projects with detailed modal views
- **Contact Form**: Validated form with toast notifications
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **TypeScript**: Full type safety

## Getting Started

### Installation

\`\`\`bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

\`\`\`bash
pnpm build
pnpm start
\`\`\`

## Customization

### Changing Colors

The color palette is defined in `app/globals.css`. The primary agave green accent is:
- `oklch(0.65 0.18 155)` - Main agave green

To change colors, update the CSS custom properties in the `:root` and `.dark` selectors.

### Adding Gallery Images

Replace placeholder images in `components/gallery.tsx` with your own:

\`\`\`tsx
const galleryImages = [
  {
    src: "/your-image.jpg",
    alt: "Description",
    category: "Service Category",
  },
  // Add more images...
]
\`\`\`

Place images in the `/public` directory.

### Connecting Instagram

Update the Instagram link in `components/gallery.tsx` and `components/footer.tsx`:

\`\`\`tsx
<a href="https://instagram.com/your-handle" ...>
\`\`\`

### Contact Form Integration

The contact form currently uses a simulated submission. To connect to a real backend:

1. **Option 1: Formspree**
   - Sign up at [formspree.io](https://formspree.io)
   - Update the form action in `components/contact.tsx`

2. **Option 2: API Route**
   - Create `/app/api/contact/route.ts`
   - Implement email sending logic (e.g., with Resend, SendGrid)

3. **Option 3: Netlify Forms**
   - Add `netlify` attribute to form
   - Deploy to Netlify

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Environment Variables

No environment variables required for basic functionality. Add as needed for:
- Email service integration
- Analytics
- CMS integration

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles & theme
├── components/
│   ├── navigation.tsx      # Header navigation
│   ├── hero.tsx            # Hero section
│   ├── services.tsx        # Services grid
│   ├── gallery.tsx         # Image gallery with lightbox
│   ├── before-after.tsx    # Before/after slider
│   ├── projects.tsx        # Featured projects
│   ├── testimonials.tsx    # Client testimonials
│   ├── contact.tsx         # Contact form
│   ├── footer.tsx          # Footer
│   └── ui/                 # shadcn/ui components
├── public/                 # Static assets
└── README.md
\`\`\`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Agave Home Services. All rights reserved.

## Support

For questions or support:
- Email: info@remopaul.com
- Phone: 480-747-7925
