import React from 'react'
import Image from 'next/image';
import Footer from "../../../components/Footer"
import Link from 'next/link';

const Bukhara = () => {
    return (
        <>
                <div className='absolute top-0 w-full h-[55vh] flex justify-center items-center'>
                    <Image src="https://www.advantour.com/img/uzbekistan/images/bukhara.jpg" layout='fill' objectFit='cover' alt="img" />
                    <h1 className="text-white font-beyond text-[40px] xs:text-[70px] sm:text-[100px] leading-[1.5] pt-12 absolute inset-0 flex justify-center items-center bg-lightPurple">Bukhara</h1>
                </div>

            <div className='main-div grid grid-cols-4 py-[50px] mt-[40vh]'>

                <div className='col-span-3 space-y-4'>
                    <h1 className='text-orange'>Bukhara, Uzbekistan</h1>
                    <h3 className='text-black'>Tours, Attractions and Things To Do in Bukhara</h3>
                    <p>Bukhara is one of the most ancient cities of Uzbekistan, situated on a sacred hill, the place where sacrifices were made by fire-worshippers in springtime. This city was mentioned in a holy book "Avesto". Bukhara city is supposed to be founded in the 13th cent. B.C. during the reign of Siyavushids who came to power 980 years before Alexander the Great. The name of Bukhara originates from the word "vihara" which means "monastery" in Sanskrit. The city was once a large commercial center on the Great Silk Road.</p>

                    <p>Bukhara lies west of Samarkand and was once a center of learning renowned throughout the Islamic world. It is the hometown of the great Sheikh Bakhouddin Nakshbandi. He was a central figure in the development of the mystical Sufi approach to philosophy, religion and Islam. In Bukhara there are more than 350 mosques and 100 religious colleges. Its fortunes waxed and waned through succeeding empires until it became one of the great Central Asian Khanates in the 17th century.</p>

                    <p>Bukhara with more than 140 architectural monuments is a "town museum" dating back to the Middle Ages. 2,300 years later, ensembles like Poi-Kalyan, Ismail Samani Mausoleum, Ark, Lyabi-Khauz are attracting a lot of attention. The city consists of narrow streets, green parks and gardens, historical and architectural monuments belong to the different epochs, but locate very close to each other.</p>


                    <h3 className='text-black'>Bukhara Pictures</h3>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/bukhara/ark-fortress1.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/bukhara/samanids-mausoleum1.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/bukhara/nadir-divan-begi-madrasah1.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                    </div>

                </div>

                <div className='border border-gray-300 p-4 rounded-md h-max'>
                    <Link href="/about-uzbekistan/bukhara/tours" className='border'>
                        <a className='text-black hover:text-red-500 transition-all cursor-pointer'>Bukhara Tours</a>
                    </Link>
                </div>

            </div>

            <Footer />


        </>
    )
}


export default Bukhara