import React from 'react'
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';


const Container4 = () => {
    return (
        <div className='main-div'>
            <h1 className='text-[30px] text-black text-center mb-2'><span className='text-orange'>THE BEST</span> OFFERS WITH <span className='text-orange'>ROOMS</span></h1>

            <div className='mt-[90px] grid lg:grid-cols-2 gap-[30px]'>
                <div className='grid gap-[30px] xs:grid-cols-2'>
                    <div className='relative w-full lg:max-w-[255px] aspect-[5/6] xs:aspect-auto lg:aspect-[5/6]'>
                        <Image src="/images/offer1.webp" layout='fill' objectFit='cover' alt="img" />
                        <div className='absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4'>GRAND CASTLE</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-end gap-3'>
                            <h1 className='text-orange leading-[1]'>$70</h1>
                            <span>per night</span>
                        </div>
                        <div className='flex mt-[10px]'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[2]'>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
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
                        <a href="#" className='text-black mt-auto text'>Read more</a>
                    </div>
                </div>

                <div className='grid gap-[30px] xs:grid-cols-2'>
                    <div className='relative w-full lg:max-w-[255px] aspect-[5/6] xs:aspect-auto lg:aspect-[5/6]'>
                        <Image src="/images/offer2.webp" layout='fill' objectFit='cover' alt="img" />
                        <div className='absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4'>TURKEY HILLS</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-end gap-3'>
                            <h1 className='text-orange leading-[1]'>$50</h1>
                            <span>per night</span>
                        </div>
                        <div className='flex mt-[10px]'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[2]'>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
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
                        <a href="#" className='text-black mt-auto text'>Read more</a>
                    </div>
                </div>

                <div className='grid gap-[30px] xs:grid-cols-2'>
                    <div className='relative w-full lg:max-w-[255px] aspect-[5/6] xs:aspect-auto lg:aspect-[5/6]'>
                        <Image src="/images/offer3.webp" layout='fill' objectFit='cover' alt="img" />
                        <div className='absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4'>ISLAND DREAM</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-end gap-3'>
                            <h1 className='text-orange leading-[1]'>$70</h1>
                            <span>per night</span>
                        </div>
                        <div className='flex mt-[10px]'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[2]'>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
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
                        <a href="#" className='text-black mt-auto text'>Read more</a>
                    </div>
                </div>

                <div className='grid gap-[30px] xs:grid-cols-2'>
                    <div className='relative w-full lg:max-w-[255px] aspect-[5/6] xs:aspect-auto lg:aspect-[5/6]'>
                        <Image src="/images/offer4.webp" layout='fill' objectFit='cover' alt="img" />
                        <div className='absolute bg-orange bottom-8 text-[18px] text-white font-semibold px-4'>TRAVEL LIGHT</div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-end gap-3'>
                            <h1 className='text-orange leading-[1]'>$70</h1>
                            <span>per night</span>
                        </div>
                        <div className='flex mt-[10px]'>
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                            <StarIcon className='w-4 text-orange' />
                        </div>
                        <p className='py-4 leading-[2]'>Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor.</p>
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
                        <a href="#" className='text-black mt-auto text'>Read more</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Container4