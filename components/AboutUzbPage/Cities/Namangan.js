import React from "react";
import Image from "next/image";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { getLanguage } from "../../../redux/selector";

const Namangan = () => {
  const { language } = getLanguage();
  return (
    <>
      <div className="absolute top-0 w-full h-[55vh] flex justify-center items-center">
        <Image
          src="https://www.advantour.com/img/uzbekistan/images/namangan.jpg"
          layout="fill"
          objectFit="cover"
          alt="img"
        />
        <h1 className="text-white font-beyond text-[40px] xs:text-[70px] sm:text-[100px] leading-[1.5] pt-12 absolute inset-0 flex justify-center items-center bg-lightPurple">
          {language["namangan"]}
        </h1>
      </div>
      z
      <div className="main-div grid grid-cols-3 py-[50px] mt-[40vh]">
        <div className="col-span-3 space-y-4">
          <h1 className="text-orange ml:text-[30px]">
            {language["namangan"]}, {language["uzbekistan"]}
          </h1>
          <h3 className="text-black ml:text-[20px]">{language["namangan_about"]}</h3>
          <p>{language["namangan_about_one"]}</p>
          <p>{language["namangan_about_two"]}</p>
          <p>{language["namangan_about_three"]}</p>
          <h3 className="text-black">{language["namangan_pct"]}</h3>

          <div className="grid grid-cols-3 gap-[30px]">
            <div className="relative aspect-video">
              <Image
                src="https://www.advantour.com/img/uzbekistan/images/namangan.jpg"
                layout="fill"
                objectFit="cover"
                alt="img"
              />
            </div>
            <div className="relative aspect-video">
              <Image
                src="/images/bahodir.jpg"
                layout="fill"
                objectFit="cover"
                alt="img"
              />
            </div>
            <div className="relative aspect-video">
              <Image
                src="/images/vokzal.png"
                layout="fill"
                objectFit="cover"
                alt="img"
              />
            </div>
          </div>
        </div>

        {/* <div className="border border-gray-300 p-4 rounded-md h-max">
          <Link href="/about-uzbekistan/fergana/tours" className="border">
            <a className="text-black hover:text-red-500 transition-all cursor-pointer">
              Namangan Tours
            </a>
          </Link>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Namangan;
