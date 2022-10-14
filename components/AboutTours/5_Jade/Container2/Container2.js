import React from 'react'
import Image from 'next/image';

const Container2 = () => {
    return (
        <div className='main-div grid grid-cols-3 py-[100px]  gap-[20px]'>
            {/* left */}
            <div className='col-span-2 space-y-12'>

                {/* <h1>Yangiabad – the Jewel of Uzbekistan’s Mountains</h1> */}

                <div className='flex flex-col gap-2'>
                    <div className='w-full aspect-video relative'>
                        <Image src="https://www.advantour.com/img/uzbekistan/tours/yangiabad-tour.jpg" layout='fill' objectFit='cover' alt="img" />
                        <div className='bg-orange text-white absolute top-8 left-8 py-2 px-8 flex flex-col items-center rounded-full'>
                            {/* <span className='text-[24px] font-bold'>01</span> */}
                            <span className='text-[24px] font-bold'>October,2022</span>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-black font-semibold'>Recommended time of year: May to September</h3>
                        <p className='leading-[2.14] mt-6 mb-8'>With their clean air, bright blue skies, beautiful waterfalls, and scent of pine trees and flowering herbs, the Yangiabad Mountains are a real treasure for hikers.The Yangiabad Tourist Lodge is located in the Chatkal Biosphere Reserve, about 120km (75 miles) from Tashkent, at an elevation of about 1,500m (5,000 feet). The lodge has guest rooms, a bar, a restaurant, and even a disco and an entertainment programme. Its location among the pine trees, surrounded by the Yangiabad Mountains, makes it an ideal escape from the city – a place to enjoy nature without sacrificing any of the comforts of civilization.</p>
                        {/* <a className='text-[14px] font-[700] text-orange hover:text-darkPurple transition-all' href="#">READ MORE</a> */}
                    </div>
                </div>

            </div>

            {/* right */}
            <div className="col-span-1 flex flex-col items-start ml-[50px]">
                <h3 className='text-black font-semibold text-[18px] mb-[40px]'>Other Tours</h3>
                <button type = "button" className='text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]'>Yangiabad Tour</button>
                <button type = "button" className='text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]'>Chimgan & Charvak Tour</button>
                <button type = "button" className='text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]'>Bulaksu Tour</button>
                <button type = "button" className='text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]'>Tour to Jade Lakes (Urungach)</button>
                <button type = "button" className='text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]'>Obi-Rakhmat and Paltau</button>
                <button type = "button" className='text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]'>Tour to Bulaksu Gorge</button>
                <button type = "button" className='text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]'>Jade Lakes</button>
                <button type = "button" className='text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]'>Aydarkul Lake </button>
            </div>

        </div>
    )
}

export default Container2