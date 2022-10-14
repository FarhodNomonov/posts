import React from 'react'
import Image from 'next/image';
import Footer from "../../../components/Footer"
import Link from 'next/link';

const Andijan = () => {
    return (
        <>
            <div className='absolute top-0 w-full h-[55vh] flex justify-center items-center'>
                <Image src="https://www.advantour.com/img/uzbekistan/images/andijan.jpg" layout='fill' objectFit='cover' alt="img" />
                <h1 className="text-white font-beyond text-[40px] xs:text-[70px] sm:text-[100px] leading-[1.5] pt-12 absolute inset-0 flex justify-center items-center bg-lightPurple">Andijan</h1>
            </div>

            <div className='main-div grid grid-cols-4 py-[50px] mt-[40vh]'>

                <div className='col-span-3 space-y-4'>
                    <h1 className='text-orange'>Andijan, Uzbekistan</h1>
                    <h3 className='text-black'>Tours, Attractions and Things To Do in Andijan</h3>
                    <p>Ancient Andijan, surrounded by picturesque hills, is situated on the south-east of the Fergana Valley. This city is proud of its venerable age (2000 years) and of the fact that it is the hometown of Muhammad Zahiruddin Babur - the famous poet and commander, representative of the great dynasty of Tamerlane, the founder of the Mogul Empire in India. Today tourists can visit the house of Babur, remained in Andijan.</p>

                    <p>Historical records say about the large city on this site, which has grown up on the track of the Silk Road. It served as the eastern gateway of the Fergana Valley. On the whole route along the river of Karadarya there were caravanserais.</p>

                    <p>For the first time Andijan is mentioned in records of the 9th century. In the 9-10th centuries Andijan became a part of the Samanid State. In the 14th century, during the reign of Amir Timur, Andijan experienced rapid growth in all areas.</p>

                    <p>In the 16th century, Andijan was conquered by the Sheibanids, later it became a part of the Kokand Khanate. Since 1876, the territory of the Kokand Khanate, including Andijan, was included in the Russian Empire. At this time, the city produced a wonderful silk and cotton fabrics, which were famous not only in the Ferghana Valley, but far beyond its borders. In 1902 Andijan suffered from an earthquake, which destroyed a lot of ancient monuments.</p>

                    <p>The only main architectural monument - surviving a catastrophic earthquake in 1902 is the huge Jami Madrasah. Built in the late 19th century, this building is very impressive. Its length is almost 123 m. The complex occupies the area of 1.5 hectares, and includes a madrasah, mosque and minaret.</p>

                    <p>Modern Andijan is the large city of Uzbekistan, the largest center for engineering industry. Andijan has the automobile production plant, a number of other major companies: engineering, canning and dairy factories, flour mill, cotton mill, textile factory.</p>

                    <p>This beautiful sunny city becomes more attractive from year to year: new modern buildings are built, range of entertainment and shopping centers is growing. Andijan abounds in green gardens, parks and alleys.</p>

                    <p>Thirty kilometers away from Andijan there is the ancient settlement Ershi - the capital of the ancient state of Davan. Andijan region is well-known for its holy places. So-called Teshik-Tash boulder reminds straddling giant at the foot. Among other famous shrines Imam-Ota, Tuzlik Masar, Ok Gur, spring Shirmanbulak should be mentioned.</p>

                <h3 className='text-black'>Andijan Pictures</h3>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/images/andijan.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/andijan/jami-complex_sm.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/andijan/babur-park2_sm.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                    </div>

                    {/* <h3 className='text-black'>Andrijan History</h3>
                    <p>Ancient Andijan, surrounded by picturesque hills, is situated on the south-east of the Fergana Valley. This city is proud of its venerable age (2000 years) and of the fact that it is the hometown of Muhammad Zahiruddin Babur - the famous poet and commander, representative of the great dynasty of Tamerlane, the founder of the Mogul Empire in India. Today tourists can visit the house of Babur, remained in Andijan.</p>
                    <p>History of Samarkand goes back in remote days. Archeological finds and chronicle records of eyewitnesses and ancient historians allowed to establish with full reliability that a man lived on the territory of modern city many centuries before the Common Era.</p> */}

                </div>
                <div className='border border-gray-300 p-4 rounded-md h-max'>
                    <Link href="/about-uzbekistan/andijan/tours" className='border'>
                        <a className='text-black hover:text-red-500 transition-all cursor-pointer'>Andijan Tours</a>
                    </Link>
                </div>

            </div>

            <Footer />


        </>
    )
}


export default Andijan