import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from "@heroicons/react/outline"
import Footer from '../../Footer';


const AralSeaTours = () => {

    return (
        <>
            <div className='absolute w-full top-0 h-[55vh] flex justify-center items-center'>
                <Image src="https://www.advantour.com/img/uzbekistan/aral/aral-sea-tours.jpg" layout='fill' objectFit='cover' alt="img" />
                <div className='absolute z-[1] inset-0 bg-lightPurple text-center pt-20 grid content-center text-white'>
                    <h1 className="text-white font-beyond text-[40px] leading-[1.5]">Tours in</h1>
                    <h1 className="text-white font-beyond text-[40px] xs:text-[70px] sm:text-[100px] leading-[1.5] -mt-10">Aral Sea</h1>
                </div>
            </div>

            <div className='main-div grid grid-cols-4 gap-[30px] py-[50px] mt-[40vh]'>
                <div className='col-span-3 space-y-4'>
                    <h1 className='text-orange'>Aral Sea Tours</h1>
                    <h3 className='text-black'>Group Tours and Private Aral Sea Trips</h3>
                    <p>Aral Sea tours will take you to the shore line of the salt lake that once was the fourth largest sea in the world and is drastically drying nowadays. You will see fantastic Marsian landscapes of Karakum desert and Ustyurt plateau, you will drive on the dried seabed of the Aral and visit the "ships cemetery". Feel the tragic beauty of the Aral Sea until it is gone forever.</p>

                    <p>Today, on the place of Aral Sea you will see sandy and salty desert that people named as Aralkum (kum means sand). It has become an open sky museum with rusty ships. Despite ecological tragedy in the region, the nature of Aral Sea remains impressive. Adventurous Aral Sea tours will be appreciated by those who look for off the beaten track destinations and unusual experiences. We have developed individual tours to the Aral Sea with interesting excursion programs, where you will be accompanied by professional guides and tour leaders, and enjoy comfort to the extent it is possible.</p>

                    <div className='py-[50px] flex flex-col gap-12'>

                        <div className='flex gap-8 items-start'>
                            <div className='w-[300px] shrink-0 aspect-[8/9] relative shadow-md'>
                                <Image src="https://www.advantour.com/img/uzbekistan/tours/aral-barsa-kelmes-tour.jpg" layout='fill' objectFit='cover' alt="img" />
                                <div className='absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4 w-[80%]'>Aral Sea and Barsa-Kelmes Tour</div>
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
                                <p className='py-4 leading-[2]'>Aral Sea and Barsa-Kelmes Tour is a three-day adventure in remote Karakalpakstan. Trip highlights include overnighting in a Karakalpak yurt, visiting the famous Muynak Ship Graveyard, driving among the cliffs of Ustyurt Plateau and searching for fossils in the salty expanse of Barsa-Kelmes.</p>
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
                                <Image src="https://www.advantour.com/img/uzbekistan/tours/uzbekistan-tour-4.jpg" layout='fill' objectFit='cover' alt="img" />
                                <div className='absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4 w-[80%]'>Oasis of the Medieval East</div>
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
                                <p className='py-4 leading-[2]'>Travel from the oases of medieval Uzbekistan to the modern day with this tour, which goes through the main sights of Khiva, Bukhara, and Samarkand, and also visits the Savitsky Museum in Nukus and the ship graveyard in what used to be the Aral Sea at Nukus.</p>
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

export default AralSeaTours