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
                        <Image src="https://www.advantour.com/img/uzbekistan/tours/obi-rakhmat-paltau.jpg" layout='fill' objectFit='cover' alt="img" />
                        <div className='bg-orange text-white absolute top-8 left-8 py-2 px-8 flex flex-col items-center rounded-full'>
                            {/* <span className='text-[24px] font-bold'>01</span> */}
                            <span className='text-[24px] font-bold'>September 2023</span>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-black font-semibold'>The tour is held from mid-May to early October</h3>
                        <p className='leading-[2.14] mt-6 mb-8'>We encourage you to try one of the simpler hikes in the western Tien Shan mountains. This one–day tour to the Obi-Rakhmat grotto and Paltau Waterfall will take you on a walk with a total length of 10 km, where most of the way is along an abandoned dirt road. This tour combines beautiful nature as well as ancient human history. The Neanderthal site is where tools of ancient people, animal bones and human remains have discovered. The farthest point of your route will be the 38-meter-high waterfall on the Paltau River after which you will return.
                            The trail leading to the waterfall will require some dexterity and good general fitness. However, you will be rewarded with a picturesque view of the waterfall among the impressive rocks-formations. The coolness of the river gives respite on a hot day. The bravest can swim under the waterfall – a swim to be remembered!
                            See the Obi-Rakhmat grotto and Paltau Waterfall tour program. It will be a busy day with simple physical activities; an excursion into ancient history and beautiful mountain landscapes!</p>
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