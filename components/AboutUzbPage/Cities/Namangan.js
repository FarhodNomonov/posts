import React from 'react'
import Image from 'next/image';
import Footer from "../../../components/Footer"
import Link from 'next/link';

const Namangan = () => {
    return (
        <>
            <div className='absolute top-0 w-full h-[55vh] flex justify-center items-center'>
                <Image src="https://www.advantour.com/img/uzbekistan/images/namangan.jpg" layout='fill' objectFit='cover' alt="img" />
                <h1 className="text-white font-beyond text-[40px] xs:text-[70px] sm:text-[100px] leading-[1.5] pt-12 absolute inset-0 flex justify-center items-center bg-lightPurple">Namangan</h1>
            </div>z

            <div className='main-div grid grid-cols-4 py-[50px] mt-[40vh]'>

                <div className='col-span-3 space-y-4'>
                    <h1 className='text-orange'>Namangan, Uzbekistan</h1>
                    <h3 className='text-black'>Tours, Attractions and Things To Do in Namangan</h3>
                    
                    <p>Namangan city dates back to the 17th century, when, in the north of the Ferghana Valley, a settlement for local salt miners of ores (naman kann) has appeared. In the 17th century after the devastating earthquake residents of Aksikent (Ahsykenta) moved here. Aksikent is the ancient city, which once was the center of the Fergana Valley. In the middle of the 18th century the city became the administrative center of the province (viloyat).</p>

                    <p>In 1875, Namangan became the part of Russia. At that time the new city was laid under the regular plan. New city was separated from the old part by the fortress, from which, according to established order, streets were laid in a semicircle. In the early twentieth century, Namangan was the second most populous city and center of cotton processing in the Fergana Valley, and then the third largest in the country, after Tashkent and Samarkand.</p>
                    
                    <p>Currently, Namangan is developed as the center of light and food industries. The city abounds in green orchards and parks. Not far from Namangan there are ruins of the ancient city of Aksikent. Archaeological researches state that the city had a citadel and strong fortifications. Trade and handicraft production was well-developed here. Before the thirteenth century Aksikent was the capital of the Fergana Valley. But then it was destroyed by the Mongols, and in the seventeenth century, the strongest earthquake destroyed it to the ground.</p>
                    
                    <h3 className='text-black'>Namangan Pictures</h3>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/images/namangan.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="/images/bahodir.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'> 
                            <Image src="/images/vokzal.png" layout='fill' objectFit='cover' alt="img" />
                        </div>
                    </div>
                </div>

                <div className='border border-gray-300 p-4 rounded-md h-max'>
                    <Link href="/about-uzbekistan/fergana/tours" className='border'>
                        <a className='text-black hover:text-red-500 transition-all cursor-pointer'>Namangan Tours</a>
                    </Link>
                </div>

            </div>

            <Footer />


        </>
    )
}


export default Namangan