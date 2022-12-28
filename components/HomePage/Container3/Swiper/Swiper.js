import React, { useRef, useState } from "react";
import Link from "next/link";

import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { StarIcon } from "@heroicons/react/solid";
import { nameLang } from "../../../../utils/func";
import { getLanguage } from "../../../../redux/selector/index";

export default function SwiperHotelList() {
  const categories = useSelector(({ categories }) => categories);
  const { language } = getLanguage();

  const Retings = (res) => {
    let copyItems = [];
    for (let i = 0; i < res; i++) {
      copyItems.push(i);
    }
    return copyItems;
  };

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView="auto"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        speed={300}
        breakpoints={{
          280: {
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
          520: {
            slidesPerView: 1.8,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
        }}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper2"
      >
        {categories?.map((res) => {
          const src = `https://tours.techdatasoft.uz/cover/${res?.cover}`;
          return (
            <SwiperSlide>
              <div className="relative w-full max-w-[400px] aspect-[4/5]">
                <Image
                  unoptimized
                  layout="fill"
                  src={src}
                  alt="Picture of the author"
                />
                <div className="absolute inset-0 bg-lightPurple px-4 lg:px-8 py-8 flex flex-col">
                  <div className="px-[25px] text-[13px] text-white rounded-[14px] bg-orange leading-[27px] w-max mx-auto">
                    {new Date(res?.updated_at).toDateString()}
                  </div>
                  <h1 className="text-[16px] lg:text-[16px] font-[700] text-white tracking-tighter text-center mt-auto">
                    {nameLang(res, language)}
                  </h1>
                  {/* <p className='text-white text-center font-[200] leading-3'>From: $1450</p> */}
                  <div className="flex justify-center mt-[10px]">
                    {Retings(res?.stars).map((i) => {
                      return <StarIcon key={i} className="w-4 text-orange" />;
                    })}
                  </div>
                  <div className="text-center">
                    <button className="text-[13px] font-[700] text-white leading-[50px] lg:leading-[40px] px-[35px] lg:px-[40px] relative z-[1] overflow-hidden mt-[20px] lg:mt-[40px] rounded-[100vmax] button1">
                      <div className="btn1-bg absolute inset-0"></div>
                      <Link href={`/tourInfo/${res?.id}`}>
                        <a span className="relative">
                          {language["read"]}
                        </a>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="md:flex justify-center gap-8 hidden mt-10">
        <div className="prev hidden md:block group border-orange bg-slate-500 rounded-[9px] overflow-hidden border-2 py-[12px] px-[2px] cursor-pointer">
          <MdKeyboardArrowLeft className="text-[20px] text-orange" />
        </div>
        <div className="next hidden md:block group border-orange bg-slate-500 border-2 py-[12px] px-[2px] rounded-[9px] cursor-pointer">
          <MdKeyboardArrowRight className="text-[20px] text-orange" />
        </div>
      </div>
    </>
  );
}
