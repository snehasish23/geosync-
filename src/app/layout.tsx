import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.geosync.agency"),
  title: {
    default: "GeoSync Agency | Digital Solutions for Schools & Businesses",
    template: "%s | GeoSync Agency",
  },
  description:
    "GeoSync Agency leads digital transformation, managing multiple brands for business and educational institutions. Specializing in school management systems (GeoEduSync) and comprehensive SEO services. Transform your operations with cutting-edge technology.",
  keywords: [
    "digital solutions",
    "school management system",
    "GeoEduSync",
    "SEO services",
    "digital transformation",
    "business automation",
    "educational technology",
    "local SEO",
    "business growth",
    "digital agency",
  ],
  authors: [{ name: "GeoSync Agency" }],
  creator: "GeoSync Agency",
  publisher: "GeoSync Agency",
  applicationName: "GeoSync Agency",
  robots: {
    index: true,
    follow: true,
    googleBot: { 
      index: true, 
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "GeoSync Agency | Digital Solutions for Schools & Businesses",
    description:
      "Empowering institutions and businesses through smart digital solutions. School management systems and comprehensive SEO services.",
    type: "website",
    siteName: "GeoSync Agency",
    url: "https://www.geosync.agency",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GeoSync Agency - Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GeoSync Agency | Digital Solutions for Schools & Businesses",
    description:
      "Empowering institutions and businesses through smart digital solutions. School management systems and comprehensive SEO services.",
    site: "@geosyncagency",
    creator: "@geosyncagency",
  },
  alternates: {
    canonical: "https://www.geosync.agency",
  },
  category: "Technology",
  classification: "Business",
  icons: [
    {
      rel: "icon",
      url: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
