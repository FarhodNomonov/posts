import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { StarIcon } from "@heroicons/react/solid";
import { nameLang, titleLang, descriptionLang } from "../../../../utils/func";
import { getLanguage } from "../../../../redux/selector";

export default function SwiperHotelList() {
  const tours = useSelector(({ tours }) => tours);
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
        {tours?.map((res) => {
          const src = `https://tours.techdatasoft.uz/cover/${res?.cover}`;
          return (
            <SwiperSlide>
              <div className="relative w-full aspect-square cursor-grab">
                <Image
                  src={src}
                  layout="fill"
                  objectFit="cover"
                  alt="img"
                  unoptimized
                />
              </div>
              <div className="max-h-60 overflow-auto ...">
                <div className=" text-black text-[16px] font-semibold tracking-wider w-[80%] font-sans">
                  {nameLang(res, language)}
                </div>
                <div className="flex">
                  {Retings(res?.gradle).map((i) => {
                    return <StarIcon key={i} className="w-4 text-orange" />;
                  })}
                </div>
                <p className="py-4 leading-[1.5]">
                  {descriptionLang(res, language)}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="md:flex justify-center gap-8 hidden">
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
