import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComp from "@/components/HeaderComp";
import Footer from "@/components/Footer";
import RecoilProvider from "@/context/recoilProvider";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <RecoilProvider>
            <HeaderComp />
            {children}
            <Footer />
          </RecoilProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
