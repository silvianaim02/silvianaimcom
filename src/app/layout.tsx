import Header from "@/components/layout/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Silvia Naim",
  description: "Web developer and designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}><Header />{children}</body>
    </html>
  );
}
