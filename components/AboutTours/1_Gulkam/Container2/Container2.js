import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { nameLang, descriptionLang } from "../../../../utils/func";
import { getLanguage } from "../../../../redux/selector";

const Container2 = () => {
  const [tours] = useSelector(({ tours }) => tours);
  const categories = useSelector(({ categories }) => categories);

  const { language } = getLanguage();
  const src = `https://tours.techdatasoft.uz/cover/${tours?.cover}`;

  return (
    <div className="main-div grid grid-cols-3 py-[100px]  gap-[20px]">
      {/* left */}
      <div className="col-span-2 space-y-12">
        <h1>{nameLang(tours, language)}</h1>

        <div className="flex flex-col gap-2">
          <div className="w-full aspect-video relative">
            <Image
              src={src}
              layout="fill"
              objectFit="cover"
              alt="img"
              unoptimized
            />
            <div className="bg-orange text-white absolute top-8 left-8 py-2 px-8 flex flex-col items-center rounded-full">
              {/* <span className='text-[24px] font-bold'>01</span> */}
              <span className="text-[24px] font-bold">
                {new Date(tours?.created_at)?.toLocaleDateString()}
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-black font-semibold">
              {nameLang(tours, language)}
            </h3>
            <p className="leading-[2.14] mt-6 mb-8">
              {descriptionLang(tours, language)}
            </p>
            {/* <a className='text-[14px] font-[700] text-orange hover:text-darkPurple transition-all' href="#">READ MORE</a> */}
          </div>
        </div>
      </div>

      {/* right */}
      <div className="col-span-1 flex flex-col items-start ml-[50px]">
        <h3 className="text-black font-semibold text-[18px] mb-[40px]">
          {language["another_tours"]}
        </h3>

        {categories?.map((res) => (
          <Link href={`/about-tours/${res?.id}`}>
            <a>
              <button
                type="button"
                className="text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]"
              >
                {nameLang(res, language)}
              </button>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Container2;
