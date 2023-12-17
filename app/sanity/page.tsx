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
  console.log(data);
  return (
    <div>
      <ProductCard products={data} category={"Just products"} />
    </div>
  );
};

export default SanityProductsPage;
