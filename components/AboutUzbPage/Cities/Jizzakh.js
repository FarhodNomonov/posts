import React from 'react'
import Image from 'next/image';
import Footer from "../../../components/Footer"
import Link from 'next/link';

const Jizzakh = () => {
    return (
        <>
            <div className='absolute top-0 w-full h-[55vh] flex justify-center items-center'>
                <Image src="https://www.advantour.com/img/uzbekistan/images/jizzakh.jpg" layout='fill' objectFit='cover' alt="img" />
                <h1 className="text-white font-beyond text-[40px] xs:text-[70px] sm:text-[100px] leading-[1.5] pt-12 absolute inset-0 flex justify-center items-center bg-lightPurple/30">Jizzakh</h1>
            </div>z

            <div className='main-div grid grid-cols-4 py-[50px] mt-[40vh]'>

                <div className='col-span-3 space-y-4'>
                    <h1 className='text-orange'>Jizzakh, Uzbekistan</h1>
                    <h3 className='text-black'>Tours, Attractions and Things To Do in Jizzakh</h3>
                    <p>The town of Jizzakh lies at the northern foot of Nuratau mountains, in the southern part of the Hungry Steppe, near the Sanzar River. The town was founded in the 10th century as a staging post on the Silk Road. The trade route from Ustrushana passing through Jizzakh was one of the most important in the Silk Road for the Ustrushan nephritis, so popular in the West.</p>

                    <p>Jizzakh is located in the beautiful place. On the one hand there are severe mountains of Nurata, at the foot of which the Sanzar River flows, on the other hand there is the Hungry Steppe, which seems endless. The peculiar nature of Jizzakh features a variety of natural landscapes, which combine the unique elements of shape and climate. Favorable geographical conditions contributed to the foundation of ancient settlements and fortresses. Today you can find ruins of these settlements traveling along the Sanzar river. </p>

                    <p>Jizzakh could rightly be considered one of the busiest trade cities on the Silk Road. In the Middle Ages Mirasmand near Jizzakh was famous for the international bazaar trading with woolen fabrics and clothing, silk fabrics, jewelry and metal items and Ustrushan nephritis. For centuries, people have mined the iron ore in the Nuratau Mountains, so even today you can find remnants of ancient sites and settlements of the miners.</p>

                    <p>Jizzakh is translated from Sogdian as a fortress or small fort, which describes the history of this town. Jizzakh, like many other cities of Central Asia, had to endure a lot of conquests, but every time it was rebuilt. The Mongol invasion almost completely destroyed the fortresses of the town. During the reign of Tamerlane the town was rebuilt and became even greater than in former times. But it did not stop Sheybanikhan to destroy it during the conquest of Mawarannahr.</p>

                    <p>Today mountain woodland of Zaamin and Bakhmal with their breathtaking canyons and swift mountain streams are a paradise for active tourists and extreme enthusiasts.</p>

                </div>

                <div className='border border-gray-300 p-4 rounded-md h-max'>
                    <Link href="/about-uzbekistan/jizzakh/tours" className='border'>
                        <a className='text-black hover:text-red-500 transition-all cursor-pointer'>Jizzakh Tours</a>
                    </Link>
                </div>

            </div>

            <Footer />


        </>
    )
}


export default Jizzakh