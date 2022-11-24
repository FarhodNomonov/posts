import React, { useEffect, useState } from 'react'
import SwiperHotelList from './Swiper/Swiper'

const Container5 = () => {

    return (
        <div className='main-div py-[120px] ml:py-[30px] bg-white'>
            <h1 className='text-[30px] text-black text-center mb-2'>RECOMMENDED <span className='text-orange'>TOURS</span></h1>

                <div className='relative mt-[50px]'>
                    <SwiperHotelList />
                </div>

        </div>
    )
}

export default Container5