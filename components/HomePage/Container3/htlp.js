import React from 'react'
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';

const Container3 = () => {
    return (
        <div className='main-div mt-[95vh]'>
            {
            /* <h1 className='text-center'>We have the best tours</h1>
            <h3 className='italic px-[20px] md:px-[95px] py-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.</h3> */}
            <div className='flex flex-col md:flex-row items-center gap-[30px] mt-[50px]'>
                <div className='relative w-full max-w-[350px] aspect-[4/5]'>
                    <Image layout='fill' objectFit='cover' src="/images/xintro_1.jpg.pagespeed.ic.-9buXrHVgR.webp" alt="img" />
                    <div className='absolute inset-0 bg-lightPurple px-4 lg:px-8 py-8 flex flex-col'>
                        <div className='px-[39px] text-[13px] text-white rounded-[14px] bg-orange leading-[27px] w-max mx-auto'>May 25th-June 01st</div>
                        <h1 className='text-[40px] lg:text-[50px] font-[700] text-white tracking-tighter text-center mt-auto'>Samarkand</h1>
                        <p className='text-white text-center leading-3'>From: $1450</p>
                        <div className='flex justify-center mt-[10px]'>
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                        </div>
                        <div className='text-center'>
                            <button className="text-[14px] font-[700] text-white leading-[40px] lg:leading-[53px] px-[35px] lg:px-[46px] relative z-[1] overflow-hidden mt-[20px] lg:mt-[40px] rounded-[100vmax] button1"><div className="btn1-bg absolute inset-0"></div><span className='relative'>SEE MORE ...</span></button>
                        </div>
                    </div>
                </div>
                <div className='relative w-full max-w-[350px] aspect-[4/5]'>
                    <Image layout='fill' objectFit='cover' src="/images/xintro_2.jpg.pagespeed.ic.H2_6VYTDjP.webp" alt="img" />
                    <div className='absolute inset-0 bg-lightPurple px-4 lg:px-8 py-8 flex flex-col'>
                        <div className='px-[39px] text-[13px] text-white rounded-[14px] bg-orange leading-[27px] w-max mx-auto'>May 25th-June 01st</div>
                        <h1 className='text-[40px] lg:text-[50px] font-[700] text-white tracking-tighter text-center mt-auto'>Bukhara</h1>
                        <p className='text-white text-center leading-3'>From: $1450</p>
                        <div className='flex justify-center mt-[10px]'>
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                        </div>
                        <div className='text-center'>
                            <button className="text-[14px] font-[700] text-white leading-[40px] lg:leading-[53px] px-[35px] lg:px-[46px] relative z-[1] overflow-hidden mt-[20px] lg:mt-[40px] rounded-[100vmax] button1"><div className="btn1-bg absolute inset-0"></div><span className='relative'>SEE MORE ...</span></button>
                        </div>
                    </div>
                </div>
                <div className='relative w-full max-w-[350px] aspect-[4/5]'>
                    <Image layout='fill' objectFit='cover' src="/images/xintro_3.jpg.pagespeed.ic.uuS_fSaI4i.webp" alt="img" />
                    <div className='absolute inset-0 bg-lightPurple px-4 lg:px-8 py-8 flex flex-col'>
                        <div className='px-[39px] text-[13px] text-white rounded-[14px] bg-orange leading-[27px] w-max mx-auto'>May 25th-June 01st</div>
                        <h1 className='text-[40px] lg:text-[50px] font-[700] text-white tracking-tighter text-center mt-auto'>Tashkent</h1>
                        <p className='text-white text-center leading-3'>From: $1450</p>
                        <div className='flex justify-center mt-[10px]'>
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                            <StarIcon className='w-6 text-orange' />
                        </div>
                        <div className='text-center'>
                            <button className="text-[14px] font-[700] text-white leading-[40px] lg:leading-[53px] px-[35px] lg:px-[46px] relative z-[1] overflow-hidden mt-[20px] lg:mt-[40px] rounded-[100vmax] button1"><div className="btn1-bg absolute inset-0"></div><span className='relative'>SEE MORE ...</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container3