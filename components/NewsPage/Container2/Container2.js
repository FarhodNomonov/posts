import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { nameLang, descriptionLang } from "../../../utils/func";
import { getLanguage } from "../../../redux/selector";

const Container2 = () => {
  const { language } = getLanguage();
  const categories = useSelector(({ categories }) => categories);
  return (
    <div className="main-div grid grid-cols-3 py-[100px]  gap-[20px]">
      {/* left */}
      <div className="col-span-2 space-y-12">
        <h1>{language["tours"]}</h1>
        {[1, 2, 3].map((item) => (
          <div className="flex flex-col gap-2">
            <div className="w-full aspect-video relative">
              <Image
                src="https://preview.colorlib.com/theme/travelix/images/xblog_1.jpg.pagespeed.ic.dvdmQ6iHwJ.webp"
                layout="fill"
                objectFit="cover"
                alt="img"
              />
              <div className="bg-orange text-white absolute top-8 left-8 py-2 px-8 flex flex-col items-center rounded-full">
                <span className="text-[24px] font-bold">01</span>
                <span>Dec, 2022</span>
              </div>
            </div>
            <div>
              <h3 className="text-black font-semibold">
                Try these new dream destinations
              </h3>
              <p className="leading-[2.14] mt-6 mb-8">
                Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean
                nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id
                lorem eu nisl pellentesque semper. Nullam tincidunt metus
                placerat, suscipit leo ut, tempus nulla. Fusce at eleifend
                tellus. Ut eleifend dui nunc, non fermentum qua.
              </p>
              <a
                className="text-[14px] font-[700] text-orange hover:text-darkPurple transition-all"
                href="#"
              >
                READ MORE
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* right */}
      <div className="col-span-1 flex flex-col items-start ml-[50px]">
        <h3 className="text-black font-semibold text-[18px] mb-[40px]">
          {language["region"]}
        </h3>
        {categories?.map((res) => (
          <button
            type="button"
            className="text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]"
          >
            {nameLang(res, language)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Container2;
