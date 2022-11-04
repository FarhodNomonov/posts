import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { nameLang, titleLang, descriptionLang } from "../../../utils/func";
import { getLanguage } from "../../../redux/selector";
import { getRequest } from "../../../utils/request";

const Container2 = () => {
  const { language } = getLanguage();
  const categories = useSelector(({ categories }) => categories);
  const [getNews, setGetNews] = React.useState([]);

  React.useEffect(() => {
    getRequest("mix/news/all")
      .then((data) => {
        setGetNews(data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="main-div grid grid-cols-3 py-[100px]  gap-[20px]">
      {/* left */}
      <div className="col-span-2 space-y-12">
        <h1>{language["tours"]}</h1>
        {getNews?.map((item) => {
          const src = `https://tours.techdatasoft.uz/cover/${item?.cover}`;
          return (
            <div key={item?.id} className="flex flex-col gap-2">
              <div className="w-full aspect-video relative">
                <Image
                  src={src}
                  layout="fill"
                  objectFit="cover"
                  alt="img"
                  unoptimized
                />
                <div className="bg-orange text-white absolute top-8 left-8 py-2 px-8 flex flex-col items-center rounded-full">
                  <span className="text-[24px] font-bold">{item?.id}</span>
                  <span>{new Date(item?.updated_at).toLocaleDateString()}</span>
                </div>
              </div>
              <div>
                <h3 className="text-black font-semibold">
                  {titleLang(item, language)}
                </h3>
                <p className="leading-[2.14] mt-6 mb-8">
                  {descriptionLang(item, language)}
                </p>
                <Link href={`news/${item?.id}`}>
                  <a className="text-[14px] font-[700] text-orange hover:text-darkPurple transition-all">
                    READ MORE
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* right */}
      <div className="col-span-1 flex flex-col items-start ml-[50px]">
        <h3 className="text-black font-semibold text-[18px] mb-[40px]">
          {language["region"]}
        </h3>
        {categories?.map((res) => (
          <button
            key={res?.id}
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
