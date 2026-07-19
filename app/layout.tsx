import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/app/globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Tirare Mobility Technologies",
    template: "%s | Tirare Mobility Technologies",
  },

  description:
    "Engineering retrofit systems that preserve existing cargo tricycles while introducing practical electric torque assistance.",

  applicationName: "Tirare Mobility Technologies",

  keywords: [
    "Tirare",
    "Mobility",
    "Cargo Tricycle",
    "Retrofit",
    "Electric Assist",
    "Engineering",
    "Urban Mobility",
    "Mechanical Engineering",
    "India",
  ],

  authors: [
    {
      name: "Tirare Mobility Technologies",
    },
  ],

  creator: "Tirare Mobility Technologies",

  publisher: "Tirare Mobility Technologies",

  metadataBase: new URL("https://tirare.tech"),

  openGraph: {
    title: "Tirare Mobility Technologies",

    description:
      "Engineering retrofit systems for cargo mobility.",

    url: "https://tirare.tech",

    siteName: "Tirare Mobility Technologies",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Tirare Mobility Technologies",

    description:
      "Engineering retrofit systems for cargo mobility.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0D0F",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}