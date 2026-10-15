import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-serif", adjustFontFallback: false });

export const metadata: Metadata = {
  title: "SHD Constructions | Building better spaces together",
  description:
    "SHD Constructions is a design-build company in Bhopal, Madhya Pradesh, delivering architecture, construction, interiors and renovation with quality materials and transparent process.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${newsreader.variable} font-sans antialiased bg-shd-cream text-shd-ink`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
