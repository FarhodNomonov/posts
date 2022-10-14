import React from 'react'
import Image from 'next/image';
import Footer from "../../../components/Footer"
import Link from 'next/link';

const Khiva = () => {
    return (
        <>
            <div className='absolute top-0 w-full h-[55vh] flex justify-center items-center'>
                <Image src="https://www.advantour.com/img/uzbekistan/images/khiva.jpg" layout='fill' objectFit='cover' alt="img" />
                <h1 className="text-white font-beyond text-[40px] xs:text-[70px] sm:text-[100px] leading-[1.5] pt-12 absolute inset-0 flex justify-center items-center bg-lightPurple">Khiva</h1>
            </div>z

            <div className='main-div grid grid-cols-4 py-[50px] mt-[40vh]'>

                <div className='col-span-3 space-y-4'>
                    <h1 className='text-orange'>Khiva, Uzbekistan</h1>
                    <h3 className='text-black'>Tours, Attractions and Things To Do in Khiva</h3>
                    <p>Probably, Khiva is the most peculiar Uzbek city. Its history is inextricably connected with the history of the legendary Khorezmshah’s State with its capital in Urgench before. Khiva is a very ancient city.</p>

                    <p>In the 10th century Khiva is mentioned as a major trading center on the Silk Road. All the caravans had a stop here on their way to China and back. From dawn to dusk, until the gates were opened, an endless stream of moving string of camels with baggage passed them.</p>

                    <p>At the beginning of the 16th century Khorezm State became home for Uzbek nomadic tribes, who founded Khive Khanate here. However, Khiva did not become immediately the Khanate’s capital. It happened only after Urgench, an existing capital, had been destroyed due to the change of Amu Darya’s channel. In 1598 Khiva became the main city of the state.</p>

                    <p>In the 19th century Russia annexed part of Khiva Khanate. One century later, in 1919, the last Khan was liquidated of the ruling dynasty. So Khiva became the capital of the new Khorezm Soviet People's Republic. In 1924 territories of Khorezm oasis became a part of modern Uzbekistan and Turkmenistan.</p>

                    <h3 className='text-black'>Legend about Khiva</h3>

                    <p>There are many interesting legends that tells about the origin of Khiva. Allegedly, the city grew around the well Hewvakh, with tasty and cool water. The well was dug by the order of Shem, the elder son of Biblical Noah. Today one can see this well in the old part of Khiva, Itchan-Kala.</p>

                    <p>Khiva - a unique city, rightfully claiming the title of "the seventh wonder of the world", thanks to its authentic atmosphere of the 'era of the beginning of time. " Most of the city of Khiva is similar to the open-air museum. And the nucleus of this museum - castle Itchan-Kala. It is inside this fortress concentrated all the architectural masterpieces of Khiva. Everyone who enters the fortress, are among the marvelous minarets, stone-paved alleys curves, leading to a madrassa with lacy rough mosaic of the ancient walls. This oriental tale! In 1990 the city was included in the UNESCO World Heritage List.</p>


                    <h3 className='text-black'>Khiva Pictures</h3>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/khiva/khiva-view2.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/khiva/itchan-kala-wall.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/khiva/rahim-khan-madrasah.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                    </div>

                    <h3 className='text-black'>Khiva History</h3>
                    <p>Khiva, one of the most noteworthy of the cities and towns of Central Asia, is situated on the left bank of the Amu Darya in the southern part of the modern region of Khorezm in Uzbekistan. It is a unique monument town, completely preserved in the cultural style of the region. In 1967 it was proclaimed a town-reserve and since 1990 one part of Khiva — the Itchan-Kala — was recognized by UNESCO as an historical monument of world significance.</p>

                </div>

                <div className='border border-gray-300 p-4 rounded-md h-max'>
                    <Link href="/about-uzbekistan/khiva/tours" className='border'>
                        <a className='text-black hover:text-red-500 transition-all cursor-pointer'>Khiva Tours</a>
                    </Link>
                </div>

            </div>

            <Footer />


        </>
    )
}


export default Khiva