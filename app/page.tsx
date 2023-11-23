import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import { getProducts } from "@/helpers/fetchingData";
import { filterProducts } from "@/helpers/filteredProducts";
//import Image from "next/image";

export default async function Home() {
  const products = await getProducts();
  const jewelery = filterProducts({
    products: products,
    category: "jewelery",
  });

  const womensClothing = filterProducts({
    products: products,
    category: "women's clothing",
  });

  const electronics = filterProducts({
    products: products,
    category: "electronics",
  });
  const mensClothing = filterProducts({
    products: products,
    category: "men's clothing",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      {/* <ProductCard /> */}
      <Testimonials product={womensClothing} category={"Women's clothing"} />
      <Testimonials product={mensClothing} category={"Men's clothing"} />
      <Testimonials product={electronics} category={"Electronics"} />
      <Testimonials product={jewelery} category={"jewelery"} />
    </main>
  );
}
