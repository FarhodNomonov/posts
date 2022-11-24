import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { nameLang, descriptionLang } from "../../../../utils/func";
import { getLanguage } from "../../../../redux/selector";
import ImagesVisa from "../../../../public/images/Visa_Inc._logo.svg.png";

const Container2 = () => {
  const router = useRouter();
  const { id } = router.query;
  const toursData = useSelector(({ tours }) => tours);
  const [tours] = toursData.filter((item) => item?.id === Number(id));
  const categories = useSelector(({ categories }) => categories);

  const { language } = getLanguage();
  const src = `https://tours.techdatasoft.uz/cover/${tours?.cover}`;

  return (
    <div className="main-div grid grid-cols-2 py-[100px]  gap-[20px]">
      {/* left */}
      <div className="col-span-2 space-y-12 ">
        <h1 className="ml:text-[32px]">{nameLang(tours, language)}</h1>

        <div className="flex flex-col gap-2 ml:w-full">
          <div className="w-full aspect-video relative">
            <Image
              src={src}
              layout="fill"
              objectFit="cover"
              alt="img"
              unoptimized
            />
            <div className="bg-orange text-white absolute top-8 left-8 py-2 px-8 flex flex-col items-center rounded-full ml:top-2 ml:left-2 ml:w-[100px]">
              {/* <span className='text-[24px] font-bold'>01</span> */}
              <span className="text-[24px] font-bold ml:text-[10px]">
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
            <div className="flex gap-5">
              <form
                method="POST"
                action="https://checkout.paycom.uz"
                target="_blank"
              >
                <input
                  type="hidden"
                  name="merchant"
                  defaultValue="62ee516e39c675be34e69a2d"
                />
                <input
                  type="hidden"
                  name="amount"
                  defaultValue={tours?.price * 11200 + "00"}
                />
                <button
                  type="submit"
                  className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... font-[700] leading-[53px] px-[30px]"
                  style={{
                    cursor: "pointer",
                    border: "1px solid #ebebeb",
                    borderRadius: "6px",
                    background: "linear-gradient(to top, #f1f2f2, white)",
                    width: "200px",
                    height: "42px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p className="p-2 text-black"> ${tours?.price} </p>

                  <img
                    style={{ width: "160px", height: "20px" }}
                    src="http://cdn.payme.uz/buttons/button_big_RU.svg"
                  />
                </button>
              </form>
              <button
                type="submit"
                className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... font-[700] leading-[53px] px-[30px]"
                style={{
                  cursor: "pointer",
                  border: "1px solid #ebebeb",
                  borderRadius: "6px",
                  background: "linear-gradient(to top, #f1f2f2, white)",
                  width: "200px",
                  height: "42px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p className="p-2 text-black"> ${tours?.price} </p>

                <img
                  style={{ width: "160px", height: "20px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      {/* <div className="col-span-1 flex flex-col items-start ml-[50px]">
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
      </div> */}
      <div className="about_pay">
        <button className="text-[14px] font-[700] text-white leading-[53px] px-[46px] relative overflow-hidden mt-[50px] sm:mt-[80px] rounded-[100vmax] button1">
          <div className="btn1-bg absolute inset-0 -z-[1]"></div>
        </button>
      </div>
    </div>
  );
};

export default Container2;
