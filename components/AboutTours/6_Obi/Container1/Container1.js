import Image from 'next/image'
import React from 'react'

const Container1 = () => {
    return (
        <div className=''>
            <div className='relative h-[55vh] flex justify-center items-center'>
                <Image src="/images/about-bg.webp" layout='fill' objectFit='cover' alt="img" />
                <h1 className='absolute z-10 text-white text-[50px] xs:text-[60px] xs:mt-20'>The Jewel of Uzbekistan’s Mountains</h1>
            </div>
        </div>
    )
}

export default Container1