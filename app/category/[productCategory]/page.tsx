"use client";
import ProductCard from "@/components/ProductCard";
import ProductInterface, { getProducts } from "@/helpers/fetchingData";
import { filterProducts } from "@/helpers/filteredProducts";
import React, { FC, useEffect, useState } from "react";

interface PageProps {
  params: { productCategory: string };
}

const ProductCategory: FC<PageProps> = ({ params }) => {
  const [productCategories, setProductCategories] = useState<
    ProductInterface[]
  >([]);
  const { productCategory } = params;
  console.log(productCategory);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const decodedCategory = decodeURIComponent(productCategory);
        console.log("Encoded Category", decodedCategory);

        const products = await getProducts();
        const filteredProducts = filterProducts({
          products: products,
          category: decodedCategory,
        });

        setProductCategories(filteredProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [productCategory]);

  return (
    <div>
      <ProductCard products={productCategories} />
    </div>
  );
};

export default ProductCategory;
