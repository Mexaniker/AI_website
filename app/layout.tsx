import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Azori - AI-Менеджер Продаж | Автоматизация отдела продаж",
  description: "Полноценная замена менеджера по продажам. AI отвечает за 5 секунд, квалифицирует лидов, записывает на встречи и интегрируется с любой CRM.",
  keywords: "AI менеджер продаж, автоматизация продаж, CRM интеграция, чат-бот для продаж, AI для бизнеса",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="dark">
      <ClientBody className={inter.className}>{children}</ClientBody>
    </html>
  );
}
