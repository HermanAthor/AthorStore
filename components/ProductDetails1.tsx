import { Product, getShoppingProducts } from "@/helpers/fetchingData";
import React from "react";
import SimilarProductsCard from "./similar_products_components/SimilarProductsCard";
import { filterProducts2 } from "@/helpers/filteredProducts";
import DetailsImages from "./DetailsImages";
import SizeAndColorPreference from "./Custom-ui/SizeAndColorPreference";
import AddToCart from "./cartButtons/AddToCart";
import Stars from "./Custom-ui/Stars";

interface pageProps {
  product: Product;
}

const ProductDetails1 = async ({ product }: pageProps) => {
  const products: Product[] = await getShoppingProducts();
  const { id, price, description, title, category, images, rating, thumbnail } =
    product;
  const productCategories = filterProducts2({
    products: products,
    category: category,
  });
  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden dark:bg-gray-900 bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto h-4/5 flex flex-wrap">
            <div className="lg:w-1/2 w-full">
              <DetailsImages images={images} />
            </div>

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {category}
              </h2>
              <h1 className="text-gray-900 dark:text-gray-400 text-3xl title-font font-medium mb-1">
                {title}
              </h1>
              <Stars rating={rating} />
              <p className="leading-relaxed">{description}</p>
              {category == "fashion" && <SizeAndColorPreference />}
              <div className="flex justify-between items-center py-5">
                <span className="title-font font-medium text-2xl  text-gray-900 dark:text-gray-100">
                  ${price}
                </span>
                <div className="flex items-center">
                  <AddToCart item={product} />
                  {/* <BuyButton text={"Add to Cart"} product={product} /> */}
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SimilarProductsCard
          products={productCategories}
          category={"Similar Products"}
        />
      </section>
    </div>
  );
};

export default ProductDetails1;
