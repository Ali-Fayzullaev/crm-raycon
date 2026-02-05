import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Rayson CRM — CRM для продаж в Казахстане | Мультичат и автоматизация",
  description:
    "Rayson CRM — проверенная CRM-система для микро- и макробизнеса в Казахстане. Мультичат WhatsApp, автораспределитель заявок, воронка продаж, аналитика и чат-боты. Рост конверсии на 20-30%.",
  keywords:
    "CRM для продаж, автоматизация продаж, мультичат для бизнеса, CRM для малого бизнеса, CRM аналитика, управление воронкой, CRM Казахстан",
  openGraph: {
    title: "Rayson CRM — все каналы коммуникации в одной системе",
    description:
      "Объедините WhatsApp, Instagram и другие мессенджеры. Контролируйте продажи и увеличьте конверсию на 30%.",
    type: "website",
    locale: "ru_KZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
