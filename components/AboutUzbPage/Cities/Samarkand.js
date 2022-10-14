import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Footer from "../../../components/Footer"

const Samarkand = () => {
    return (
        <>
            <div className='absolute top-0 w-full h-[55vh] flex justify-center items-center'>
                <Image src="https://www.advantour.com/img/uzbekistan/images/samarkand.jpg" layout='fill' objectFit='cover' alt="img" />
                <h1 className="text-white font-beyond text-[40px] xs:text-[70px] sm:text-[100px] leading-[1.5] pt-12 absolute inset-0 flex justify-center items-center bg-lightPurple">Samarkand</h1>
            </div>

            <div className='main-div grid grid-cols-4 gap-[30px] py-[50px] mt-[40vh]'>

                <div className='col-span-3 space-y-4'>
                    <h1 className='text-orange'>Samarkand, Uzbekistan</h1>
                    <h3 className='text-black'>Tours, Attractions and Things To Do in Samarkand</h3>
                    <p>Samarkand is situated in the valley of the river Zerafshan. It is the second largest city of Uzbekistan and is of the same age as the city of Babylon or Rome.</p>

                    <p>The history of Samarkand is about 2,750 years old and has witnessed many upheavals during the times of Alexander the Great, the Arabic Conquest, Genghis-Khan Conquest and lastly Tamerlane's. Hence, the culture of Samarkand was developed and mixed together with the Iranian, Indian, Mongolian and a bit of the Western and Eastern cultures.</p>

                    <p>Majestic and beautiful city Samarkand has a marvelous and attractive power. Poets and historians of the past called it "Rome of the East, The beauty of sublunary countries, The pearl of the Eastern Muslim World". Its advantageous geographical position in the Zarafshan valley puts Samarkand to the first place among cities of Central Asia.</p>

                    <p>Over the history this legendary city on the Silk Road went through growths and decays, suffered from destroying invasions of foreign rulers and again revived, becoming more beautiful. Trade routes to the west, to Persia, to the east, to China, to the south, to India, intersected here and formed intersections of the Silk Road.</p>

                    <p>Today Samarkand is the treasure of unique antiquity spirit. It is included in the UNESCO World Heritage List due to the abundance of material and spiritual values. Unique monuments of ancient architecture, heritage of scientific and arts schools, artisans workshops are well-known around the world.</p>


                    <h3 className='text-black'>Samarkand Pictures</h3>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/samarkand/guri-emir2.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/samarkand/sher-dor.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/samarkand/bibihanum-mosque.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                    </div>

                    <h3 className='text-black'>Samarkand History</h3>
                    <p>Samarkand is one of the most ancient cities in the world. As other first centers of human civilization - Babylon and Memphis, Athens and Rome, Alexandria and Byzantium - Samarkand was intended to go through many events and shakes.</p>
                    <p>History of Samarkand goes back in remote days. Archeological finds and chronicle records of eyewitnesses and ancient historians allowed to establish with full reliability that a man lived on the territory of modern city many centuries before the Common Era.</p>

                </div>

                <div className='border border-gray-300 p-4 rounded-md h-max'>
                    <Link href="/about-uzbekistan/samarkand/tours" className='border'>
                        <a className='text-black hover:text-red-500 transition-all cursor-pointer'>Samarkand Tours</a>
                    </Link>
                </div>
            </div>

            <Footer />


        </>
    )
}


export default Samarkand