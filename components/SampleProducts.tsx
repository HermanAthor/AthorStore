"use client";
import ProductInterface from "@/helpers/fetchingData";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
//import "./swipperstyles.css";

import React from "react";

type PropsType = {
  category: string;
  product: ProductInterface[];
};

function SampleProducts({ category, product }: PropsType) {
  return (
    <div>
      <div>{category}</div>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          350: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
        }}
      >
        {product.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="card w-96 h-80 bg-base-100 shadow-xl image-full">
                <figure>
                  <img src={item.image} alt={item.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p></p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* <div className="carousel carousel-center max-w-screen-xl p-4 space-x-4 bg-white dark:bg-black rounded-box">
        {product.map((item) => (
          <div className="carousel-item">
            <div className="card w-96 h-80 bg-base-100 shadow-xl image-full">
              <figure>
                <img src={item.image} alt={item.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p></p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default SampleProducts;
