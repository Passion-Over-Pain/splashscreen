import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://splashscreen-20z.pages.dev";

export const viewport: Viewport = {
  themeColor: "#0ea5e9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "SplashScreen | Pool Care, Beautifully Simplified",
    template: "%s | SplashScreen",
  },

  description:
    "SplashScreen helps South African pool owners maintain their pools smarter. Track water quality, get load shedding alerts, connect with verified service providers, and reduce water waste.",

  keywords: [
    "pool management",
    "pool care app",
    "South Africa pools",
    "water quality tracking",
    "pool maintenance",
    "load shedding alerts",
    "pool service providers",
    "SplashScreen app",
  ],

  authors: [{ name: "The Ripple Effect", url: BASE_URL }],
  creator: "The Ripple Effect",
  publisher: "The Ripple Effect",

  category: "technology",

  applicationName: "SplashScreen",

  referrer: "origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: BASE_URL,
    siteName: "SplashScreen",
    title: "SplashScreen - Pool Care, Beautifully Simplified",
    description:
      "A smarter way to manage your pool, designed for South African conditions. Track water quality, get load shedding alerts, and connect with verified service providers.",
    images: [
      {
        url: "/images/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "SplashScreen - Pool Care, Beautifully Simplified",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SplashScreen - Pool Care, Beautifully Simplified",
    description:
      "A smarter way to manage your pool, designed for South African conditions.",
    images: [
      {
        url: "/images/og/og-image.png",
        alt: "SplashScreen - Pool Care, Beautifully Simplified",
      },
    ],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }],
  },

  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-ZA"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
