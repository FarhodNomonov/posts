import React from "react";
import Image from "next/image";
import { getLanguage } from "../../../redux/selector";

const Container2 = () => {
  const { language } = getLanguage();

  return (
    <>
      <div className="bg-[#a5a5a5]/10 py-[80px]">
        <div className="main-div flex items-start flex-col lg:flex-row">
          <div className="relative w-full lg:w-[55%] aspect-square">
            <Image
              src="/images/lake.webp"
              layout="fill"
              objectFit="contain"
              alt="img"
            />
          </div>
          <div className="w-full lg:w-[45%]">
            <h2 className="text-slate-900 text-[24px] sm:text-[30px] font-bold">
              {language["wehavebesttour"]}
            </h2>
            <p className="text-[14px] mt-[20px] lg:mt-[60px] leading-[2] text-[#929191]">
              {language["ourcompany"]}
            </p>
            <p className="text-[14px] leading-[2] text-[#929191]">
              <span className="text-orange font-semibold">
                {language["akiftour"]}
              </span>{" "}
              {language["bringcompany"]}
            </p>
            {/* <button className="text-[14px] font-[700] text-white leading-[53px] px-[46px] relative overflow-hidden mt-[30px] lg:mt-[80px] rounded-[100vmax] button1"><div className="btn1-bg absolute inset-0 -z-[1]"></div>EXPLORE NOW ...</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Container2;
