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
import ShoppingCartProvider from "@/context/ShoppingCartProvider";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kstore",
  description: "E-commerce site built using Nextjs 14",
};
const NoSSR = dynamic(() => import("@/components/HeaderComp"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ShoppingCartProvider>
        <html lang="en">
          <body className={inter.className}>
            <RecoilProvider>
              <NoSSR />
              {/* <HeaderComp /> */}
              {children}
              <ToastContainer />
              <Footer />
            </RecoilProvider>
          </body>
        </html>
      </ShoppingCartProvider>
    </ClerkProvider>
  );
}
