import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
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
import Loader from "../../Ui/Loader";

const sortingByRatingList = [5, 4, 3, 2, 1];

const Container2 = ({ id }) => {
  const categories = useSelector(({ categories }) => categories);
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [sortingByRating, setSortingByRating] = useState("all");
  const [sortingByName, setSortingByName] = useState("");
  const [sortingByPrice, setSortingByPrice] = useState("");
  const { language } = getLanguage();
  const [loading, setLoading] = useState(false);
  const getTours = useSelector(({ tours }) => tours);
  const [getToursFilter, setGetToursFilter] = useState(getTours);

  React.useEffect(() => {
    setGetToursFilter(getTours);
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
            className="relative z-10 max-w-[250px] w-full"
            value={selectedRegion}
            onChange={(e) => {
              setSelectedRegion(e);
              setGetToursFilter(
                getTours.filter((item) =>
                  !e.id ? true : item?.category === e?.id
                )
              );
            }}
          >
            {({ open }) => (
              <>
                <Listbox.Button className="border flex justify-between items-center gap-4 p-1 w-full rounded group">
                  {selectedRegion === "all"
                    ? "Region list"
                    : selectedRegion?.name}
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
                             active ? "bg-sky-500 text-white" : ""
                           } p-1 rounded flex pl-5 relative items-center`}
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
                        value={{ name: nameLang(item, language), id: item?.id }}
                      >
                        {({ active, selected }) => (
                          <p
                            className={`
                               ${active ? "bg-sky-500 text-white" : ""}
                                p-1 rounded flex pl-5 relative items-center`}
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
            onChange={(e) => {
              setSortingByRating(e);
              setGetToursFilter(
                getTours?.filter((item) =>
                  e === "all" ? true : item?.gradle === e
                )
              );
              // setGetToursFilter(
              //   getTours.filter((item) =>
              //     !e.id ? true : item?.gradle === e?.id
              //   )
              // );
            }}
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
            onClick={() => {
              setSortingByName(!sortingByName);
              setGetToursFilter(
                [...getTours]?.sort((a, b) => {
                  const nameA = descriptionLang(a, language)?.toUpperCase(); // ignore upper and lowercase
                  const nameB = descriptionLang(b, language)?.toUpperCase(); // ignore upper and lowercase
                  console.log(nameA, "nameA", nameB, "nameB");
                  if (nameA < nameB) {
                    return sortingByName ? -1 : 1;
                  }
                  if (nameA > nameB) {
                    return sortingByName ? 1 : -1;
                  }

                  // names must be equal
                  return 0;
                })
              );
            }}
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
            onClick={() => {
              setSortingByPrice(!sortingByPrice);
              setGetToursFilter(
                [...getTours].sort((a, b) =>
                  sortingByPrice ? a?.price - b?.price : b?.price - a?.price
                )
              );
            }}
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

            {getToursFilter?.map((res) => {
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
                      {nameLang(res, language)} dad
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
                        {res?.turn === 1 && (
                          <Image
                            src="/images/extraIcons/post.webp"
                            layout="fill"
                            objectFit="contain"
                            alt="img"
                          />
                        )}
                      </div>
                      <div className="w-7 h-7 relative">
                        {res?.watch === 1 && (
                          <Image
                            src="/images/extraIcons/compass.webp"
                            layout="fill"
                            objectFit="contain"
                            alt="img"
                          />
                        )}
                      </div>
                      <div className="w-7 h-7 relative">
                        {res?.great === 1 && (
                          <Image
                            src="/images/extraIcons/bicycle.webp"
                            layout="fill"
                            objectFit="contain"
                            alt="img"
                          />
                        )}
                      </div>
                      <div className="w-7 h-7 relative">
                        {res?.boat === 1 && (
                          <Image
                            src="/images/extraIcons/boat.webp"
                            layout="fill"
                            objectFit="contain"
                            alt="img"
                          />
                        )}
                      </div>
                    </div>
                    <p className="py-4 leading-[2]">{res?.direction}</p>
                    <Link href={`/about-tours/${res?.id}`}>
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
      </div>
    </>
  );
};

export default Container2;
