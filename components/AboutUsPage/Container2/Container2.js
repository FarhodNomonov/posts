import React from 'react'
import Image from 'next/image';

const Container2 = () => {
    return (
        <>
            <div className='bg-[#a5a5a5]/10 py-[80px]'>
                <div className='main-div flex items-start flex-col lg:flex-row'>
                    <div className='relative w-full lg:w-[55%] aspect-square'>
                        <Image src="/images/lake.webp" layout='fill' objectFit='contain' alt="img" />
                    </div>
                    <div className='w-full lg:w-[45%]'>
                        <h2 className='text-slate-900 text-[24px] sm:text-[30px] font-bold'>WE HAVE THE BEST TOURS</h2>
                        <p className='text-[14px] mt-[20px] lg:mt-[60px] leading-[2] text-[#929191]'>Our company offers whole range of tour services in Uzbekistan: reservation of hotels, air tickets, transportation and sightseeing services, visa support (letter of invitation) services, organization of meetings, seminars and conferences, services of French, German, Italian, Spanish, English, Turkish and Russian speaking guides, preparation and organization of folklore concerts and holiday festivals, and many, many others… </p>
                        <p className='text-[14px] leading-[2] text-[#929191]'><span className='text-orange font-semibold'>“AKIF TOURS SILK ROAD”</span> brings travellers to experience Central Asia and Europe in a unique way through unparalleled access and insights into a world steeped in history and at the crossroads of modernity. Hundreds of tours over two decades continue to affirm how excellent service and organisation attracts people from all around the world to discover these ancient lands, often to return again. </p>
                        <button className="text-[14px] font-[700] text-white leading-[53px] px-[46px] relative overflow-hidden mt-[30px] lg:mt-[80px] rounded-[100vmax] button1"><div className="btn1-bg absolute inset-0 -z-[1]"></div>EXPLORE NOW ...</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Container2