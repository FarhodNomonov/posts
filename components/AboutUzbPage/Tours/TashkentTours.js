import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from "@heroicons/react/outline"
import Footer from '../../Footer';


const TashkentTours = () => {

    return (
        <>
            <div className='absolute w-full top-0 h-[55vh] flex justify-center items-center'>
                <Image src="https://www.advantour.com/img/uzbekistan/tashkent/tashkent-tours.jpg" layout='fill' objectFit='cover' alt="img" />
                <div className='absolute z-[1] inset-0 bg-lightPurple text-center pt-20 grid content-center text-white'>
                    <h1 className="text-white font-beyond text-[40px] leading-[1.5]">Tours in</h1>
                    <h1 className="text-white font-beyond text-[40px] xs:text-[70px] sm:text-[100px] leading-[1.5] -mt-12">Tashkent</h1>
                </div>
            </div>

            <div className='main-div grid grid-cols-4 gap-[30px] py-[50px] mt-[40vh]'>
                <div className='col-span-3 space-y-4'>
                    <h1 className='text-orange'>Tashkent Tours</h1>
                    <h3 className='text-black'>Group Tours and Private Tashkent Trips</h3>
                    <p>Tashkent tours will introduce you a modern city, where every person will find entertainment and cultural events for him/herself. Its architecture combines medieval oriental buildings, austere European architecture, preserved from the Turkestan Governor-Generalship period, Soviet “Khrushchev buildings", and finally, glittering skyscrapers of glass and concrete, buildings of modern business centers, offices and banks, as an evidence of new epoch of independent Uzbekistan. We offer rich and interesting program of Tashkent tours, accommodation at the best hotels, professional guides and interpreters.</p>

                    <div className='py-[50px] flex flex-col gap-12'>

                        <div className='flex gap-8 items-start'>
                            <div className='w-[300px] shrink-0 aspect-[8/9] relative shadow-md'>
                                <Image src="https://www.advantour.com/img/uzbekistan/tours/extention-chimgan-beldersay-m1.jpg" layout='fill' objectFit='cover' alt="img" />
                                <div className='absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4 w-[80%]'>Gulkam Canyon</div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-end gap-3'>
                                        <h1 className='text-orange leading-[1]'>$85</h1>
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
                                <p className='py-4 leading-[2]'>From May to October, Uzbekistan’s mountains appear in front of travellers in all their splendour. Take a day trip out of the city to visit Chimgan and the Gulkam Canyon, admire the dramatic canyon scenery and enjoy a relaxing picnic near the famous waterfalls.</p>
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
                                <Image src="https://www.advantour.com/img/uzbekistan/tours/bulaksu-tour.jpg" layout='fill' objectFit='cover' alt="img" />
                                <div className='absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4 w-[80%]'>Tour to Bulaksu Gorge</div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-end gap-3'>
                                        <h1 className='text-orange leading-[1]'>$85</h1>
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
                                <p className='py-4 leading-[2]'>Tour to Bulaksu Gorge is a mountain adventure along Uzbekistan’s Bulaksu River tract. The one-day trek is a test of endurance when ascending, followed by a pleasant hike through spacious fields with impressive mountain views and a picnic in the meadows alongside cooling river waters. The final stretch of the hike involves an exciting descent down a winding riverbed path which crosses the rapids over small stones.</p>
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
                                <Image src="https://www.advantour.com/img/uzbekistan/tours/urungach-lake-tour.jpg" layout='fill' objectFit='cover' alt="img" />
                                <div className='absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4 w-[80%]'>Tour to Bulaksu Gorge</div>
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
                                <p className='py-4 leading-[2]'>In spring, hundreds of streams flow down from the peaks of the Tien Shan and fill mountain lakes with icy water. Choose a one-day tour to Lake Urungach to take a break from the hustle and bustle of the city in the lap of nature and enjoy the beauty of emerald water, blue sky and green groves.</p>
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

export default TashkentTours