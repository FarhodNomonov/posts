import React, { useRef, useState } from "react";
import Link from "next/link";

import { useSelector } from "react-redux";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
// import { Autoplay, Navigation } from "swiper";
// import Image from "next/image";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { StarIcon } from "@heroicons/react/solid";
import { nameLang, descriptionLang } from "../../../../utils/func";
import { getLanguage } from "../../../../redux/selector/index";

export default function SwiperHotelList() {
  const tours = useSelector(({ tours }) => tours);
  const { language } = getLanguage();
  const [index, setIndex] = React.useState(3);

  // const Retings = (res) => {
  //   let copyItems = [];
  //   for (let i = 0; i < res; i++) {
  //     copyItems.push(i);
  //   }
  //   return copyItems;
  // };

  return (
    <div className="container_tours">
      <h1 className="text-[30px] text-black text-center mb-2 uppercase">
        {language["upcoming"]}{" "}
        <span className="text-orange uppercase">{language["tours"]}</span>{" "}
        {language["in"]} {new Date().getFullYear()}
      </h1>
      <div className="tours_status flex justify-end gap-[60px] mr-[40px] ml:hidden">
        {/* <p className="text-base text-black font-normal">Status</p> */}
        <p className="text-base text-black font-normal">Days</p>
        <p className="text-base text-black font-normal">Price</p>
      </div>
      <div className="tours_box mt-[20px]">
        {tours.map((res, i) => {
          return i <= index ? (
            <Link href={`/tourInfo/${res?.id}`}>
              <div className="tours_box_in w-full p-2 rounded-[54px] bg-[#350A4E] flex gap-[20px] justify-around items-center mb-[20px] ml:flex-col">
                <div className="w-[20%] bg-[#FA9E1B] rounded-l-[54px] flex justify-center items-center text-center ml:w-[80%] ml:rounded-[4px] ml:p-[7px]">
                  <h1 className="text-white text-[30px] font-black ml:text-[16px]">
                    {new Date(res?.updated_at).toDateString()}
                  </h1>
                </div>
                <div className="w-[45%] ml:w-[100%] ml:text-center">
                  <h3 className="text-white text-[20px]">
                    {nameLang(res, language)}
                  </h3>
                  <h3 className="text-white text-[14px] max-h-[70px] overflow-auto">
                    {descriptionLang(res, language)}
                  </h3>
                </div>
                {/* <div className="text-white">
                <h4>AVAILABLE</h4>
              </div> */}
                <div className="text-white ml:flex ml:gap-[10px]">
                  <h4 className="hidden ml:block">{language["days"]}:</h4>
                  <h4>{res?.days}</h4>
                </div>
                <div className="text-white text-center">
                  <h4>
                    US$ <br className="ml:hidden" /> {res?.price}
                  </h4>
                </div>
              </div>
            </Link>
          ) : null;
        })}
        {tours?.length <= index ? (
          null
        ) : <button
        onClick={() => setIndex((prev) => prev + 4)}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex justify-center m-auto"
      >
        {language["more"]}
      </button>}
      </div>
    </div>
  );
}
