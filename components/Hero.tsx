"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Collections from "./Collections";
import { Autoplay, EffectFade } from "swiper/modules";
import { urlFor } from "@/libs/sanity";

type PropsType = {
  heroData: any;
};

function Hero({ heroData }: PropsType) {
  return (
    <div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        loop={true}
        effect="fade"
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {heroData.map((item: any) => {
          const { bannerText, collections, _d, bannerImage } = item;
          const image = urlFor(bannerImage.asset._ref).url();

          return (
            <SwiperSlide className="mySwiper" key={_d}>
              <section className="w-full h-fit pt-0 relative overflow-visible">
                <div
                  style={{ backgroundImage: `url(${image})` }}
                  className={`flex justify-center md:justify-start flex-col items-center  h-[700px]  bg-no-repeat bg-cover bg-center `}
                >
                  <div className="flex justify-center items-center flex-col">
                    <p className="text-red-400 text-3xl md:text-9xl py-10 ">
                      {bannerText}
                    </p>
                    {/* <img
                      src={image}
                      alt="image1"
                      className="w-[200px] h-[200px] object-contain"
                    /> */}
                    <button className="p-4 m-4 rounded-full items-center text-white bg-black px-8">
                      <Link href="/shop">Shop Now</Link>
                    </button>
                  </div>
                </div>

                <div className="flex md:flex-row flex-wrap justify-center items-center gap-5 -mt-52 px-3">
                  {collections.map((collection: any) => (
                    <Collections key={collection} collection={collection} />
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
