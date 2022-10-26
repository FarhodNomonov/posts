import Image from "next/image";
import React from "react";
import { getLanguage } from "../../../redux/selector";

const Container1 = () => {
  const { language } = getLanguage();

  return (
    <div className="">
      <div className="relative h-[55vh]">
        <Image
          src="/images/about-bg.webp"
          layout="fill"
          objectFit="cover"
          alt="img"
        />
        <div className="absolute z-[1] inset-0 bg-lighterPurple/10 text-center pt-20 grid content-center text-white">
          <h1 className="text-white font-beyond text-[40px] xs:text-[70px] sm:text-[100px] leading-[1.5] -mt-12">
            {language["about"]}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Container1;
