import ProductDetails1 from "@/components/ProductDetails1";
import SameProducts from "@/components/MoreProducts";
import ProductInterface, {
  Product,
  getProductsDetails,
  productDetails,
} from "@/helpers/fetchingData";
import React, { FC } from "react";

interface pageProps {
  params: { productId: number | string };
}
const ProductPage: FC<pageProps> = async ({ params }) => {
  const productId = params.productId;

  const getProductsDetails = async (): Promise<Product> => {
    const res = await fetch(`https://dummyjson.com/products/${productId}`);

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    try {
      const product = await res.json();
      return product;
    } catch (error) {
      throw new Error("Error parsing JSON from the response");
    }
  };

  const product = await getProductsDetails();
  const productCategory = product.category;

  return (
    <div>
      <ProductDetails1 product={product} />
      <SameProducts productCategory={productCategory} />
    </div>
  );
};

export default ProductPage;
