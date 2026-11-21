import type { Metadata, Viewport } from "next";
import { Geist, Anton } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/content/site";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], display: "swap" });
const anton = Anton({ variable: "--font-anton", weight: "400", subsets: ["latin"], display: "swap" });

const description = "Weekend breaking classes for kids, teens and adult beginners on Brisbane's north side. Toprock, footwork, freezes, power basics and cypher culture with Jamie.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url + "/"),
  title: { default: `${site.brand} | Weekend breaking classes, Brisbane north`, template: `%s | ${site.brand}` },
  description,
  keywords: ["breaking classes Brisbane", "breakdance classes Brisbane", "kids breakdance Brisbane north", "Zillmere", "Everton Park"],
  openGraph: { type: "website", locale: "en_AU", siteName: site.brand, title: `${site.brand}: Learn to break`, description, url: "./" },
  twitter: { card: "summary_large_image", title: `${site.brand}: Learn to break`, description },
  alternates: { canonical: "./" },
};

export const viewport: Viewport = { themeColor: "#09090b" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${geist.variable} ${anton.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-signal focus:px-4 focus:py-2 focus:text-ink">Skip to content</a>
        <JsonLd />
        <SiteHeader />
        <main id="main" className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
