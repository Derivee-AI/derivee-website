import type { Metadata, Viewport } from "next";
import {
  Archivo,
  Archivo_Black,
  Bodoni_Moda,
  Geist,
  Geist_Mono,
  Source_Serif_4,
  Space_Mono,
} from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
  variable: "--font-serif",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://derivee.xyz"),
  title: "Derivée - Pricing Naira risk",
  description:
    "Market pricing and bespoke solutions for institutional counterparties. A Lagos-based desk working across Naira markets.",
  applicationName: "Derivée",
  category: "finance",
  keywords: ["Derivée", "Lagos", "Naira markets", "institutional"],
  authors: [{ name: "Derivée" }],
  creator: "Derivée",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://derivee.xyz",
    siteName: "Derivée",
    title: "Derivée - Pricing Naira risk",
    description:
      "Market pricing and bespoke solutions for institutional counterparties.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derivée - Pricing Naira risk",
    description:
      "Market pricing and bespoke solutions for institutional counterparties.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090B",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={[
          sourceSerif.variable,
          geist.variable,
          geistMono.variable,
          bodoni.variable,
          archivo.variable,
          archivoBlack.variable,
          spaceMono.variable,
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}
