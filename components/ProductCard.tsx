import ProductInterface, { getProducts } from "@/helpers/fetchingData";
import React from "react";

const ProductCard = async () => {
  const products = await getProducts();
  console.log(products);
  return (
    <div className=" container px-20 py-10">
      <div className="text-xl md:text-2xl">Sample Products</div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {products?.map((product) => {
          const {
            id,
            title,
            description,
            category,
            rating,
            image,
            // thumbnail,
          } = product;
          return (
            <div key={id} className="h-80 overflow-hidden">
              <div className="card card-normal bg-base-100 shadow-xl">
                <figure>
                  <img src={image} alt={title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {category}
                    <div className="badge badge-secondary">{rating.rate}</div>
                  </h2>
                  <p>{title}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Details</div>
                    <div className="badge badge-outline">Buy Now</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductCard;
