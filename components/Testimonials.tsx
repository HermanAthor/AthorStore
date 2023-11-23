import ProductInterface from "@/helpers/fetchingData";
import React from "react";

type PropsType = {
  category: string;
  product: ProductInterface[];
};

function Testimonials({ category, product }: PropsType) {
  return (
    <div>
      <div>{category}</div>
      <div className="carousel carousel-center max-w-screen-xl p-4 space-x-4 bg-white rounded-box">
        {product.map((item) => (
          <div className="carousel-item">
            <div className="card w-96 h-80 bg-base-100 shadow-xl image-full">
              <figure>
                <img src={item.image} alt={item.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
