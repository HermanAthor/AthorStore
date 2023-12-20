import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "react-toastify/dist/ReactToastify.css";
import HeaderComp from "@/components/HeaderComp";
import Footer from "@/components/Footer";
import RecoilProvider from "@/context/recoilProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";

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
            <ToastContainer />
            <Footer />
          </RecoilProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
