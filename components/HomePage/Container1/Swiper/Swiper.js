import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { _URL } from "../../../../utils/request";
import { getLanguage } from "../../../../redux/selector";
import { nameLang, titleLang } from "../../../../utils/func";

export default function SwiperSection() {
  const { language } = getLanguage();
  const categories = useSelector(({ categories }) => categories);

  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        speed={500}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper1"
      >
        {categories?.map((item) => {
          const src = `https://tours.techdatasoft.uz/cover/${item?.cover}`;
          return (
            <SwiperSlide className="relative">
              {({ isActive }) => {
                return (
                  <>
                    <div className="absolute z-[1] inset-0 bg-lighterPurple/50">
                      <motion.div
                        initial={{ rotateX: 0 }}
                        animate={{
                          rotateX: isActive ? 0 : "90deg",
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{
                          delay: 0.5,
                          type: "spring",
                          stiffness: 300,
                          duration: 1,
                        }}
                        className="flex justify-center items-center flex-col text-white h-full"
                      >
                        <h1 className="text-white text-[50px] xs:text-[80px] sm:text-[112px] mb-[30px] font-[900] leading-[1.2]">
                          {titleLang(item, language)}
                        </h1>
                        <h1 className="text-white font-beyond text-[40px] xs:text-[70px] sm:text-[100px] leading-[1.2] -mt-[15px] xs:-mt-[25px] sm:-mt-[34px]">
                          {nameLang(item, language)}
                        </h1>
                        <Link href={`tourInfo/${item?.id}`}>
                          <button className="text-[14px] font-[700] text-white leading-[53px] px-[46px] relative overflow-hidden mt-[50px] sm:mt-[80px] rounded-[100vmax] button1">
                            <div className="btn1-bg absolute inset-0 -z-[1]"></div>
                            {language["explore"]}
                          </button>
                        </Link>
                      </motion.div>
                    </div>
                    <Image
                      unoptimized
                      layout="fill"
                      src={src}
                      alt="Picture of the author"
                    />
                  </>
                );
              }}
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="prev hidden sm:block group hover:border-orange absolute z-10 rounded-[9px] overflow-hidden top-1/2 left-[50px] -translate-y-1/2 border-2 py-[4px] px-[2px] cursor-pointer">
        <MdKeyboardArrowLeft className="text-white text-[20px] group-hover:text-orange" />
      </div>
      <div className="next hidden sm:block group hover:border-orange absolute z-10 top-1/2 right-[50px] -translate-y-1/2 border-2 border-white py-[4px] px-[2px] rounded-[9px] cursor-pointer">
        <MdKeyboardArrowRight className="text-white text-[20px] group-hover:text-orange" />
      </div>
    </>
  );
}
