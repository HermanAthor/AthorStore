import Hero from "@/components/Hero";
import SampleProducts from "@/components/SampleProducts";
import Sponsers from "@/components/Sponsers";
import { getProducts } from "@/helpers/fetchingData";
import { filterProducts } from "@/helpers/filteredProducts";
import AllProducts from "@/components/AllProducts";
import { client } from "@/libs/sanity";
import { fetchHeroData } from "@/helpers/fetchHeroData";

export default async function Home() {
  const products = await getProducts();
  const heroData = await fetchHeroData();
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
      <Hero heroData={heroData} />
      <SampleProducts product={womensClothing} category={"Women's clothing"} />
      <SampleProducts product={mensClothing} category={"Men's clothing"} />
      <SampleProducts product={electronics} category={"Electronics"} />
      <SampleProducts product={jewelery} category={"jewelery"} />
      <Sponsers />
      <AllProducts productsText={"Sample Products"} />
    </main>
  );
}
