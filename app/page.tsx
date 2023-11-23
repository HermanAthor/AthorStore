import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
//import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <ProductCard />
      <Testimonials />
    </main>
  );
}
