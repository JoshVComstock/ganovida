import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import JsonLd from "@/components/ui/JsonLd";
import {
  SITE_URL,
  SITE_NAME,
  ALL_KEYWORDS,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#182519",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Café con Ganoderma en Cochabamba | GanoVida",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Café con Ganoderma (reishi) en Cochabamba: productos originales DXN con entrega a domicilio en 1 a 2 días y pedidos por WhatsApp. Publicamos cuánta azúcar tiene cada producto y quién no debería tomarlo.",
  keywords: ALL_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Alimentos y bebidas",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_BO",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Café con Ganoderma en Cochabamba | GanoVida",
    description:
      "Productos originales DXN con entrega en Cochabamba. Te decimos lo bueno y lo malo de cada producto, incluida la azúcar.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "GanoVida — café y bienestar con Ganoderma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Café con Ganoderma en Cochabamba | GanoVida",
    description:
      "Productos originales DXN con entrega en Cochabamba. Lo bueno y lo malo de cada producto.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  formatDetection: {
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-BO" className={`${outfit.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      </head>
      <body className="font-body-md bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
        {children}
      </body>
    </html>
  );
}
