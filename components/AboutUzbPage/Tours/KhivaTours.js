import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from "@heroicons/react/outline"
import Footer from '../../Footer';


const KhivaTours = () => {

    return (
        <>
            <div className='absolute w-full top-0 h-[55vh] flex justify-center items-center'>
                <Image src="https://www.advantour.com/img/uzbekistan/samarkand/samarkand-tours.jpg" layout='fill' objectFit='cover' alt="img" />
                <div className='absolute z-[1] inset-0 bg-lightPurple text-center pt-20 grid content-center text-white'>
                    <h1 className="text-white font-beyond text-[40px] leading-[1.5]">Tours in</h1>
                    <h1 className="text-white font-beyond text-[40px] xs:text-[70px] sm:text-[100px] leading-[1.5] -mt-12">Khiva</h1>
                </div>
            </div>

            <div className='main-div grid grid-cols-4 gap-[30px] py-[50px] mt-[40vh]'>
                <div className='col-span-3 space-y-4'>
                    <h1 className='text-orange'>Khiva Tours</h1>
                    <h3 className='text-black'>Group Tours and Private Khiva Trips</h3>
                    <p>Khiva tours is a visit to the ancient fairy-tale town that has been ideally preserved and practically not changed in the course of the centuries. You will feel the atmosphere of old Khiva, the unique place with outstanding number of sights per square meter as soon as you are surrounded by mighty fortress walls of Ichan-Qala - the historical inner city listed by the UNESCO World Heritage List.</p>

                    <div className='py-[50px] flex flex-col gap-12'>

                        <div className='flex gap-8 items-start'>
                            <div className='w-[300px] shrink-0 aspect-[8/9] relative shadow-md'>
                                <Image src="https://www.advantour.com/img/uzbekistan/tours/city-tour-khiva.jpg" layout='fill' objectFit='cover' alt="img" />
                                <div className='absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4 w-[80%]'>Khiva City Tour</div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-end gap-3'>
                                        <h1 className='text-orange leading-[1]'>$120</h1>
                                        <span>starting</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <div>
                                            <p className='text-[12px] text-black font-semibold'>VERY GOOD</p>
                                            <p className='text-[12px]'>100 reviews</p>
                                        </div>
                                        <div className='w-[50px] h-[50px] bg-orange rounded-full flex justify-center items-center text-white text-[20px] font-bold'>8.1</div>
                                    </div>
                                </div>
                                <div className='flex mt-[10px]'>
                                    <StarIcon className='w-4 text-orange' />
                                    <StarIcon className='w-4 text-orange' />
                                    <StarIcon className='w-4 text-orange' />
                                    <StarIcon className='w-4 text-orange' />
                                    <StarIcon className='w-4 text-orange' />
                                </div>
                                <p className='py-4 leading-[2]'>Spend a day learning about this open-air museum, an ancient Silk Road oasis in the Kyzylkum Desert. The Khiva City Tour will cover all the main sights and beauties of this unique city, all in one day.</p>
                                <div className='flex gap-4 mb-4'>
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
                                <button className='text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-start mt-auto rounded-[100vmax]'>Details...</button>
                            </div>
                        </div>

                        <div className='flex gap-8'>
                            <div className='w-[300px] shrink-0 aspect-[8/9] relative shadow-md'>
                                <Image src="https://www.advantour.com/img/uzbekistan/tours/week-end-tour-1.jpg" layout='fill' objectFit='cover' alt="img" />
                                <div className='absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4 w-[80%]'>2-day Tour to Khiva from Tashkent</div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-end gap-3'>
                                        <h1 className='text-orange leading-[1]'>$70</h1>
                                        <span>starting</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <div>
                                            <p className='text-[12px] text-black font-semibold'>VERY GOOD</p>
                                            <p className='text-[12px]'>100 reviews</p>
                                        </div>
                                        <div className='w-[50px] h-[50px] bg-orange rounded-full flex justify-center items-center text-white text-[20px] font-bold'>8.1</div>
                                    </div>
                                </div>
                                <div className='flex mt-[10px]'>
                                    <StarIcon className='w-4 text-orange' />
                                    <StarIcon className='w-4 text-orange' />
                                    <StarIcon className='w-4 text-orange' />
                                    <StarIcon className='w-4 text-orange' />
                                    <StarIcon className='w-4 text-orange' />
                                </div>
                                <p className='py-4 leading-[2]'>This Two-Day Khiva Tour is one of our most popular short tours. From Tashkent, fly to Khiva and take two days to explore this ancient city and its many incredible sights.</p>
                                <div className='flex gap-4 mb-4'>
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
                                <button className='text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-start mt-auto rounded-[100vmax]'>Details...</button>
                            </div>
                        </div>

                        <div className='flex gap-8'>
                            <div className='w-[300px] shrink-0 aspect-[8/9] relative shadow-md'>
                                <Image src="https://www.advantour.com/img/uzbekistan/tours/kunya-urgench-darvaza.jpg" layout='fill' objectFit='cover' alt="img" />
                                <div className='absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4 w-[80%]'>Tour to Kunya-Urgench and Darvaza (from Khiva)</div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-end gap-3'>
                                        <h1 className='text-orange leading-[1]'>$95</h1>
                                        <span>starting</span>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <div>
                                            <p className='text-[12px] text-black font-semibold'>VERY GOOD</p>
                                            <p className='text-[12px]'>100 reviews</p>
                                        </div>
                                        <div className='w-[50px] h-[50px] bg-orange rounded-full flex justify-center items-center text-white text-[20px] font-bold'>8.1</div>
                                    </div>
                                </div>
                                <div className='flex mt-[10px]'>
                                    <StarIcon className='w-4 text-orange' />
                                    <StarIcon className='w-4 text-orange' />
                                    <StarIcon className='w-4 text-orange' />
                                    <StarIcon className='w-4 text-orange' />
                                    <StarIcon className='w-4 text-orange' />
                                </div>
                                <p className='py-4 leading-[2]'>Cross Turkmenistan’s desert to get to two main sights, the ruins of Kunya-Urgench and the Darvaza Gas Crater. This is the best tour for combining Turkmenistan’s cultural history with a night in nature, in the Karakum Desert.</p>
                                <div className='flex gap-4 mb-4'>
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
                                <button className='text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-start mt-auto rounded-[100vmax]'>Details...</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='border border-gray-300 p-4 rounded-md h-max'>
                    <Link href="/about-uzbekistan/tashkent/tours" className='border'>
                        <a className='text-black hover:text-red-500 transition-all cursor-pointer'>Cities List</a>
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default KhivaTours