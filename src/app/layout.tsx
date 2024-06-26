import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { Metrika } from "./components/Metrika";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chpoker",
  description: "Прокси докер",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Chpoker</title>
        <meta name="description" content="Докер" />
        <meta name="description" content="Россия" />
        <meta name="description" content="IT" />
        <meta name="description" content="Контейнеры" />
        <meta name="description" content="Разработка" />
        <meta name="description" content="Технологии" />
        <meta name="description" content="Компания" />
        <meta name="description" content="Программирование" />
        <meta name="description" content="Инновации" />
        <meta name="description" content="Docker" />
        <meta name="description" content="Russia" />
        <meta name="description" content="Tech" />
        <meta name="description" content="Containers" />
        <meta name="description" content="Development" />
        <meta name="description" content="Technology" />
        <meta name="description" content="Company" />
        <meta name="description" content="Programming" />
        <meta name="description" content="Innovation" />
        <meta name="description" content="Софтвер" />
        <meta name="description" content="Системы" />
        <meta name="description" content="Серверы" />
      </Head>
      <body className={inter.className}>
        {children}
        <Suspense>
          <Metrika />
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
