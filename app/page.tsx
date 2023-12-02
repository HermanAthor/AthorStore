import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import SampleProducts from "@/components/SampleProducts";
import Sponsers from "@/components/Sponsers";
import TextProducts from "@/components/TextProducts";
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
    <main>
      <Hero />
      <SampleProducts product={womensClothing} category={"Women's clothing"} />
      <SampleProducts product={mensClothing} category={"Men's clothing"} />
      <SampleProducts product={electronics} category={"Electronics"} />
      <SampleProducts product={jewelery} category={"jewelery"} />
      <Sponsers />
      <TextProducts />
    </main>
  );
}
