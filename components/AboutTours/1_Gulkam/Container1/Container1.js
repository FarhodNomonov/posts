import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { nameLang } from "../../../../utils/func";
import { getLanguage } from "../../../../redux/selector";

const Container1 = () => {
  const [tours] = useSelector(({ tours }) => tours);
  const { language } = getLanguage();
  return (
    <div className="">
      <div className="relative h-[55vh] flex justify-center items-center">
        <Image
          src="/images/about-bg.webp"
          layout="fill"
          objectFit="cover"
          alt="img"
        />
        <h1 className="absolute z-10 text-white text-[50px] xs:text-[80px] xs:mt-20 ml:text-[32px] ml:text-center">
          {nameLang(tours, language)}
        </h1>
      </div>
    </div>
  );
};

export default Container1;
