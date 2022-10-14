import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from "@heroicons/react/outline"
import Footer from '../../Footer';


const BukharaTours = () => {

    return (
        <>
            <div className='absolute w-full top-0 h-[55vh] flex justify-center items-center'>
                <Image src="https://www.advantour.com/img/uzbekistan/samarkand/samarkand-tours.jpg" layout='fill' objectFit='cover' alt="img" />
                <div className='absolute z-[1] inset-0 bg-lightPurple text-center pt-20 grid content-center text-white'>
                    <h1 className="text-white font-beyond text-[40px] leading-[1.5]">Tours in</h1>
                    <h1 className="text-white font-beyond text-[40px] xs:text-[70px] sm:text-[100px] leading-[1.5] -mt-12">Bukhara</h1>
                </div>
            </div>

            <div className='main-div grid grid-cols-4 gap-[30px] py-[50px] mt-[40vh]'>
                <div className='col-span-3 space-y-4'>
                    <h1 className='text-orange'>Bukhara Tours</h1>
                    <h3 className='text-black'>Group Tours and Private Bukhara Trips</h3>
                    <p>Bukhara tours is a travel to the real city-museum. Its historical center is included in the UNESCO World Heritage List. There are hundreds of medieval monuments in and around Bukhara. Apart from that, the city is known for a great number of Muslim sanctuaries. The Mausoleum of Samanids, Kalyan Minaret, Ark city citadel, Chor Bakr and other sights will be revealed to you in individual tours around Bukhara accompanied with fascinating stories from our experienced guides.</p>
                    <p>Advantour offers tours to Bukhara with variety of sightseeing programs including visits to Holy Bukhara, the ancient fortress city in Central Asia with well-preserved architectural monuments of the oriental Middle Ages. Here you will find a lot of Muslim mosques and tombs of Islamic saints: it is not for nothing that Bukhara is called "the support of Islam." You will find rich and interesting programs of tours to Bukhara, accommodation at the best hotels, professional guides and interpreters.</p>

                    <div className='py-[50px] flex flex-col gap-12'>

                        <div className='flex gap-8 items-start'>
                            <div className='w-[300px] shrink-0 aspect-[8/9] relative shadow-md'>
                                <Image src="https://www.advantour.com/img/uzbekistan/tours/weekend-tour.jpg" layout='fill' objectFit='cover' alt="img" />
                                <div className='absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4 w-[80%]'>Aydarkul and Sarmishsay Tour</div>
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
                                <p className='py-4 leading-[2]'>This active short tour takes you to Sharmishsay, with a unique gallery of over 10,000 petroglyphs. Then, experience a taste of the nomadic life, with a visit to Aydarkul Lake, where you can go swimming, ride a camel, and stay in a yurt.</p>
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
                                <Image src="https://www.advantour.com/img/uzbekistan/tours/aydarkul-tour.jpg" layout='fill' objectFit='cover' alt="img" />
                                <div className='absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4 w-[80%]'>Tour to Aydarkul Lake</div>
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
                                <p className='py-4 leading-[2]'>Travel to the edge of the Kyzylkum Desert, to Aydarkul Lake. See the religious and cultural sights of Nurata, and then spend a night in a yurt, where you can ride a camel and experience nomadic life for yourself.</p>
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
                                <Image src="https://www.advantour.com/img/uzbekistan/tours/ecocenter-jeyran.jpg" layout='fill' objectFit='cover' alt="img" />
                                <div className='absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4 w-[80%]'>Excursion to Jeyran Ecocenter from Bukhara</div>
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
                                <p className='py-4 leading-[2]'>Get closer to the wild nature of Uzbekistan, even if just for a day with this trip to the Jeyran Ecocenter. The center is home to many threatened and endangered species that are native to Uzbekistan, and the nearby salt lakes are good for seeing wildlife in their native habitats.</p>
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

export default BukharaTours