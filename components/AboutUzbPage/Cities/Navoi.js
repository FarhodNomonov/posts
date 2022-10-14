import React from 'react'
import Image from 'next/image';
import Footer from "../../../components/Footer"
import Link from 'next/link';

const Navoi = () => {
    return (
        <>
            <div className='absolute top-0 w-full h-[55vh] flex justify-center items-center'>
                <Image src="https://www.advantour.com/img/uzbekistan/images/namangan.jpg" layout='fill' objectFit='cover' alt="img" />
                <h1 className="text-white font-beyond text-[40px] xs:text-[70px] sm:text-[100px] leading-[1.5] pt-12 absolute inset-0 flex justify-center items-center bg-lightPurple">Namangan</h1>
            </div>z

            <div className='main-div grid grid-cols-4 py-[50px] mt-[40vh]'>

                <div className='col-span-3 space-y-4'>
                    <h1 className='text-orange'>Navoi, Uzbekistan</h1>
                    <h3 className='text-black'>Tours, Attractions and Things To Do in Navoi</h3>
                    
                    <p>Navoi is the real oasis in the steppe. It is the youngest city of the country. Its construction was started by the Government Decree in 1958. It was named after the great Uzbek poet, scientist and state figure Alisher Navoi. The city has economic importance and is the large industrial center of the western part of Uzbekistan. The city became, as it were, the outpost of desert development.</p>
                    <p>Though the city is very young, this area and surroundings of current Navoi has rich history. In ancient times the Great Silk Road passed through these lands. Also findings of numerous traces of Ancient Saki, Khorezm, Baktriya cultures resulted from archeological researches of the area.</p>
                    
                    {/* <h3 className='text-black'>Namangan Pictures</h3> */}

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

                    <p>Navoi is the real oasis in the steppe. It is the youngest city of the country. Its construction was started by the Government Decree in 1958. It was named after the great Uzbek poet, scientist and state figure Alisher Navoi. The city has economic importance and is the large industrial center of the western part of Uzbekistan. The city became, as it were, the outpost of desert development.</p>
                    <p>Though the city is very young, this area and surroundings of current Navoi has rich history. In ancient times the Great Silk Road passed through these lands. Also findings of numerous traces of Ancient Saki, Khorezm, Baktriya cultures resulted from archeological researches of the area.</p>
                    
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
                        <a className='text-black hover:text-red-500 transition-all cursor-pointer'>Navoi Tours</a>
                    </Link>
                </div>

            </div>

            <Footer />


        </>
    )
}


export default Navoi