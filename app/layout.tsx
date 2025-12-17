import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Gowun_Batang } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LanguageProviderWrapper from "@/components/LanguageProviderWrapper";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const gowunBatang = Gowun_Batang({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-gowun",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Classical Guitar Luthier | Handcrafted Masterpieces",
  description: "Bespoke classical guitars handcrafted with passion and tradition. Discover the art of lutherie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorantGaramond.variable} ${inter.variable} ${gowunBatang.variable} antialiased font-sans`}
      >
        <LanguageProviderWrapper>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProviderWrapper>
      </body>
    </html>
  );
}
