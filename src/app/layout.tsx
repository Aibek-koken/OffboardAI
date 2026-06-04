import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OffboardAI — Сохраняем знания уходящих инженеров",
  description:
    "30-минутное голосовое интервью с уходящим инженером → Role Technical Passport за 24 часа. Для CTO и Engineering Managers.",
  keywords: [
    "offboarding",
    "knowledge management",
    "engineering",
    "CTO",
    "technical documentation",
    "AI",
  ],
  openGraph: {
    title: "OffboardAI — Сохраняем знания уходящих инженеров",
    description:
      "30-минутное голосовое интервью → Role Technical Passport за 24 часа",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
