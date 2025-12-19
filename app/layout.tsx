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
  metadataBase: new URL("https://www.ahnsguitar.com"),
  title: {
    default: "안철영 클래식기타 공방 | 안철영기타",
    template: "%s | 안철영 클래식기타 공방",
  },
  description:
    "광주광역시 남구 백운로 9-1. 전통 스페인 제작 방식을 기반으로 현대 음향학을 접목한 클래식 기타 제작 공방. 안철영기타.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "안철영기타",
    "안철영 클래식기타 공방",
    "클래식기타 공방",
    "클래식 기타 제작",
    "수제 기타",
    "루씨어",
    "광주 클래식기타",
    "맞춤 기타",
  ],
  openGraph: {
    type: "website",
    url: "https://www.ahnsguitar.com/",
    siteName: "안철영 클래식기타 공방",
    title: "안철영 클래식기타 공방 | 안철영기타",
    description:
      "전통 스페인 제작 방식을 깊이 존중하며 따르되, 현대적인 음향학과 구조 연구를 유연하게 접목합니다.",
    locale: "ko_KR",
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
  verification: {
    // 배포 후 Search Console에서 발급받은 값으로 교체 (또는 환경변수로 주입)
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  other: {
    // 네이버 서치어드바이저 소유확인용
    "naver-site-verification": process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION ?? "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
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
