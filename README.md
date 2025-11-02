# GeoSync Agency Website

A modern, premium website for GeoSync Agency featuring advanced animations, interactive 3D visuals, and a comprehensive digital solution showcase.

## Features

- 🎨 **Modern UI/UX**: Premium dark theme with glassmorphism effects
- ✨ **Advanced Animations**: Smooth spring physics, parallax scrolling, scroll reveals
- 🎯 **Interactive 3D Visuals**: Wireframe sphere with hover interactions
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🔍 **SEO Optimized**: Comprehensive metadata, structured data, semantic HTML
- 🚀 **Performance**: Optimized animations and lazy loading
- 📝 **Contact Form**: Backend API for form submissions with validation

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
geosync-agency/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/        # Contact form API endpoint
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main homepage
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── LeadForm.tsx        # Contact form component
│   │   ├── SphereWireframe.tsx # Interactive 3D sphere
│   │   ├── AbstractVisual.tsx  # Abstract visual component
│   │   ├── VisualElements.tsx  # Visual element variants
│   │   ├── Animations.tsx       # Animation utilities
│   │   └── StructuredData.tsx # SEO structured data
│   └── lib/
│       ├── validation.ts      # Form validation schemas
│       └── email.ts            # Email service utilities
└── public/                     # Static assets
```

## API Endpoints

### POST /api/contact

Submit contact form data.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 555 555 5555",
  "org": "Acme Corp",
  "message": "I'm interested in your services"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your submission. We'll get back to you soon!"
}
```

## Environment Variables

Create a `.env.local` file:

```env
# Email Service (optional)
RESEND_API_KEY=your_resend_api_key
# or
SENDGRID_API_KEY=your_sendgrid_api_key

# Database (optional)
DATABASE_URL=your_database_url

# Contact Email
CONTACT_EMAIL=contact@geosync.agency
```

## Customization

### Colors

Edit `src/app/globals.css` to customize the color scheme:

```css
:root {
  --gs-teal: #00c2b2;
  --gs-turquoise: #1fd6d4;
  --gs-blue: #1b8fff;
}
```

### Animations

Adjust animation parameters in `src/components/Animations.tsx` or `src/app/page.tsx`.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## SEO Features

- ✅ Comprehensive metadata
- ✅ Open Graph tags
- ✅ Twitter Card metadata
- ✅ Structured data (JSON-LD)
- ✅ Semantic HTML
- ✅ Sitemap support (add sitemap.ts)

## Performance Optimizations

- Lazy loading for 3D components
- Optimized images
- Code splitting
- Smooth animations with spring physics
- Reduced motion support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 GeoSync Agency - All Rights Reserved
