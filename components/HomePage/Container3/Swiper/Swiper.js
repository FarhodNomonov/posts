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
                <div className='relative w-full max-w-[400px] aspect-[4/5]'>
                    <Image layout='fill' objectFit='cover' src="https://www.advantour.com/img/uzbekistan/images/samarkand.jpg" alt="img" />
                    <div className='absolute inset-0 bg-lightPurple px-4 lg:px-8 py-8 flex flex-col'>
                        <div className='px-[25px] text-[13px] text-white rounded-[14px] bg-orange leading-[27px] w-max mx-auto'>May 25th-June 01st</div>
                        <h1 className='text-[25px] lg:text-[30px] font-[700] text-white tracking-tighter text-center mt-auto'>Samarkand</h1>
                        {/* <p className='text-white text-center font-[200] leading-3'>From: $1450</p> */}
                        <div className='flex justify-center mt-[10px]'>
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                        </div>
                        <div className='text-center'>
                            <button className="text-[13px] font-[700] text-white leading-[50px] lg:leading-[40px] px-[35px] lg:px-[40px] relative z-[1] overflow-hidden mt-[20px] lg:mt-[40px] rounded-[100vmax] button1">
                                <div className="btn1-bg absolute inset-0"></div>
                                <a span className='relative' href="/about-uzbekistan/samarkand/tours">SEE MORE...</a></button>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                
                <SwiperSlide>
                <div className='relative w-full max-w-[400px] aspect-[4/5]'>
                    <Image layout='fill' objectFit='cover' src="https://www.advantour.com/img/uzbekistan/images/bukhara.jpg" alt="img" />
                    <div className='absolute inset-0 bg-lightPurple px-4 lg:px-8 py-8 flex flex-col'>
                        <div className='px-[25px] text-[13px] text-white rounded-[14px] bg-orange leading-[27px] w-max mx-auto'>May 25th-July 01st</div>
                        <h1 className='text-[25px] lg:text-[30px] font-[700] text-white tracking-tighter text-center mt-auto'>Bukhara</h1>
                        {/* <p className='text-white text-center font-[200] leading-3'>From: $1450</p> */}
                        <div className='flex justify-center mt-[10px]'>
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                        </div>
                        <div className='text-center'>
                            <button className="text-[13px] font-[700] text-white leading-[50px] lg:leading-[40px] px-[35px] lg:px-[40px] relative z-[1] overflow-hidden mt-[20px] lg:mt-[40px] rounded-[100vmax] button1">
                                <div className="btn1-bg absolute inset-0"></div>
                                <a span className='relative' href="/about-uzbekistan/bukhara/tours">SEE MORE...</a></button>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                
                <SwiperSlide>
                <div className='relative w-full max-w-[400px] aspect-[4/5]'>
                    <Image layout='fill' objectFit='cover' src="https://www.advantour.com/img/uzbekistan/images/tashkent.jpg" alt="img" />
                    <div className='absolute inset-0 bg-lightPurple px-4 lg:px-8 py-8 flex flex-col'>
                        <div className='px-[25px] text-[13px] text-white rounded-[14px] bg-orange leading-[27px] w-max mx-auto'>May 25th-June01st</div>
                        <h1 className='text-[25px] lg:text-[30px] font-[700] text-white tracking-tighter text-center mt-auto'>Tashkent</h1>
                        {/* <p className='text-white text-center font-[200] leading-3'>From: $85</p> */}
                        <div className='flex justify-center mt-[10px]'>
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                        </div>
                        <div className='text-center'>
                            <button className="text-[13px] font-[700] text-white leading-[50px] lg:leading-[40px] px-[35px] lg:px-[40px] relative z-[1] overflow-hidden mt-[20px] lg:mt-[40px] rounded-[100vmax] button1">
                                <div className="btn1-bg absolute inset-0"></div>
                            <a span className='relative' href="/about-uzbekistan/tashkent/tours">SEE MORE...</a></button>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                
                <SwiperSlide>
                <div className='relative w-full max-w-[400px] aspect-[4/5]'>
                    <Image layout='fill' objectFit='cover' src="https://www.advantour.com/img/uzbekistan/images/ferghana.jpg" alt="img" />
                    <div className='absolute inset-0 bg-lightPurple px-4 lg:px-8 py-8 flex flex-col'>
                        <div className='px-[25px] text-[13px] text-white rounded-[14px] bg-orange leading-[27px] w-max mx-auto'>May 25th-June 01st</div>
                        <h1 className='text-[25px] lg:text-[30px] font-[700] text-white tracking-tighter text-center mt-auto'>Fergana</h1>
                        {/* <p className='text-white text-center font-[200] leading-3'>From: $1450</p> */}
                        <div className='flex justify-center mt-[10px]'>
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                        </div>
                        <div className='text-center'>
                            <button className="text-[13px] font-[700] text-white leading-[50px] lg:leading-[40px] px-[35px] lg:px-[40px] relative z-[1] overflow-hidden mt-[20px] lg:mt-[40px] rounded-[100vmax] button1">
                                <div className="btn1-bg absolute inset-0"></div>
                                <a span className='relative' href="/about-uzbekistan/fergana/tours">SEE MORE...</a></button>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                
                <SwiperSlide>
                <div className='relative w-full max-w-[400px] aspect-[4/5]'>
                    <Image layout='fill' objectFit='cover' src="https://www.advantour.com/img/uzbekistan/images/andijan.jpg" alt="img" />
                    <div className='absolute inset-0 bg-lightPurple px-4 lg:px-8 py-8 flex flex-col'>
                        <div className='px-[25px] text-[13px] text-white rounded-[14px] bg-orange leading-[27px] w-max mx-auto'>May 25th-June 01st</div>
                        <h1 className='text-[25px] lg:text-[30px] font-[700] text-white tracking-tighter text-center mt-auto'>Andijan</h1>
                        {/* <p className='text-white text-center font-[200] leading-3'>From: $1450</p> */}
                        <div className='flex justify-center mt-[10px]'>
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                        </div>
                        <div className='text-center'>
                            <button className="text-[13px] font-[700] text-white leading-[50px] lg:leading-[40px] px-[35px] lg:px-[40px] relative z-[1] overflow-hidden mt-[20px] lg:mt-[40px] rounded-[100vmax] button1">
                                <div className="btn1-bg absolute inset-0"></div>
                                <a span className='relative' href="/about-uzbekistan/andijan/tours">SEE MORE...</a></button>
                        </div>
                    </div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className='relative w-full max-w-[400px] aspect-[4/5]'>
                    <Image layout='fill' objectFit='cover' src="https://www.advantour.com/img/uzbekistan/images/jizzakh.jpg" alt="img" />
                    <div className='absolute inset-0 bg-lightPurple px-4 lg:px-8 py-8 flex flex-col'>
                        <div className='px-[25px] text-[13px] text-white rounded-[14px] bg-orange leading-[27px] w-max mx-auto'>May 25th-June 01st</div>
                        <h1 className='text-[25px] lg:text-[30px] font-[700] text-white tracking-tighter text-center mt-auto'>Jizzakh</h1>
                        {/* <p className='text-white text-center font-[200] leading-3'>From: $1450</p> */}
                        <div className='flex justify-center mt-[10px]'>
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                        </div>
                        <div className='text-center'>
                            <button className="text-[13px] font-[700] text-white leading-[50px] lg:leading-[40px] px-[35px] lg:px-[40px] relative z-[1] overflow-hidden mt-[20px] lg:mt-[40px] rounded-[100vmax] button1">
                                <div className="btn1-bg absolute inset-0"></div>
                                <a span className='relative' href="/about-uzbekistan/jizzakh/tours">SEE MORE...</a></button>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                
                <SwiperSlide>
                <div className='relative w-full max-w-[400px] aspect-[4/5]'>
                    <Image layout='fill' objectFit='cover' src="https://www.advantour.com/img/uzbekistan/images/khiva.jpg" alt="img" />
                    <div className='absolute inset-0 bg-lightPurple px-4 lg:px-8 py-8 flex flex-col'>
                        <div className='px-[25px] text-[13px] text-white rounded-[14px] bg-orange leading-[27px] w-max mx-auto'>May 25th-June 01st</div>
                        <h1 className='text-[25px] lg:text-[30px] font-[700] text-white tracking-tighter text-center mt-auto'>Khiva</h1>
                        {/* <p className='text-white text-center font-[200] leading-3'>From: $1450</p> */}
                        <div className='flex justify-center mt-[10px]'>
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                        </div>
                        <div className='text-center'>
                            <button className="text-[13px] font-[700] text-white leading-[50px] lg:leading-[40px] px-[35px] lg:px-[40px] relative z-[1] overflow-hidden mt-[20px] lg:mt-[40px] rounded-[100vmax] button1">
                                <div className="btn1-bg absolute inset-0"></div>
                                <a span className='relative' href="/about-uzbekistan/khiva/tours">SEE MORE...</a></button>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                
                <SwiperSlide>
                <div className='relative w-full max-w-[400px] aspect-[4/5]'>
                    <Image layout='fill' objectFit='cover' src="https://www.advantour.com/img/uzbekistan/images/aralsea.jpg" alt="img" />
                    <div className='absolute inset-0 bg-lightPurple px-4 lg:px-8 py-8 flex flex-col'>
                        <div className='px-[25px] text-[13px] text-white rounded-[14px] bg-orange leading-[27px] w-max mx-auto'>May 25th-June 01st</div>
                        <h1 className='text-[25px] lg:text-[30px] font-[700] text-white tracking-tighter text-center mt-auto'>Aral Sea</h1>
                        {/* <p className='text-white text-center font-[200] leading-3'>From: $1450</p> */}
                        <div className='flex justify-center mt-[10px]'>
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                        </div>
                        <div className='text-center'>
                            <button className="text-[13px] font-[700] text-white leading-[50px] lg:leading-[40px] px-[35px] lg:px-[40px] relative z-[1] overflow-hidden mt-[20px] lg:mt-[40px] rounded-[100vmax] button1">
                                <div className="btn1-bg absolute inset-0"></div>
                                <a span className='relative' href="/about-uzbekistan/aral-sea/tours">SEE MORE...</a></button>
                        </div>
                    </div>
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
