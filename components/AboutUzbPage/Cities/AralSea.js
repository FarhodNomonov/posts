import React from 'react'
import Image from 'next/image';
import Footer from "../../../components/Footer"
import Link from 'next/link';

const AralSea = () => {
    return (
        <>
            <div className='absolute top-0 w-full h-[55vh] flex justify-center items-center'>
                <Image src="https://www.advantour.com/img/uzbekistan/images/aralsea.jpg" layout='fill' objectFit='cover' alt="img" />
                <h1 className="text-white font-beyond text-[40px] xs:text-[70px] sm:text-[100px] leading-[1.5] pt-12 absolute inset-0 flex justify-center items-center bg-lightPurple/30">Aral Sea</h1>
            </div>z

            <div className='main-div grid grid-cols-4 py-[50px] mt-[40vh]'>

                <div className='col-span-3 space-y-4'>
                    <h1 className='text-orange'>Aral Sea, Uzbekistan</h1>
                    <h3 className='text-black'>The Aral Sea: the tragedy of the drying sea</h3>
                    <p>The Aral Sea... Today, the name of the lake is related with the environmental disaster. But how did it look 60 years ago? The Aral Sea is located on the border between Kazakhstan and Uzbekistan. Prior to the shallowing, the Aral Sea was the fourth largest lake in the world. It had ports, fish plants and fishing boats floated on the Aral Sea. Up to the 80es of the 20th century it was inhabited by 34 species of fish, 20 of which had marketable value. During its history the Aral Sea has shrunk out several times as evidenced by the numerous remains of flora and fauna found in the dried bed of the Aral Sea. Various expeditions to the study of the Aral Sea were carried out. Scientists suppose that in the middle of the Cenozoic Era (21 million years ago) the Aral Sea was connected to the Caspian Sea, but then the rivers dried up, separating two seas apart.</p>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/aral/aral-sea1.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/aral/aral-sea2.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/aral/aral-sea3.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                    </div>

                    <p>By the early 2000s, the absolute water level in the sea went down to 31 m, which is 22 m lower than the initial level recorded in the late 1950s. In 2001, the South (Large) Aral Sea was divided into western and eastern parts. In 2003, the surface area of the Aral Sea was about a quarter of the original, and the volume of sea water was about 10%. Today, instead of the former deep sea, there is a new sand and saline Aralkum desert with the total area of 38 000 km².</p>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/aral/aral-sea4.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/aral/aral-sea5.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/aral/aral-sea6.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                    </div>

                </div>

                <div className='border border-gray-300 p-4 rounded-md h-max'>
                    <Link href="/about-uzbekistan/aral-sea/tours" className='border'>
                        <a className='text-black hover:text-red-500 transition-all cursor-pointer'>Aral Sea Tours</a>
                    </Link>
                </div>

            </div>

            <Footer />


        </>
    )
}


export default AralSea