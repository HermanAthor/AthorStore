import ProductCard from "@/components/shared-ui/ProductCard";
import { client, urlFor } from "@/libs/sanity";
import React from "react";

// function that query data from sanity studio
const getData = async () => {
  const query = "*[_type == 'product']";
  const data = await client.fetch(query);
  return data;
};

const SanityProductsPage = async () => {
  // Making use of the function that queries data form sanity studio
  const data = await getData();
  return (
    <div>
      <p>Hello there</p>
      {data.map((product: any) => {
        const { name, price, ratingRate, ratingCount, images } = product;
        const image = images.map((img: any) => img);
        const imageUrl = urlFor(image[0].asset._ref).url();
        return (
          <div>
            <ProductCard product={product} category={"Just Products"} />
          </div>
        );
      })}
    </div>
  );
};

export default SanityProductsPage;
