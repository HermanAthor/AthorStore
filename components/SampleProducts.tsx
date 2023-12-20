"use client";
import ProductInterface from "@/helpers/fetchingData";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import Link from "next/link";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type PropsType = {
  category: string;
  product: ProductInterface[];
};

function SampleProducts({ category, product }: PropsType) {
  return (
    <section>
      <div className="px-5">
        <div className="text-xl md:text-3xl font-bold py-6">
          {category || <Skeleton />}
        </div>
        <Swiper
          breakpoints={{
            350: {
              slidesPerView: 1,
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
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
          navigation={true}
          loop={true}
          slidesPerView={3}
          modules={[Navigation, Pagination]}
          pagination={{ type: "fraction" }}
          className="mySwiper"
        >
          {product.map((item) => {
            return (
              <SwiperSlide className="mySwiper" key={item.id}>
                <div className="card w-full h-80 bg-base-100 shadow-xl image-full">
                  <figure>
                    <img src={item.image} alt={item.title} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.title || <Skeleton />}</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">
                        <Link href={`/category/${item.category}`}>Buy Now</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default SampleProducts;
