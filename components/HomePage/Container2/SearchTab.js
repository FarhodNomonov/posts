import React, { useState } from 'react'
import Image from 'next/image';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'


import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const SearchTab = () => {

    const [isDateRangeOpen, setIsDateRangeOpen] = useState(false)
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date().getTime(),
            endDate: new Date().getTime() + 1000 * 60 * 60 * 24 * 3,
            key: 'selection'
        }
    ]);

    return (
        <div className=' relative bottom-[100px] flex lg:block'>
            {/* tab */}
            <div className='xs:w-1/3 lg:max-w-[1140px] lg:w-full lg:mx-auto border-r lg:border-r-0 text-black'>
                <div className='flex flex-col lg:flex-row w-full bg-white h-full lg:h-[100px] lg:rounded-t-[100vmax] overflow-hidden'>
                    <div className='flex items-center justify-center gap-2 bg-orange p-[10px] xs:p-[20px] lg:flex-1'>
                        <div className='w-8 h-8 relative'>
                            <Image className='filter brightness-[200%] grayscale-[100%]' layout='fill' objectFit='contain' src="/images/searchIcons/hotel.webp" alt="img" />
                        </div>
                        <span className='text-[14px] hidden xs:block font-[700] uppercase text-center text-white'>Hotels</span>
                    </div>
                    <div className='group flex items-center justify-center gap-2 cursor-pointer hover:bg-orange transition-all duration-200  p-[10px] xs:p-[20px] lg:flex-1'>
                        <div className='w-8 h-8 relative'>
                            <Image className='group-hover:brightness-[200%] group-hover:grayscale-[100%]' layout='fill' objectFit='contain' src="/images/searchIcons/bus.webp" alt="img" />
                        </div>
                        <span className='text-[14px] hidden xs:block font-[700] uppercase text-center group-hover:text-white'>car rentals</span>
                    </div>
                    <div className='group flex items-center justify-center gap-2 cursor-pointer hover:bg-orange transition-all duration-200  p-[10px] xs:p-[20px] lg:flex-1'>
                        <div className='w-8 h-8 relative'>
                            <Image className='group-hover:brightness-[200%] group-hover:grayscale-[100%]' layout='fill' objectFit='contain' src="/images/searchIcons/flight.webp" alt="img" />
                        </div>
                        <span className='text-[14px] hidden xs:block font-[700] uppercase text-center group-hover:text-white'>flights</span>
                    </div>
                    <div className='group flex items-center justify-center gap-2 cursor-pointer hover:bg-orange transition-all duration-200  p-[10px] xs:p-[20px] lg:flex-1'>
                        <div className='w-8 h-8 relative'>
                            <Image className='group-hover:brightness-[200%] group-hover:grayscale-[100%]' layout='fill' objectFit='contain' src="/images/searchIcons/palm.webp" alt="img" />
                        </div>
                        <span className='text-[14px] hidden xs:block font-[700] uppercase text-center group-hover:text-white'>trips</span>
                    </div>
                    {/* <div className='group flex items-center justify-center gap-2 cursor-pointer hover:bg-orange transition-all duration-200  p-[10px] xs:p-[20px] lg:flex-1'>
                        <div className='w-8 h-8 relative'>
                            <Image className='group-hover:brightness-[200%] group-hover:grayscale-[100%]' layout='fill' objectFit='contain' src="/images/searchIcons/cruise.webp" alt="img" />
                        </div>
                        <span className='text-[14px] hidden xs:block font-[700] uppercase text-center group-hover:text-white'>cruises</span>
                    </div> */}
                    <div className='group flex items-center justify-center gap-2 cursor-pointer hover:bg-orange transition-all duration-200  p-[10px] xs:p-[20px] lg:flex-1'>
                        <div className='w-8 h-8 relative'>
                            <Image className='group-hover:brightness-[200%] group-hover:grayscale-[100%]' layout='fill' objectFit='contain' src="/images/searchIcons/activities.webp" alt="img" />
                        </div>
                        <span className='text-[14px] hidden xs:block font-[700] uppercase text-center group-hover:text-white'>activities</span>
                    </div>
                </div>
            </div>

            {/* form */}
            <div className='lbg w-full xs:w-2/3 lg:w-full'>
                <div className=' flex items-center lg:h-[192px] main-div'>
                    <form className='flex flex-col lg:flex-row lg:items-center gap-4 w-full text-gray-500 py-4'>
                        <label className='flex flex-col lg:flex-[3]'>
                            <span className='text-[14px] font-[700] mb-[14px] text-white'>DESTINATION</span>
                            <input className='w-full p-4' type="text" />
                        </label>

                        <div className='lg:self-end lg:flex-[2] xs:relative'>
                            <label onClick={() => setIsDateRangeOpen(!isDateRangeOpen)} className='flex bg-white h-[53px] gap-[30px] items-center px-4 relative cursor-pointer'>
                                <span className='text-[13px] font-[500] flex-1 text-center'>{format(dateRange[0].startDate, "dd/MM/yy")}</span>
                                <span className='text-[12px] font-[500]'>to</span>
                                <span className='text-[13px] font-[500] flex-1 text-center'>{dateRange[0].endDate ? format(dateRange[0].endDate, "dd/MM/yy") : "Check out"}</span>
                            </label>
                            {isDateRangeOpen && (
                                <div className='absolute xs:top-[110%] xs:left-0 right-0'>
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDateRange([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={dateRange}
                                    />
                                </div>
                            )}
                        </div>

                        <label className='flex flex-col lg:flex-1'>
                            <span className='text-[14px] font-[700] mb-[14px] text-white'>ADULTS</span>
                            <input className='w-full p-4' min={1} type="number" placeholder='1' />
                        </label>
                        <label className='flex flex-col lg:flex-1'>
                            <span className='text-[14px] font-[700] mb-[14px] text-white'>CHILDREN</span>
                            <input className='w-full p-4' min={0} type="number" placeholder='0' />
                        </label>
                        <button className='text-[14px] font-[700] text-white p-4 bg-[#31124b] transition-all hover:shadow hover:shadow-[#31124b] px-[46px] lg:self-end'>SEARCH...</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default SearchTab