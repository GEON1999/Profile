import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};
import { Analytics } from "@vercel/analytics/react";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import { SITE_URL } from "@/lib/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GEON | Frontend Developer Portfolio",
    description: "프론트엔드 개발자 GEON의 포트폴리오",
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "GEON Portfolio",
    images: [
      {
        url: "/images/og.png",
        width: 1025,
        height: 382,
        alt: "GEON Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEON | Frontend Developer Portfolio",
    description: "프론트엔드 개발자 GEON의 포트폴리오",
    images: ["/images/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${notoSans.className} ${notoSans.variable} ${notoSerif.variable} antialiased`}>
        <a href="#main-content" className="skip-link">본문으로 건너뛰기</a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
