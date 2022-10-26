import React from "react";
import Image from "next/image";
import { getLanguage } from "../../../redux/selector";

const Container1 = () => {
  const { language } = getLanguage();
  return (
    <div className="">
      <div className="relative h-[55vh] flex justify-center items-center">
        <Image
          src="/images/news-bg.jpg"
          layout="fill"
          objectFit="cover"
          alt="img"
        />
        <h1 className="absolute z-10 text-white text-[50px] xs:text-[80px] xs:mt-20">
          {language["news"]}
        </h1>
      </div>
    </div>
  );
};

export default Container1;
