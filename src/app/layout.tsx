import type { Metadata } from "next";
import { Geist, Geist_Mono } from 'next/font/google';
import "./globals.css";
import ClientBody from "./ClientBody";
import { Header } from "../components/header"; // Fixed import path to match the actual file location

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SSEEAA海海 - 海外仓一件代发服务",
  description: "极致简单的海外仓一件代发服务，让你在复杂的跨境业务中获得对生意的掌控感。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <ClientBody className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
      </ClientBody>
    </html>
  );
}
