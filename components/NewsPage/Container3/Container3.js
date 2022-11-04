import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { nameLang, titleLang, descriptionLang } from "../../../utils/func";
import { getLanguage } from "../../../redux/selector";
import { getRequest } from "../../../utils/request";

const Container2 = () => {
  const router = useRouter();
  const { id } = router.query;
  const { language } = getLanguage();
  const categories = useSelector(({ categories }) => categories);
  const [getNews, setGetNews] = React.useState([]);
  const src = `https://tours.techdatasoft.uz/cover/${getNews?.cover}`;

  React.useEffect(() => {
    getRequest(`mix/news/${id}`)
      .then((data) => {
        setGetNews(data);
        console.log(data, "data");
      })
      .catch((err) => {});
  }, [id]);

  return (
    <div className="main-div grid grid-cols-3 py-[100px]  gap-[20px]">
      {/* left */}
      <div className="col-span-2 space-y-12">
        <h1>{language["tours"]}</h1>
        <div className="flex flex-col gap-2">
          <div className="w-full aspect-video relative">
            <Image
              src={src}
              layout="fill"
              objectFit="cover"
              alt="img"
              unoptimized
            />
            <div className="bg-orange text-white absolute top-8 left-8 py-2 px-8 flex flex-col getNewss-center rounded-full">
              <span className="text-[24px] font-bold">{getNews?.id}</span>
              <span>{new Date(getNews?.updated_at).toLocaleDateString()}</span>
            </div>
          </div>
          <div>
            <h3 className="text-black font-semibold">
              {titleLang(getNews, language)}
            </h3>
            <p className="leading-[2.14] mt-6 mb-8">
              {descriptionLang(getNews, language)}
            </p>
            <Link href={`news/${getNews?.id}`}>
              <a className="text-[14px] font-[700] text-orange hover:text-darkPurple transition-all">
                READ MORE
              </a>
            </Link>
          </div>
        </div>
      </div>
      {console.log(categories, "categories")}
      {/* right */}
      <div className="col-span-1 flex flex-col getNewss-start ml-[50px]">
        <h3 className="text-black font-semibold text-[18px] mb-[40px]">
          {language["region"]}
        </h3>
        {categories?.map((res) => (
          <button
            key={res?.id}
            type="button"
            className="text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]"
          >
            <Link href={`/about-tours/${res?.id}`} className="border">
              <a className="text-black hover:text-red-500 transition-all cursor-pointer">
                <p>{nameLang(res, language)}</p>
              </a>
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Container2;
