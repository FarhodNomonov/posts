import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import {
  CheckIcon,
  ChevronDownIcon,
  SelectorIcon,
  StarIcon,
} from "@heroicons/react/outline";
import { nameLang, descriptionLang } from "../../../utils/func";
import { getLanguage } from "../../../redux/selector";
import { getRequest } from "../../../utils/request";
import Loader from "../../Ui/Loader";

const sortingByRatingList = [5, 4, 3, 2, 1];

const Container2 = () => {
  const categories = useSelector(({ categories }) => categories);
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [sortingByRating, setSortingByRating] = useState("all");
  const [sortingByName, setSortingByName] = useState("");
  const [sortingByPrice, setSortingByPrice] = useState("");
  const { language } = getLanguage();
  const [loading, setLoading] = useState(false);
  const [getTours, setGetTours] = useState([]);

  React.useEffect(() => {
    setLoading(true);
    getRequest("mix/all/product/20")
      .then((data) => {
        setLoading(false);
        setGetTours(data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  const Retings = (res) => {
    let copyItems = [];
    for (let i = 0; i < res; i++) {
      copyItems.push(i);
    }
    return copyItems;
  };

  return (
    <>
      {loading && <Loader />}
      <div className="main-div py-[100px]">
        {/* sorting and filtering */}
        <div className="flex gap-[30px]">
          {/* region */}
          <Listbox
            as="div"
            className="relative z-10 max-w-[250px] w-full "
            value={selectedRegion}
            onChange={setSelectedRegion}
          >
            {({ open }) => (
              <>
                <Listbox.Button className="border flex justify-between items-center gap-4 p-1 w-full rounded group">
                  {selectedRegion === "all" ? "Region list" : selectedRegion}
                  <SelectorIcon className="w-4 group-hover:text-darkBlueColor" />
                </Listbox.Button>

                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Listbox.Options className="absolute border p-1 rounded shadow w-full bg-white z-10">
                    <Listbox.Option value={"all"}>
                      {({ active, selected }) => (
                        <p
                          className={`
                                                        ${
                                                          active
                                                            ? "bg-sky-500 text-white"
                                                            : ""
                                                        }
                                                        p-1 rounded flex pl-5 relative items-center
                                                    `}
                        >
                          {selected && (
                            <CheckIcon className="w-4 absolute left-0" />
                          )}
                          Region list
                        </p>
                      )}
                    </Listbox.Option>
                    {categories.map((item, index) => (
                      <Listbox.Option
                        key={item?.id}
                        value={nameLang(item, language)}
                      >
                        {({ active, selected }) => (
                          <p
                            className={`
                                                        ${
                                                          active
                                                            ? "bg-sky-500 text-white"
                                                            : ""
                                                        }
                                                        p-1 rounded flex pl-5 relative items-center
                                                    `}
                          >
                            {selected && (
                              <CheckIcon className="w-4 absolute left-0" />
                            )}
                            {nameLang(item, language)}
                          </p>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </>
            )}
          </Listbox>

          {/* sort by rating */}
          <Listbox
            as="div"
            className="relative max-w-[130px] w-full z-10"
            value={sortingByRating}
            onChange={setSortingByRating}
          >
            {({ open }) => (
              <>
                <Listbox.Button className="border flex justify-between items-center gap-4 p-1 w-full rounded group">
                  {sortingByRating === "all"
                    ? "Guest Rating"
                    : sortingByRating + " stars"}
                  <SelectorIcon className="w-4 group-hover:text-darkBlueColor" />
                </Listbox.Button>

                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Listbox.Options className="absolute border p-1 rounded shadow w-full bg-white z-10">
                    <Listbox.Option value={"all"}>
                      {({ active, selected }) => (
                        <p
                          className={`
                                                        ${
                                                          active
                                                            ? "bg-sky-500 text-white"
                                                            : ""
                                                        }
                                                        p-1 rounded flex pl-5 relative items-center
                                                    `}
                        >
                          {selected && (
                            <CheckIcon className="w-4 absolute left-0" />
                          )}
                          Guest Rating
                        </p>
                      )}
                    </Listbox.Option>
                    {sortingByRatingList.map((item, index) => (
                      <Listbox.Option key={index} value={item}>
                        {({ active, selected }) => (
                          <p
                            className={`
                                                        ${
                                                          active
                                                            ? "bg-sky-500 text-white"
                                                            : ""
                                                        }
                                                        p-1 rounded flex pl-5 relative items-center
                                                    `}
                          >
                            {selected && (
                              <CheckIcon className="w-4 absolute left-0" />
                            )}
                            {item} stars
                          </p>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </>
            )}
          </Listbox>

          {/* sort by name */}
          <button
            onClick={() => setSortingByName(!sortingByName)}
            className="border max-w-[130px] w-full flex justify-between items-center gap-4 p-1 rounded group"
          >
            {sortingByName ? "Z to A" : "A to Z"}
            <ChevronDownIcon
              className={`${
                !sortingByName ? "rotate-0" : "-rotate-180"
              } transition-all w-4 group-hover:text-darkBlueColor`}
            />
          </button>

          {/* sort by price */}
          <button
            onClick={() => setSortingByPrice(!sortingByPrice)}
            className="border max-w-[130px] w-full flex justify-between items-center gap-4 p-1 rounded group"
          >
            {sortingByPrice ? "Price (asc)" : "Price (desc)"}
            <ChevronDownIcon
              className={`${
                !sortingByPrice ? "rotate-0" : "-rotate-180"
              } transition-all w-4 group-hover:text-darkBlueColor`}
            />
          </button>
        </div>

        {/* list */}
        <div className="grid grid-rows-2 grid-flow-col gap-4">
          <div className="py-[50px] row-span-2 col-span-2 flex flex-col gap-12">
            {/* Mountain Tours */}

            {getTours?.map((res) => {
              const src = `https://tours.techdatasoft.uz/cover/${res?.cover}`;
              return (
                <div className="flex gap-8" key={res?.id}>
                  <div className="max-w-[350px] w-full aspect-[7/6] relative shadow-md">
                    <Image
                      src={src}
                      layout="fill"
                      objectFit="cover"
                      alt="img"
                      unoptimized
                    />
                    <div className="absolute bg-orange bottom-8 text-[30px] text-white font-semibold px-4 w-[80%]">
                      {nameLang(res, language)}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <div className="flex items-end gap-3">
                        <h1 className="text-orange leading-[1]">
                          ${res?.price}
                        </h1>
                        <span>starting</span>
                      </div>
                      <div className="flex items-center align-right gap-2">
                        <div>
                          <p className="text-[12px] text-black font-semibold">
                            DAY
                          </p>
                          <p className="text-[12px]">{res?.watch} reviews</p>
                        </div>
                        <div className="w-[50px] h-[50px] bg-orange rounded-full flex justify-center items-center text-white text-[20px] font-bold">
                          {res?.days}
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-[10px]">
                      {Retings(res?.gradle).map((i) => {
                        return <StarIcon key={i} className="w-4 text-orange" />;
                      })}
                    </div>
                    <p className="py-4 leading-[2]">
                      {descriptionLang(res, language)}
                    </p>
                    <div className="flex gap-4">
                      <div className="w-7 h-7 relative">
                        <Image
                          src="/images/extraIcons/post.webp"
                          layout="fill"
                          objectFit="contain"
                          alt="img"
                        />
                      </div>
                      <div className="w-7 h-7 relative">
                        <Image
                          src="/images/extraIcons/compass.webp"
                          layout="fill"
                          objectFit="contain"
                          alt="img"
                        />
                      </div>
                      <div className="w-7 h-7 relative">
                        <Image
                          src="/images/extraIcons/bicycle.webp"
                          layout="fill"
                          objectFit="contain"
                          alt="img"
                        />
                      </div>
                      <div className="w-7 h-7 relative">
                        <Image
                          src="/images/extraIcons/boat.webp"
                          layout="fill"
                          objectFit="contain"
                          alt="img"
                        />
                      </div>
                    </div>
                    <p className="py-4 leading-[2]">{res?.direction}</p>
                    <a href="/about-tours">
                      <button className="text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-start mt-auto rounded-[100vmax]">
                        {language["details"]}...
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-orange pt-14">{language["about_uzb"]}</h2>
          <p className="py-4 leading-[2]">{language["about_uzb_tours"]}</p>
          <p className="py-4 leading-[2]">{language["about_uzb_tours_two"]}</p>
          <p className="py-4 leading-[2]">
            {language["about_uzb_tours_three"]}
          </p>
          <p className="py-4 leading-[2]">{language["about_uzb_tours_four"]}</p>
        </div>
      </div>
    </>
  );
};

export default Container2;
