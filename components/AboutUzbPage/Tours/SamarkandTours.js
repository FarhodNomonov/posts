import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import parse from "html-react-parser";
import { StarIcon } from "@heroicons/react/outline";
import Footer from "../../Footer";
import { nameLang, titleLang, descriptionLang } from "../../../utils/func";
import { getLanguage } from "../../../redux/selector";
import { getRequest } from "../../../utils/request";

const SamarkandTours = () => {
  const router = useRouter();
  const { tours } = router.query;
  const { language } = getLanguage();
  const [getTours, setGetTours] = React.useState([]);
  const src = `https://tours.techdatasoft.uz/cover/${getTours?.tour?.cover}`;

  React.useEffect(() => {
    getRequest(`tour/${tours}`)
      .then((data) => {
        setGetTours(data);
        console.log(data, "data");
      })
      .catch((err) => {});
  }, [tours]);

  const Retings = (res) => {
    let copyItems = [];
    for (let i = 0; i < res; i++) {
      copyItems.push(i);
    }
    return copyItems;
  };

  return (
    <>
      <div className="absolute w-full top-0 h-[55vh] flex justify-center items-center">
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          alt="img"
          unoptimized
        />
        <div className="absolute z-[1] inset-0 bg-lightPurple text-center pt-20 grid content-center text-white">
          <h1 className="text-white font-beyond text-[40px] leading-[1.5]">
            {titleLang(getTours?.tour, language)}
          </h1>
          <h1 className="text-white font-beyond text-[40px] xs:text-[70px] sm:text-[100px] leading-[1.5] -mt-12">
            {nameLang(getTours?.tour, language)}
          </h1>
        </div>
      </div>

      <div className="main-div grid grid-cols-4 gap-[30px] py-[50px] mt-[40vh]">
        <div className="col-span-3 space-y-4">
          <h1 className="text-orange">
            {titleLang(getTours?.tour, language)}{" "}
            {nameLang(getTours?.tour, language)}
          </h1>
          {/* <h3 className="text-black">
            Group Tours and Private Samarkand Trips
          </h3> */}
          <p>{parse(descriptionLang(getTours?.tour, language))}</p>

          <div className="py-[50px] flex flex-col gap-12">
            {getTours?.data?.map((resp) => {
              const src = `https://tours.techdatasoft.uz/cover/${resp?.cover}`;
              return (
                <div className="flex gap-8 items-start">
                  <div className="w-[300px] shrink-0 aspect-[8/9] relative shadow-md">
                    <Image
                      src={src}
                      layout="fill"
                      objectFit="cover"
                      alt="img"
                      unoptimized
                    />
                    <div className="absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4 w-[80%]">
                      {nameLang(resp, language)}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <div className="flex items-end gap-3">
                        <h1 className="text-orange leading-[1]">
                          ${resp?.price}
                        </h1>
                        <span>starting</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div>
                          <p className="text-[12px] text-black font-semibold">
                            VERY GOOD
                          </p>
                          <p className="text-[12px]">{resp?.watch} reviews</p>
                        </div>
                        <div className="w-[50px] h-[50px] bg-orange rounded-full flex justify-center items-center text-white text-[20px] font-bold">
                          8.1
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-[10px]">
                      {Retings(resp?.gradle).map((i) => {
                        return <StarIcon key={i} className="w-4 text-orange" />;
                      })}
                    </div>
                    <p className="py-4 leading-[2]">
                      {descriptionLang(resp, language)}
                    </p>
                    <div className="flex gap-4 mb-5">
                      <div className="w-7 h-7 relative">
                        {resp?.turn === 1 && (
                          <Image
                            src="/images/extraIcons/post.webp"
                            layout="fill"
                            objectFit="contain"
                            alt="img"
                          />
                        )}
                      </div>
                      <div className="w-7 h-7 relative">
                        {resp?.watch === 1 && (
                          <Image
                            src="/images/extraIcons/compass.webp"
                            layout="fill"
                            objectFit="contain"
                            alt="img"
                          />
                        )}
                      </div>
                      <div className="w-7 h-7 relative">
                        {resp?.great === 1 && (
                          <Image
                            src="/images/extraIcons/bicycle.webp"
                            layout="fill"
                            objectFit="contain"
                            alt="img"
                          />
                        )}
                      </div>
                      <div className="w-7 h-7 relative">
                        {resp?.boat === 1 && (
                          <Image
                            src="/images/extraIcons/boat.webp"
                            layout="fill"
                            objectFit="contain"
                            alt="img"
                          />
                        )}
                      </div>
                    </div>

                    <Link href={`/about-tours/${resp?.id}`}>
                      <a>
                        <button className="text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-start mt-auto rounded-[100vmax]">
                          {language["details"]}...
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border border-gray-300 p-4 rounded-md h-max">
          {getTours?.data?.map((res) => {
            return (
              <Link
                key={res?.id}
                href={`/about-tours/${res?.id}`}
                className="border"
              >
                <a className="text-black hover:text-red-500 transition-all cursor-pointer">
                  <p>{nameLang(res, language)}</p>
                </a>
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SamarkandTours;
