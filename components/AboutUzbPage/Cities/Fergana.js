import React from 'react'
import Image from 'next/image';
import Footer from "../../../components/Footer"
import Link from 'next/link';

const Fergana = () => {
    return (
        <>
            <div className='absolute top-0 w-full h-[55vh] flex justify-center items-center'>
                <Image src="https://www.advantour.com/img/uzbekistan/images/ferghana.jpg" layout='fill' objectFit='cover' alt="img" />
                <h1 className="text-white font-beyond text-[40px] xs:text-[70px] sm:text-[100px] leading-[1.5] pt-12 absolute inset-0 flex justify-center items-center bg-lightPurple">Ferghana</h1>
            </div>z

            <div className='main-div grid grid-cols-4 py-[50px] mt-[40vh]'>

                <div className='col-span-3 space-y-4'>
                    <h1 className='text-orange'>Fergana, Uzbekistan</h1>
                    <h3 className='text-black'>Tours, Attractions and Things To Do in Fergana</h3>
                    <p>The city of Fergana, in the south of the Fergana Valley is one of the youngest cities in Uzbekistan. It was founded in 1876, after Kokand Khanate had been included in the Russian Empire. A new town, named as New Margilan was built at a distance of 12 kilometers from Margilan, and became the center of the Fergana region.</p>

                    <p>The main building of the new city became a military fortress, which occupied a large area. New streets were laid from it in a semicircle. The huge park was lid out in the city center. The first architectural sights of the city were the Governor's House (now the building of the drama theater), House of Governor Assistant, the Military Assembly (House of Officers). In 1907 the town was renamed Skobelev, and in 1924 called Ferghana.</p>

                    <p>A marked increase in the city began only in the twentieth century and especially after the independence of the republic. Ferghana is now an important industrial center in Uzbekistan. Over the past few years in the city there are many modern facilities - luxurious high-rise hotels, a beautiful tennis court, indoor urban market, a stadium, a large park with flower beds and fountains. Symbolically, that among the first constructions built during the independence, in 1992 the city gate was built, called "Gate of Independence." It has the height of 14 meters, 26 meters in length.</p>

                    <p>In the 19th century Russia annexed part of Khiva Khanate. One century later, in 1919, the last Khan was liquidated of the ruling dynasty. So Khiva became the capital of the new Khorezm Soviet People's Republic. In 1924 territories of Khorezm oasis became a part of modern Uzbekistan and Turkmenistan.</p>

                    <p>In Fergana, there is no ancient architecture and historical monuments, but nevertheless the city is very picturesque and has its own unique look. The main decoration of the city is venerable trees: plane trees, poplars, oaks ... They have turned Ferghana in to the garden city.</p>

                    <p>Suburbs of Fergana are also known thanks to beautiful places. In the foothills of the Alai Range, abounded in the greenery of gardens and vineyards, the village Chimen lies, known for its healing mineral springs, on the base of which the spa resort "Chimen" was opened. It is the largest health resort in Central Asia.</p>

                    <p>55 kilometers from Fergana there is a picturesque area of Uzbekistan - Shakhimardan ("Lord of the peoples"). It is the traditional place of recreation for the citizens of Margilan and Fergana.</p>

                    <h3 className='text-black'>Fergana Pictures</h3>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/images/ferghana.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/ferghana/ferghana-tours.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/kuva/kuva.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                    </div>
                </div>

                <div className='border border-gray-300 p-4 rounded-md h-max'>
                    <Link href="/about-uzbekistan/fergana/tours" className='border'>
                        <a className='text-black hover:text-red-500 transition-all cursor-pointer'>Fergana Tours</a>
                    </Link>
                </div>

            </div>

            <Footer />


        </>
    )
}


export default Fergana