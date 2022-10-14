import { Listbox, Transition } from '@headlessui/react'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon, ChevronDownIcon, SelectorIcon, StarIcon } from "@heroicons/react/outline"

const sortingByRatingList = [5, 4, 3, 2, 1]
const regionList = ["Tashkent", "Bukhara", "Xiva", "Samarkand"]

const Container2 = () => {
    const [selectedRegion, setSelectedRegion] = useState("all")
    const [sortingByRating, setSortingByRating] = useState("all")
    const [sortingByName, setSortingByName] = useState("")
    const [sortingByPrice, setSortingByPrice] = useState("")
    return (
        <div className='main-div py-[100px]'>

            {/* sorting and filtering */}
            <div className='flex gap-[30px]'>

                {/* region */}
                <Listbox as="div" className="relative z-10 max-w-[250px] w-full " value={selectedRegion} onChange={setSelectedRegion}>
                    {({ open }) => (
                        <>
                            <Listbox.Button className="border flex justify-between items-center gap-4 p-1 w-full rounded group">
                                {selectedRegion === "all" ? "Region list" : selectedRegion}
                                <SelectorIcon className='w-4 group-hover:text-darkBlueColor' />
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
                                            <p className={`
                                                        ${active ? "bg-sky-500 text-white" : ""}
                                                        p-1 rounded flex pl-5 relative items-center
                                                    `}>
                                                {selected && <CheckIcon className='w-4 absolute left-0' />}
                                                Region list
                                            </p>
                                        )}
                                    </Listbox.Option>
                                    {regionList.map((item, index) => (
                                        <Listbox.Option key={index} value={item}>
                                            {({ active, selected }) => (
                                                <p className={`
                                                        ${active ? "bg-sky-500 text-white" : ""}
                                                        p-1 rounded flex pl-5 relative items-center
                                                    `}>
                                                    {selected && <CheckIcon className='w-4 absolute left-0' />}
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
                <Listbox as="div" className="relative max-w-[130px] w-full z-10" value={sortingByRating} onChange={setSortingByRating}>
                    {({ open }) => (
                        <>
                            <Listbox.Button className="border flex justify-between items-center gap-4 p-1 w-full rounded group">
                                {sortingByRating === "all" ? "Guest Rating" : sortingByRating + " stars"}
                                <SelectorIcon className='w-4 group-hover:text-darkBlueColor' />
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
                                            <p className={`
                                                        ${active ? "bg-sky-500 text-white" : ""}
                                                        p-1 rounded flex pl-5 relative items-center
                                                    `}>
                                                {selected && <CheckIcon className='w-4 absolute left-0' />}
                                                Guest Rating
                                            </p>
                                        )}
                                    </Listbox.Option>
                                    {sortingByRatingList.map((item, index) => (
                                        <Listbox.Option key={index} value={item}>
                                            {({ active, selected }) => (
                                                <p className={`
                                                        ${active ? "bg-sky-500 text-white" : ""}
                                                        p-1 rounded flex pl-5 relative items-center
                                                    `}>
                                                    {selected && <CheckIcon className='w-4 absolute left-0' />}
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
                <button onClick={() => setSortingByName(!sortingByName)} className="border max-w-[130px] w-full flex justify-between items-center gap-4 p-1 rounded group">
                    {sortingByName ? "Z to A" : "A to Z"}
                    <ChevronDownIcon className={`${!sortingByName ? "rotate-0" : "-rotate-180"} transition-all w-4 group-hover:text-darkBlueColor`} />
                </button>

                {/* sort by price */}
                <button onClick={() => setSortingByPrice(!sortingByPrice)} className="border max-w-[130px] w-full flex justify-between items-center gap-4 p-1 rounded group">
                    {sortingByPrice ? "Price (asc)" : "Price (desc)"}
                    <ChevronDownIcon className={`${!sortingByPrice ? "rotate-0" : "-rotate-180"} transition-all w-4 group-hover:text-darkBlueColor`} />
                </button>

            </div>

            {/* list */}
            <div className='grid grid-rows-2 grid-flow-col gap-4'>
            <div className='py-[50px] row-span-2 col-span-2 flex flex-col gap-12'>

            {/* Mountain Tours */}

                <div className='flex gap-8'>
                    <div className='max-w-[350px] w-full aspect-[7/6] relative shadow-md'>
                        <Image src="https://www.advantour.com/img/uzbekistan/tours/extention-chimgan-beldersay-m1.jpg" layout='fill' objectFit='cover' alt="img" />
                        <div className='absolute bg-orange bottom-8 text-[30px] text-white font-semibold px-4 w-[80%]'>Gulkam Canyon</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-end gap-3'>
                                <h1 className='text-orange leading-[1]'>$85</h1>
                                <span>starting</span>
                            </div>
                            <div className='flex items-center align-right gap-2'>
                                <div>
                                    <p className='text-[12px] text-black font-semibold'>DAY</p>
                                    <p className='text-[12px]'>100 reviews</p>
                                </div>
                                <div className='w-[50px] h-[50px] bg-orange rounded-full flex justify-center items-center text-white text-[20px] font-bold'>1</div>
                            </div>
                        </div>
                        <div className='flex mt-[10px]'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[2]'>From May to October, Uzbekistan’s mountains appear in front of travellers in all their splendour. Take a day trip out of the city to visit Chimgan and the Gulkam Canyon, admire the dramatic canyon scenery and enjoy a relaxing picnic near the famous waterfalls.</p>
                        <div className='flex gap-4'>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/post.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/compass.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/bicycle.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/boat.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                        </div>
                        <p className='py-4 leading-[2]'>Tashkent, Chimgan</p>
                        <a href="/about-tours">
                            <button className='text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-start mt-auto rounded-[100vmax]'>Details...</button>
                        </a>
                    </div>
                </div>                      
                                                
                <div className='flex gap-8'>
                    <div className='max-w-[350px] w-full aspect-[7/6] relative shadow-md'>
                        <Image src="https://www.advantour.com/img/uzbekistan/tours/yangiabad-tour.jpg" layout='fill' objectFit='cover' alt="img" />
                        <div className='absolute bg-orange bottom-8 text-[30px] text-white font-semibold px-4 w-[55%]'>Yangiabad</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-end gap-3'>
                                <h1 className='text-orange leading-[1]'>$220</h1>
                                <span>starting</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <p className='text-[12px] text-black font-semibold'>DAYS</p>
                                    <p className='text-[12px]'>512 reviews</p>
                                </div>
                                <div className='w-[50px] h-[50px] bg-orange rounded-full flex justify-center items-center text-white text-[20px] font-bold'>2</div>
                            </div>
                        </div>
                        <div className='flex mt-[10px]'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[2]'>The Yangiabad Mountains are a real treasure for trekkers. With their pure air, rich with the scents of pine trees and flowering herbs, the Yangiabad Mountains enchant with their untouched nature and light blue skies.</p>
                        <div className='flex gap-4'>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/post.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/compass.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/bicycle.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/boat.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                        </div>
                        <p className='py-4 leading-[2]'>Yangiabad tourist lodge, Pigeon gorge and waterfall, Chilten river etc.</p>
                        <a href="/about-tours/index_2">
                            <button className='text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-start mt-auto rounded-[100vmax]'>Details...</button>
                        </a>
                    </div>
                </div>  
                                                    
                <div className='flex gap-8'>
                    <div className='max-w-[350px] w-full aspect-[7/6] relative shadow-md'>
                        <Image src="https://www.advantour.com/img/uzbekistan/tours/chimgan-charvak-tour.jpg" layout='fill' objectFit='cover' alt="img" />
                        <div className='absolute bg-orange bottom-8 text-[25px] text-white font-semibold px-4 w-[85%]'>Chimgan and Charvak</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-end gap-3'>
                                <h1 className='text-orange leading-[1]'>$50</h1>
                                <span>starting</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <p className='text-[12px] text-black font-semibold'>DAYS</p>
                                    <p className='text-[12px]'>126 reviews</p>
                                </div>
                                <div className='w-[50px] h-[50px] bg-orange rounded-full flex justify-center items-center text-white text-[20px] font-bold'>1</div>
                            </div>
                        </div>
                        <div className='flex mt-[10px]'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[2]'>This one-day tour finds room for the Chimgan Mountains and the landscapes of Charvak. The rich sights are complemented by lunch at a mountain restaurant under the immense plane trees.</p>
                        <div className='flex gap-4'>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/post.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/compass.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/bicycle.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/boat.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                        </div>
                        <p className='py-4 leading-[2]'>Chimgan, Charvak</p>
                        <a href="/about-tours">
                            <button className='text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-start mt-auto rounded-[100vmax]'>Details...</button>
                        </a>
                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className='max-w-[350px] w-full aspect-[7/6] relative shadow-md'>
                        <Image src="https://www.advantour.com/img/uzbekistan/tours/bulaksu-tour.jpg" layout='fill' objectFit='cover' alt="img" />
                        <div className='absolute bg-orange bottom-8 text-[30px] text-white font-semibold px-4 w-[80%]'>Bulaksu Gorge</div>
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-end gap-3'>
                                <h1 className='text-orange leading-[1]'>$85</h1>
                                <span>starting</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <p className='text-[12px] text-black font-semibold'>DAYS</p>
                                    <p className='text-[12px]'>512 reviews</p>
                                </div>
                                <div className='w-[50px] h-[50px] bg-orange rounded-full flex justify-center items-center text-white text-[20px] font-bold'>1</div>
                            </div>
                        </div>
                        <div className='flex mt-[10px]'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[2]'>Tour to Bulaksu Gorge is a mountain adventure along Uzbekistan’s Bulaksu River tract. The one-day trek is a test of endurance when ascending, followed by a pleasant hike through spacious fields with impressive mountain views and a picnic in the meadows alongside cooling river waters.</p>
                        <div className='flex gap-4'>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/post.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/compass.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/bicycle.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/boat.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                        </div>
                        <p className='py-4 leading-[2]'>Khodjikent, Bulaksu</p>
                        <a href="/about-tours">
                            <button className='text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-start mt-auto rounded-[100vmax]'>Details...</button>
                        </a>
                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className='max-w-[350px] w-full aspect-[7/6] relative shadow-md'>
                        <Image src="https://www.advantour.com/img/uzbekistan/tours/urungach-lake-tour.jpg" layout='fill' objectFit='cover' alt="img" />
                        <div className='absolute bg-orange bottom-8 text-[30px] text-white font-semibold px-4 w-[55%]'>Jade Lakes</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-end gap-3'>
                                <h1 className='text-orange leading-[1]'>$95</h1>
                                <span>starting</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <p className='text-[12px] text-black font-semibold'>DAYS</p>
                                    <p className='text-[12px]'>512 reviews</p>
                                </div>
                                <div className='w-[50px] h-[50px] bg-orange rounded-full flex justify-center items-center text-white text-[20px] font-bold'>1</div>
                            </div>
                        </div>
                        <div className='flex mt-[10px]'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[2]'>In spring, hundreds of streams flow down from the peaks of the Tien Shan and fill mountain lakes with icy water. Choose a one-day tour to Lake Urungach to take a break from the hustle and bustle of the city in the lap of nature and enjoy the beauty of emerald water, blue sky and green groves.</p>
                        <div className='flex gap-4'>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/post.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/compass.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/bicycle.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/boat.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                        </div>
                        <p className='py-4 leading-[2]'>Lake Urungach</p>
                        <a href="/about-tours">
                            <button className='text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-start mt-auto rounded-[100vmax]'>Details...</button>
                        </a>
                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className='max-w-[350px] w-full aspect-[7/6] relative shadow-md'>
                        <Image src="/images/obi-rakhmat-paltau.jpg" layout='fill' objectFit='cover' alt="img" />
                        <div className='absolute bg-orange bottom-8 text-[30px] text-white font-semibold px-4 w-[80%]'>Obi-Rakhmat and Paltau</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-end gap-3'>
                                <h1 className='text-orange leading-[1]'>$85</h1>
                                <span>starting</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <p className='text-[12px] text-black font-semibold'>DAYS</p>
                                    <p className='text-[12px]'>512 reviews</p>
                                </div>
                                <div className='w-[50px] h-[50px] bg-orange rounded-full flex justify-center items-center text-white text-[20px] font-bold'>1</div>
                            </div>
                        </div>
                        <div className='flex mt-[10px]'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[2]'>This one-day tour to the mountains of Uzbekistan will take you to a Neanderthal site over 50 thousand years old, as well as to the 38-meter high Paltau waterfall. The trip combines expanding your knowledge about local ancient history and experiencing the beauty of the Tien Shan mountains in Uzbekistan.</p>
                        <div className='flex gap-4'>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/post.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/compass.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/bicycle.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/boat.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                        </div>
                        <p className='py-4 leading-[2]'>Paltau</p>
                        <a href="/about-tours">
                            <button className='text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-start mt-auto rounded-[100vmax]'>Details...</button>
                        </a>
                    </div>
                </div>


                {/* Group Tours */}

                <div className='flex gap-8'>
                    <div className='max-w-[350px] w-full aspect-[7/6] relative shadow-md'>
                        <Image src="https://www.advantour.com/img/uzbekistan/tours/scheduled-uzbekistan-tour.jpg" layout='fill' objectFit='cover' alt="img" />
                        <div className='absolute bg-orange bottom-8 text-[30px] text-white font-semibold px-4 w-[60%]'>Extended Group Tour</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-end gap-3'>
                                <h1 className='text-orange leading-[1]'>$1545</h1>
                                <span>starting</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <p className='text-[12px] text-black font-semibold'>DAYS</p>
                                    <p className='text-[12px]'>512 reviews</p>
                                </div>
                                <div className='w-[50px] h-[50px] bg-orange rounded-full flex justify-center items-center text-white text-[20px] font-bold'>12</div>
                            </div>
                        </div>
                        <div className='flex mt-[10px]'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[2]'>Join like-minded travellers on this small group tour of Uzbekistan’s historical, cultural, and scenic highlights! Explore the fabled Silk Road cities of Samarkand, Bukhara, Khiva, and Tashkent, as well as some of Uzbekistan’s more ‘off-the-beaten-track’ destinations.</p>
                        <div className='flex gap-4'>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/post.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/compass.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/bicycle.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/boat.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                        </div>
                        <p className='py-4 leading-[2]'>Tashkent, Nukus, Khorezm, Khiva, Bukhara, Nurata, Samarkand</p>
                        <a href="/about-tours">
                            <button className='text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-start mt-auto rounded-[100vmax]'>Details...</button>
                        </a>
                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className='max-w-[350px] w-full aspect-[7/6] relative shadow-md'>
                        <Image src="https://www.advantour.com/img/uzbekistan/tours/samarkand-bukhara-group-tour-from-almaty.jpg" layout='fill' objectFit='cover' alt="img" />
                        <div className='absolute bg-orange bottom-8 text-[30px] text-white font-semibold px-4 w-[65%]'>Samarkand and Bukhara</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-end gap-3'>
                                <h1 className='text-orange leading-[1]'>$490</h1>
                                <span>starting</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <p className='text-[12px] text-black font-semibold'>DAYS</p>
                                    <p className='text-[12px]'>512 reviews</p>
                                </div>
                                <div className='w-[50px] h-[50px] bg-orange rounded-full flex justify-center items-center text-white text-[20px] font-bold'>5</div>
                            </div>
                        </div>
                        <div className='flex mt-[10px]'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[2]'>On the Samarkand and Bukhara Group Tour from Almaty, you will leave the busy streets of Kazakhstan behind as you hop on a plane for Samarkand, Uzbekistan, spending the next four days experiencing the sights of two cities as unique from one another as they are ancient.</p>
                        <div className='flex gap-4'>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/post.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/compass.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/bicycle.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/boat.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                        </div>
                        <p className='py-4 leading-[2]'>Samarkand and Bukhara Group Tour from Almaty</p>
                        <a href="/about-tours">
                            <button className='text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-start mt-auto rounded-[100vmax]'>Details...</button>
                        </a>
                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className='max-w-[350px] w-full aspect-[7/6] relative shadow-md'>
                        <Image src="https://www.advantour.com/img/uzbekistan/tours/darvaza-group-tour.jpg" layout='fill' objectFit='cover' alt="img" />
                        <div className='absolute bg-orange bottom-8 text-[30px] text-white font-semibold px-4 w-[55%]'>Darvaza Gas Crater</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-end gap-3'>
                                <h1 className='text-orange leading-[1]'>$590</h1>
                                <span>starting</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <p className='text-[12px] text-black font-semibold'>DAYS</p>
                                    <p className='text-[12px]'>512 reviews</p>
                                </div>
                                <div className='w-[50px] h-[50px] bg-orange rounded-full flex justify-center items-center text-white text-[20px] font-bold'>2</div>
                            </div>
                        </div>
                        <div className='flex mt-[10px]'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[2]'>This two-day group tour from Khiva to the Darvaza Gas Crater will leave you full of unforgettable memories. Visit the historical center of Kunya-Urgench and the world-famous Darvaza Gas Crater.</p>
                        <div className='flex gap-4'>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/post.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/compass.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/bicycle.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/boat.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                        </div>
                        <p className='py-4 leading-[2]'>Kunya-Urgench, Darvaza gas crater</p>
                        <a href="/about-tours">
                            <button className='text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-start mt-auto rounded-[100vmax]'>Details...</button>
                        </a>
                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className='max-w-[350px] w-full aspect-[7/6] relative shadow-md'>
                        <Image src="https://www.advantour.com/img/uzbekistan/tours/scheduled-uzbekistan-winter-tour.jpg" layout='fill' objectFit='cover' alt="img" />
                        <div className='absolute bg-orange bottom-8 text-[30px] text-white font-semibold px-4 w-[55%]'>"Nomi"</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-end gap-3'>
                                <h1 className='text-orange leading-[1]'>$"Narxi"</h1>
                                <span>starting</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <p className='text-[12px] text-black font-semibold'>DAYS</p>
                                    <p className='text-[12px]'>512 reviews</p>
                                </div>
                                <div className='w-[50px] h-[50px] bg-orange rounded-full flex justify-center items-center text-white text-[20px] font-bold'>"8"</div>
                            </div>
                        </div>
                        <div className='flex mt-[10px]'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[2]'>"Ma'lumot"</p>
                        <div className='flex gap-4'>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/post.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/compass.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/bicycle.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                            <div className='w-7 h-7 relative'>
                                <Image src="/images/extraIcons/boat.webp" layout='fill' objectFit='contain' alt="img" />
                            </div>
                        </div>
                        <p className='py-4 leading-[2]'>"Joy"</p>
                        <a href="/about-tours">
                            <button className='text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-start mt-auto rounded-[100vmax]'>Details...</button>
                        </a>
                    </div>
                </div>

                {/* <aside class="row-span-3 w-64" aria-label="Sidebar">
                <div class="overflow-y-auto py-4 px-3 bg-transparent rounded">
                <ul class="space-y-2">
                    <li>
                    <div className='border border-gray-300 p-4 rounded-md h-max'>
                    <Link href="/about-uzbekistan/jizzakh/tours" className='border'>
                        <a className='text-black hover:text-red-500 transition-all cursor-pointer'>Jizzakh Tours</a>
                    </Link>
                </div>
                    </li>
                    <li>
                    <div className='border border-gray-300 p-4 rounded-md h-max'>
                    <Link href="/about-uzbekistan/jizzakh/tours" className='border'>
                        <a className='text-black hover:text-red-500 transition-all cursor-pointer'>Namangan Tours</a>
                    </Link>
                </div>
                    </li>
                    <li>
                    <div className='border border-gray-300 p-4 rounded-md h-max'>
                    <Link href="/about-uzbekistan/jizzakh/tours" className='border'>
                        <a className='text-black hover:text-red-500 transition-all cursor-pointer'>Tashkent Tours</a>
                    </Link>
                </div>
                    </li>
                    <li>
                    <div className='border border-gray-300 p-4 rounded-md h-max'>
                    <Link href="/about-uzbekistan/jizzakh/tours" className='border'>
                        <a className='text-black hover:text-red-500 transition-all cursor-pointer'>Khiva Tours</a>
                    </Link>
                </div>
                    </li>
                    </ul>
            </div>
                </aside> */}

            </div>
        </div>
            
            <div>
                <h2 className='text-orange pt-14'>Private Trips and Group Tours in Uzbekistan</h2>
                <p className='py-4 leading-[2]'>Uzbekistan tours take you to the greatest cities of the Silk Road: Samarkand, Khiva, and Bukhara. Old parts of these cities are intact versions of ancient Silk Road cities, where you can wander through alleyways and monuments and see these cities as they looked centuries ago. Recognizing their impressive architecture, atmospheres, and value to humanity, UNESCO has designated them to be World Heritage Sites.</p>
                <p className='py-4 leading-[2]'>As part of our Uzbekistan tours and holiday packages we offer a wide range of activities in addition to visiting historical sites: you can ride a camel in the Kyzylkum Desert, stay in a yurt, taste (or even cook) the best pilaf, or meet master-craftsmen as they make silk fabric in Margilan or pottery in Gijduvan. If you prefer an active holiday, visit the mountain resorts of Chimgan and Beldersay, or head to the Aral Sea for a unique opportunity for adventure seekers, photographers, and ecologists. Alternatively, spend some time in the Nurata Mountains, to see untouched nature and everyday village life while supporting local ecotourism.</p>
                <p className='py-4 leading-[2]'>For those who love the arts, the Fergana Valley, with its rich and colourful textiles and other handicrafts, is ideal. Intricate skills in embroidery, pottery, carpet-weaving and blacksmithing have been handed down through families for six or seven generations. Another option is to head to Nukus, which has one of the best art collections in the region, including the world's second-largest collection of Russian avant-garde art. In Tashkent, attend a ballet or opera performance or dine at one of Uzbekistan’s finest restaurants.</p>
                <p className='py-4 leading-[2]'>Book an Uzbekistan tour with us if you love ancient history, mesmerizing architecture, exotic legends, applied arts, warm hospitality, rich pilaf with crispy bread, and abundant fruits and vegetables grown naturally under the bright sun. We’re pleased to offer both small group tours and private trips, and can even design a tailor-made travel package just for you! Whichever option you choose, by the time your trip ends, you’ll have an extra piece of baggage and many unforgettable memories to take home!</p>
            </div>
        </div>
    )
}

export default Container2