import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComp from "@/components/HeaderComp";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kstore",
  description: "E-commerce site built using Nextjs 14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
