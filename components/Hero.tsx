"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { collections } from "@/data/collections";
import Collections from "./Collections";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

type PropsType = {
  heroData: any;
};

function Hero({ heroData }: PropsType) {
  return (
    <div>
      <Swiper
        // breakpoints={{
        //   350: {
        //     slidesPerView: 1,
        //     spaceBetween: 2,
        //   },
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 2,
        //   },
        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 3,
        //   },
        //   1024: {
        //     slidesPerView: 3,
        //     spaceBetween: 5,
        //   },
        // }}
        modules={[Navigation]}
        navigation={true}
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        className="mySwiper"
      >
        {heroData.map((item: any) => {
          const text = item.bannerText;
          console.log(text);
          return (
            <SwiperSlide className="mySwiper" key={item.id}>
              <section className="w-full h-fit pt-0 relative overflow-visible">
                <div
                  className={`flex justify-center md:justify-start flex-col items-center  h-[700px]  bg-no-repeat bg-cover bg-center bg-[url("https://images.pexels.com/photos/1303097/pexels-photo-1303097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")]`}
                >
                  <div className="flex justify-center items-center flex-col">
                    <p className="text-red-400 text-3xl md:text-9xl py-10 ">
                      {text}
                    </p>
                    <button className="p-4 m-4 rounded-full items-center text-white bg-black px-8">
                      <Link href="/shop">Shop Now</Link>
                    </button>
                  </div>
                </div>

                <div className="flex md:flex-row flex-wrap justify-center items-center gap-5 -mt-52 px-3">
                  {collections.map((collection) => (
                    <Collections collection={collection} />
                  ))}
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Hero;
