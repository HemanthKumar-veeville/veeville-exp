import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.veevillexp.com"),
  title: {
    default: "Veeville Experiences - Welcome to Excellence",
    template: "%s | Veeville Experiences",
  },
  description:
    "Discover excellence with our innovative solutions. We provide top-tier services and products designed to elevate your business to new heights.",
  keywords: [
    "business solutions",
    "innovation",
    "excellence",
    "professional services",
    "technology",
    "experiences",
  ],
  authors: [{ name: "Veeville Experiences Team" }],
  creator: "Veeville Experiences",
  publisher: "Veeville Experiences",
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
    type: "website",
    locale: "en_US",
    url: "https://www.veevillexp.com",
    siteName: "Veeville Experiences",
    title: "Veeville Experiences - Welcome to Excellence",
    description:
      "Discover excellence with our innovative solutions. We provide top-tier services and products designed to elevate your business to new heights.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Veeville Experiences - Excellence in Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veeville Experiences - Welcome to Excellence",
    description: "Discover excellence with our innovative solutions.",
    images: ["/og-image.jpg"],
    creator: "@veevillexp",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://www.veevillexp.com",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}