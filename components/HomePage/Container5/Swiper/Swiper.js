import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Navigation } from "swiper";
import Image from "next/image"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { StarIcon } from "@heroicons/react/solid";

export default function SwiperHotelList() {
    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView="auto"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: '.next',
                    prevEl: '.prev',
                }}
                speed={300}
                breakpoints={{
                    280: {
                        slidesPerView: 1.3,
                        spaceBetween: 20,
                    },
                    520: {
                        slidesPerView: 1.8,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3.5,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4.5,
                        spaceBetween: 20,
                    },
                }}
                loop={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <div className="relative w-full aspect-square cursor-grab">
                        <Image src="https://www.advantour.com/img/uzbekistan/tours/scheduled-uzbekistan-winter-tour.jpg" layout="fill" objectFit="cover" alt="img" />
                    </div>
                    <div className="">
                        <div className=" text-black text-[18px] font-semibold tracking-wider w-[80%] font-sans">Uzbekistan Winter Group Tour 2023</div>
                        <div className='flex'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[1.5]'>The Uzbekistan winter group tour is ideal for visiting the country’s most famous sights and monuments when there are fewer tourists. Explore the old town of Tashkent, Registan Square in Samarkand, Lyabi-Hauz in Bukhara, and other places.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full aspect-square cursor-grab">
                        <Image src="https://www.advantour.com/img/uzbekistan/tours/darvaza-group-tour.jpg" layout="fill" objectFit="cover" alt="img" />
                    </div>
                    <div className="">
                        <div className=" text-black text-[18px] font-semibold tracking-wider w-[80%] font-sans">Darvaza Gas Crater Group Tour 2022 (from Khiva)</div>
                        <div className='flex'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[1.5]'>This two-day group tour from Khiva to the Darvaza Gas Crater will leave you full of unforgettable memories. Visit the historical center of Kunya-Urgench and the world-famous Darvaza Gas Crater.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full aspect-square cursor-grab">
                        <Image src="https://www.advantour.com/img/uzbekistan/tours/samarkand-bukhara-group-tour-from-almaty.jpg" layout="fill" objectFit="cover" alt="img" />
                    </div>
                    <div className="">
                        <div className=" text-black text-[18px] font-semibold tracking-wider w-[80%] font-sans">Samarkand and Bukhara Group Tour from Almaty</div>
                        <div className='flex'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[1.5]'>On the Samarkand and Bukhara Group Tour from Almaty, you will leave the busy streets of Kazakhstan behind as you hop on a plane for Samarkand, Uzbekistan, spending the next four days experiencing the sights of two cities as unique from one another as they are ancient.

</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full aspect-square cursor-grab">
                        <Image src="https://www.advantour.com/img/uzbekistan/tours/relaxed-tour.jpg" layout="fill" objectFit="cover" alt="img" />
                    </div>
                    <div className="">
                        <div className=" text-black text-[18px] font-semibold tracking-wider w-[80%] font-sans">Uzbekistan Relaxed Group Tour 2022-2023</div>
                        <div className='flex'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[1.5]'>The Uzbekistan Relaxed Group Tour 2022-2023 allows you to experience the very best of Tashkent, Khiva, Bukhara, Gijduvan and Samarkand at a laid-back pace that will not leave you feeling tired, rushed or overwhelmed.

</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full aspect-square cursor-grab">
                        <Image src="https://www.advantour.com/img/uzbekistan/tours/scheduled-uzbekistan-tour.jpg" layout="fill" objectFit="cover" alt="img" />
                    </div>
                    <div className="">
                        <div className=" text-black text-[18px] font-semibold tracking-wider w-[80%] font-sans">Classic Uzbekistan Group Tour 2022 and 2023</div>
                        <div className='flex'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[1.5]'>Our most popular escorted tour of Uzbekistan in a small group will acquaint you with the most famous ancient cities in Uzbekistan: Khiva, Bukhara and Samarkand, as well as the modern capital, Tashkent.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-full aspect-square cursor-grab">
                        <Image src="https://www.advantour.com/img/uzbekistan/tours/solo-friendly-uzbekistan-tour.jpg" layout="fill" objectFit="cover" alt="img" />
                    </div>
                    <div className="">
                        <div className=" text-black text-[18px] font-semibold tracking-wider w-[80%] font-sans">Extended Uzbekistan Group Tour 2022-2023</div>
                        <div className='flex'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[1.5]'>Join like-minded travellers on this small group tour of Uzbekistan’s historical, cultural, and scenic highlights! Explore the fabled Silk Road cities of Samarkand, Bukhara, Khiva, and Tashkent, as well as some of Uzbekistan’s more ‘off-the-beaten-track’ destinations.
</p>
                    </div>
                </SwiperSlide>

            </Swiper>

            <div className="md:flex justify-center gap-8 hidden">
                <div className="prev hidden md:block group border-orange bg-slate-500 rounded-[9px] overflow-hidden border-2 py-[12px] px-[2px] cursor-pointer">
                    <MdKeyboardArrowLeft className="text-[20px] text-orange" />
                </div>
                <div className="next hidden md:block group border-orange bg-slate-500 border-2 py-[12px] px-[2px] rounded-[9px] cursor-pointer">
                    <MdKeyboardArrowRight className="text-[20px] text-orange" />
                </div>
            </div>

        </>
    );
}
