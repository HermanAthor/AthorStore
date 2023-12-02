"use client";
import ProductInterface from "@/helpers/fetchingData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import Link from "next/link";

type PropsType = {
  category: string;
  product: ProductInterface[];
};

function SampleProducts({ category, product }: PropsType) {
  return (
    <div className="px-5">
      <div className="text-xl md:text-3xl font-bold py-6">{category}</div>
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
                  <h2 className="card-title">{item.title}</h2>
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
  );
}

export default SampleProducts;

// breakpoints={{
//           350: {
//             slidesPerView: 2,
//             spaceBetween: 2,
//           },
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 2,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 3,
//           },
//           1024: {
//             slidesPerView: 6,
//             spaceBetween: 5,
//           },
//         }}

{
  /* <Swiper
        navigation={true}
        //modules={[Navigation, Pagination, Scrollbar, A11y]}
      >
        {product.map((item) => {
          return (
            <SwiperSlide className="mySwiper" key={item.id}>
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
      </Swiper> */
}

// function SampleProducts({ category, product }: PropsType) {
//   return (
//     <div>
//       <div>{category}</div>
//       <Swiper navigation={true} modules={[Navigation]}>
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

// export default SampleProducts;
