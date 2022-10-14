import { Listbox, Transition } from "@headlessui/react";
import React, { useState } from "react";
import Image from "next/image";
import {
  CheckIcon,
  ChevronDownIcon,
  SelectorIcon,
  StarIcon,
} from "@heroicons/react/outline";

const sortingByRatingList = [5, 4, 3, 2, 1];
const regionList = ["Tashkent", "Bukhara", "Xiva", "Samarkand"];

const Container2 = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [sortingByRating, setSortingByRating] = useState("all");
  const [sortingByName, setSortingByName] = useState("");
  const [sortingByPrice, setSortingByPrice] = useState("");
  return (
    <div className="main-div py-[100px]">
      {/* sorting and filtering */}
      <div className="flex gap-[30px] ">
        {/* region */}
        <Listbox
          as="div"
          className="relative max-w-[250px] w-full z-50"
          value={selectedRegion}
          onChange={setSelectedRegion}
        >
          {({ open }) => (
            <>
              <Listbox.Button className="border flex justify-between items-center gap-4 p-1 w-full rounded group z-10">
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
                <Listbox.Options className="absolute border p-1 rounded shadow w-full bg-white z-50">
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
                  {regionList.map((item, index) => (
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
                          {item}
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
          className="relative max-w-[130px] w-full z-20"
          value={sortingByRating}
          onChange={setSortingByRating}
        >
          {({ open }) => (
            <>
              <Listbox.Button className="border flex justify-between items-center gap-4 p-1 w-full rounded group z-20">
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
                <Listbox.Options className="absolute border p-1 rounded shadow w-full bg-white z-20">
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
          className="border max-w-[130px] w-full flex justify-between items-center gap-4 p-1 rounded group z-20"
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

      <div className="py-[50px] flex flex-col gap-12">
        <div className="flex gap-8">
          <div className="max-w-[350px] w-full aspect-[7/6] relative shadow-md">
            <Image
              src="https://preview.colorlib.com/theme/travelix/images/xoffer_6.jpg.pagespeed.ic.z1jAmiqjUy.webp"
              layout="fill"
              objectFit="cover"
              alt="img"
            />
            <div className="absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4">
              RADDISSON BLU
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex items-end gap-3">
                <h1 className="text-orange leading-[1]">$70</h1>
                <span>per night</span>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-[12px] text-black font-semibold">
                    VERY GOOD
                  </p>
                  <p className="text-[12px]">100 reviews</p>
                </div>
                <div className="w-[50px] h-[50px] bg-orange rounded-full flex justify-center items-center text-white text-[20px] font-bold">
                  8.1
                </div>
              </div>
            </div>
            <div className="flex mt-[10px]">
              <StarIcon className="w-4 text-orange" />
              <StarIcon className="w-4 text-orange" />
              <StarIcon className="w-4 text-orange" />
              <StarIcon className="w-4 text-orange" />
              <StarIcon className="w-4 text-orange" />
            </div>
            <p className="py-4 leading-[2]">
              Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nullam eu convallis tortor.
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
            <button className="text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-start mt-auto rounded-[100vmax]">
              BOOK...
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="max-w-[350px] w-full aspect-[7/6] relative shadow-md">
            <Image
              src="https://preview.colorlib.com/theme/travelix/images/xoffer_6.jpg.pagespeed.ic.z1jAmiqjUy.webp"
              layout="fill"
              objectFit="cover"
              alt="img"
            />
            <div className="absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4">
              RADDISSON BLU
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex items-end gap-3">
                <h1 className="text-orange leading-[1]">$70</h1>
                <span>per night</span>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-[12px] text-black font-semibold">
                    VERY GOOD
                  </p>
                  <p className="text-[12px]">100 reviews</p>
                </div>
                <div className="w-[50px] h-[50px] bg-orange rounded-full flex justify-center items-center text-white text-[20px] font-bold">
                  8.1
                </div>
              </div>
            </div>
            <div className="flex mt-[10px]">
              <StarIcon className="w-4 text-orange" />
              <StarIcon className="w-4 text-orange" />
              <StarIcon className="w-4 text-orange" />
              <StarIcon className="w-4 text-orange" />
              <StarIcon className="w-4 text-orange" />
            </div>
            <p className="py-4 leading-[2]">
              Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nullam eu convallis tortor.
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
            <button className="text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-start mt-auto rounded-[100vmax]">
              BOOK...
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="max-w-[350px] w-full aspect-[7/6] relative shadow-md">
            <Image
              src="https://preview.colorlib.com/theme/travelix/images/xoffer_6.jpg.pagespeed.ic.z1jAmiqjUy.webp"
              layout="fill"
              objectFit="cover"
              alt="img"
            />
            <div className="absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4">
              RADDISSON BLU
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex items-end gap-3">
                <h1 className="text-orange leading-[1]">$70</h1>
                <span>per night</span>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-[12px] text-black font-semibold">
                    VERY GOOD
                  </p>
                  <p className="text-[12px]">100 reviews</p>
                </div>
                <div className="w-[50px] h-[50px] bg-orange rounded-full flex justify-center items-center text-white text-[20px] font-bold">
                  8.1
                </div>
              </div>
            </div>
            <div className="flex mt-[10px]">
              <StarIcon className="w-4 text-orange" />
              <StarIcon className="w-4 text-orange" />
              <StarIcon className="w-4 text-orange" />
              <StarIcon className="w-4 text-orange" />
              <StarIcon className="w-4 text-orange" />
            </div>
            <p className="py-4 leading-[2]">
              Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nullam eu convallis tortor.
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
            <button className="text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-start mt-auto rounded-[100vmax]">
              BOOK...
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="max-w-[350px] w-full aspect-[7/6] relative shadow-md">
            <Image
              src="https://preview.colorlib.com/theme/travelix/images/xoffer_6.jpg.pagespeed.ic.z1jAmiqjUy.webp"
              layout="fill"
              objectFit="cover"
              alt="img"
            />
            <div className="absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4">
              RADDISSON BLU
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex items-end gap-3">
                <h1 className="text-orange leading-[1]">$70</h1>
                <span>per night</span>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-[12px] text-black font-semibold">
                    VERY GOOD
                  </p>
                  <p className="text-[12px]">100 reviews</p>
                </div>
                <div className="w-[50px] h-[50px] bg-orange rounded-full flex justify-center items-center text-white text-[20px] font-bold">
                  8.1
                </div>
              </div>
            </div>
            <div className="flex mt-[10px]">
              <StarIcon className="w-4 text-orange" />
              <StarIcon className="w-4 text-orange" />
              <StarIcon className="w-4 text-orange" />
              <StarIcon className="w-4 text-orange" />
              <StarIcon className="w-4 text-orange" />
            </div>
            <p className="py-4 leading-[2]">
              Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Nullam eu convallis tortor.
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
            <button className="text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-start mt-auto rounded-[100vmax]">
              BOOK...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container2;
