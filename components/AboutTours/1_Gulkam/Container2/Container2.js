import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import { nameLang, descriptionLang } from "../../../../utils/func";
import { getLanguage } from "../../../../redux/selector";
import { AccordionTop } from "../../../../public/icons";

const Container2 = () => {
  const router = useRouter();
  const { id } = router.query;
  const toursData = useSelector(({ tours }) => tours);
  const [tours] = toursData.filter((item) => item?.id === Number(id));
  // const categories = useSelector(({ categories }) => categories);
  const { language } = getLanguage();
  const src = `https://tours.techdatasoft.uz/cover/${tours?.cover}`;
  const [openAccordion, setOpenAccordion] = React.useState(null);

  const accordion_data = [
    {
      id: 1,
      title: " А вы можете меня встретить с вокзала/аэропорта?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus facere corrupti. Dolorum recusandae quo commodi velit eos perferendis odit ducimus incidunt, quia voluptas provident dolores illo tenetur sunt, quidem iure corporis maiores? Iusto incidunt dolorem et ab, tempore molestiae aliquam adipisci. Ducimus, delectus cumque fugit omnis perferendis asperiores rem! Voluptates",
      icon: <AccordionTop />,
    },
    {
      id: 2,
      title: " А вы можете меня встретить с вокзала/аэропорта?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus facere corrupti. Dolorum recusandae quo commodi velit eos perferendis odit ducimus incidunt, quia voluptas provident dolores illo tenetur sunt, quidem iure corporis maiores? Iusto incidunt dolorem et ab, tempore molestiae aliquam adipisci. Ducimus, delectus cumque fugit omnis perferendis asperiores rem! Voluptates",
      icon: <AccordionTop />,
    },
    {
      id: 3,
      title: " А вы можете меня встретить с вокзала/аэропорта?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus facere corrupti. Dolorum recusandae quo commodi velit eos perferendis odit ducimus incidunt, quia voluptas provident dolores illo tenetur sunt, quidem iure corporis maiores? Iusto incidunt dolorem et ab, tempore molestiae aliquam adipisci. Ducimus, delectus cumque fugit omnis perferendis asperiores rem! Voluptates",
      icon: <AccordionTop />,
    },
    {
      id: 4,
      title: " А вы можете меня встретить с вокзала/аэропорта?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus facere corrupti. Dolorum recusandae quo commodi velit eos perferendis odit ducimus incidunt, quia voluptas provident dolores illo tenetur sunt, quidem iure corporis maiores? Iusto incidunt dolorem et ab, tempore molestiae aliquam adipisci. Ducimus, delectus cumque fugit omnis perferendis asperiores rem! Voluptates",
      icon: <AccordionTop />,
    },
    {
      id: 5,
      title: " А вы можете меня встретить с вокзала/аэропорта?",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus facere corrupti. Dolorum recusandae quo commodi velit eos perferendis odit ducimus incidunt, quia voluptas provident dolores illo tenetur sunt, quidem iure corporis maiores? Iusto incidunt dolorem et ab, tempore molestiae aliquam adipisci. Ducimus, delectus cumque fugit omnis perferendis asperiores rem! Voluptates",
      icon: <AccordionTop />,
    },
  ];
  const close = (index) => {
    if (openAccordion === index) {
      return setOpenAccordion(null);
    }
    setOpenAccordion(index);
    console.log(openAccordion, index);
  };

  return (
    <div className="main-div grid grid-cols-2 ml:grid-cols-1 py-[100px]  gap-[20px]">
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
            <div className="accordion rounded border-inherit select-none">
              {accordion_data?.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="mx-auto ">
                    <div
                      onClick={() => close(index)}
                      className="mt-1  cursor-pointer  py-2 px-[10px] text-white flex justify-between items-center rounded border-inherit border-solid border transition-all delay-500"
                    >
                      <h3 className="text-base text-gray-600 text-left">
                        {item?.title}
                      </h3>
                      <span className="title_scg ">{item?.icon}</span>
                    </div>
                    {openAccordion === index ? (
                      <p className="text-[#2B2B2B] px-5 py-3 ">
                        {item?.description}
                      </p>
                    ) : null}
                  </div>
                </React.Fragment>
              ))}
            </div>
            <p className="leading-[2.14] mt-6 mb-8">
              {descriptionLang(tours, language)}
            </p>
            <div className="prices">
              <h3 className="text-orange font-semibold mb-2">Prices</h3>
              <div className="price_card flex bg-slate-100 p-2 rounded text-black justify-between mb-3">
                <p>1 {language["person"]}</p>
                <a>${tours?.price}</a>
              </div>
              <div className="price_card flex bg-slate-100 p-2 rounded text-black justify-between mb-3">
                <p>2 {language["person"]}</p>
                <a>${(tours?.price * 60) / 100}</a>
              </div>
              <div className="price_card flex bg-slate-100 p-2 rounded text-black justify-between mb-3">
                <p>3 {language["person"]}</p>
                <a>${(tours?.price * 70) / 100}</a>
              </div>
            </div>
            <div className="flex gap-5">
              <form
                method="POST"
                action="https://checkout.paycom.uz"
                target="_blank"
              >
                <input
                  type="hidden"
                  name="merchant"
                  defaultValue="63c66eb72ef2d4e9e90c1f77"
                />
                <input
                  type="hidden"
                  name="amount"
                  defaultValue={tours?.price * 11200 + "00"}
                />
                <input
                  type="hidden"
                  name="account[tour_name]"
                  defaultValue="DUPPI TRAVEL"
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
                  <img
                    style={{ width: "160px", height: "20px" }}
                    src="http://cdn.payme.uz/buttons/button_big_RU.svg"
                  />
                  <p className="p-2 text-black"> ${tours?.price} </p>
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
      {/* <div className="col-span-1 flex flex-col ml:ml-[10px] items-start ml-[50px]">
        <h3 className="text-black font-semibold text-[18px] mb-[40px]">
          {language["another_tours"]}
        </h3>

        {categories?.map((res) => {
          return (
            <Link href={`/tourInfo/${res?.id}`} key={res?.id}>
              <a>
                <button
                  type="button"
                  className="text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]"
                >
                  {nameLang(res, language)}
                </button>
              </a>
            </Link>
          );
        })}
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
