import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
import { Analytics } from "@vercel/analytics/react";
import { Noto_Sans_KR, Noto_Serif_KR, Inter } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GEON | Frontend Developer Portfolio",
  description:
    "프론트엔드 개발자 GEON의 포트폴리오입니다. Next.js, React, TypeScript 기반의 다양한 프로젝트 경험을 확인하세요.",
  keywords: [
    "프론트엔드",
    "개발자",
    "포트폴리오",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "GEON" }],
  openGraph: {
    title: "GEON | Frontend Developer Portfolio",
    description: "프론트엔드 개발자 GEON의 포트폴리오",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "https://imagedelivery.net/xE6X7mlbIExkQau-XHoj-A/b018655f-68ca-4df4-47c6-33d8f6da2600/public",
        width: 1200,
        height: 630,
        alt: "GEON Portfolio",
      },
    ],
  },
  icons: {
    icon: "https://imagedelivery.net/xE6X7mlbIExkQau-XHoj-A/da86e014-02bf-4628-0f97-fb27d37c0f00/public",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${notoSans.className} ${notoSans.variable} ${notoSerif.variable} ${inter.variable} antialiased`}>
        <a href="#main-content" className="skip-link">본문으로 건너뛰기</a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
