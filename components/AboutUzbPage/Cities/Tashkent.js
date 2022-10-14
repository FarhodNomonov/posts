import React from 'react'
import Image from 'next/image';
import Footer from "../../../components/Footer"
import Link from 'next/link';

const Tashkent = () => {
    return (
        <>
            <div className='absolute top-0 w-full h-[55vh] flex justify-center items-center'>
                <Image src="https://www.advantour.com/img/uzbekistan/images/tashkent.jpg" layout='fill' objectFit='cover' alt="img" />
                <h1 className="text-white font-beyond text-[40px] xs:text-[70px] sm:text-[100px] leading-[1.5] pt-12 absolute inset-0 flex justify-center items-center bg-lightPurple">Tashkent</h1>
            </div>

            <div className='main-div grid grid-cols-4 gap-[30px] py-[50px] mt-[40vh]'>
                <div className='col-span-3 space-y-4'>
                    <h1 className='text-orange'>Tashkent Travel Guide</h1>
                    <h3 className='text-black'>Tours, Attractions and Things To Do in Tashkent</h3>
                    <p>Tashkent is the capital of Uzbekistan and is a metropolis of over 2.5 million people. The city is set out as a grid of straight, wide streets and avenues, interspersed with many green areas (parks, squares, and gardens) and fountains.</p>
                    <div>
                        <iframe width="750" height="422" src="https://www.youtube.com/embed/0ZlLoAbFZ64" title="Добро пожаловать в Ташкент! / Welcome to Tashkent!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <p>This marvelous city embodies the modern elegance of many other capitals of the world; at the same time, as an eastern city, Tashkent has its own unique flavour. It tastefully combines medieval buildings that look like they’re from the pages of ancient oriental tales, with elegant European architecture from the time of the Turkestan governorship, concrete ‘blocks’ from the Soviet era and, finally, sparkling high-rise commercial buildings made of glass and concrete that represent a new era of independent Uzbekistan.</p>
                    <h3 className='text-black'>History of Tashkent</h3>
                    <p>Tashkent is one of the oldest cities on the Great Silk Road between China and Europe. The earliest references to Tashkent as a city settlement appeared in written sources in the 2nd century BC. In the Chinese annals the city is called Yueni or Shi; in the records of the Persian king, Shampur, it appears as Chach; and in other Arabic sources, Shash. The name Tashkent first appeared in Turkish documents of the 9th to 12th centuries.</p>
                    <p>From ancient times, a favourable geographical position and mild climate made Tashkent one of the main Silk Road cities. In the 14–15th centuries it was the part of the Timurid Empire, and in the 16th century it was under the control of the Sheibanids dynasty. In 1865, after the conquest of Mikhail Chernyaev, Russian military leader, the city became under the rule of the Russian Empire and Russian government was established here. In 1930 Tashkent was declared the capital of Uzbekistan, former Uzbek SSR.</p>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/tashkent/old-tashkent/tashkent18.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/tashkent/old-tashkent/tashkent2.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/tashkent/old-tashkent/tashkent1.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                    </div>

                    <h2 className='text-orange'>What to Do in Tashkent</h2>
                    <h3 className='text-black'>Tashkent Sights</h3>
                    <p>Many of Tashkent’s tourist sights are concentrated in the Old City, which is one of the few districts that has preserved its traditional culture in the rapidly-changing metropolis. The spirit of old Tashkent lives here, in the cozy courtyards of the hospitable mahallahs, the bustling Chorsu Bazaar, and the blue domes of the Khast Imam complex. In this part of the city there are artisans, teahouses, and bakeries.</p>
                    <p>Other Tashkent sights worth visiting include the Tashkent TV Tower, the German Church, the Polish Church, Amir Temur Square with the famous Tashkent astronomical clock, Independence Square, and the former residence of Prince Romanov, which was designed by architects Benoit and Heinzelmann.</p>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/tashkent/tashkent-metro1.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/tashkent/old-city/chorsu2.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/religion/catholic-church.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                    </div>

                    <p>Tashkent also boasts the first metro system in Central Asia. The Tashkent metro is not only a fast, affordable, and comfortable way to move around the city, but also an architectural monument. Each of the 29 stations has an original design - such as the Cosmonauts station, designed in a space theme, to the Alisher Navoi station with its walls artfully decorated with stories and characters from the works of the poet.</p>
                    <p>The Zangiata Mausoleum, where one of the Muslim saints, Sheikh Ai-Khoja, and his wife, Ambar Bibi, are buried, is located 15 kilometres from Tashkent. This is one of the religious sites visited most frequently by residents of and visitors to Tashkent.</p>

                    <h3 className='text-black'>Tashkent Theatres</h3>
                    <p>A highlight of Tashkent’s cultural life is the Ilkhom Theatre, which is known for experimental performances and its unusual interpretations of classical works. This theatre also hosts concerts, exhibitions of young artists, and festivals, the most famous of which is the Ilkhom Rock Fest. The State Academic Bolshoi Theatre named after Alisher Navoi, and the Academic Russian Drama Theatre, host more traditional productions of ballets, operas, and music. Tashkent, like many other Uzbek cities, also has a strong tradition of puppet shows. Performances are held at the Silk Road Marionettes Theatre and the Republican Puppet Theatre.</p>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/tashkent/uzbek-national-drama-theater.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/tashkent/russian-drama-theater.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/tashkent/youth-theater.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                    </div>

                    <h2 className='text-orange'>Entertainment, Parks, and Shopping in Tashkent</h2>
                    <p>Entertainment in Tashkent is diverse, with something to suit everyone.</p>
                    <h3 className='text-black'>Parks of Tashkent</h3>
                    <p>Walkers will love Tashkent’s parks, which are particularly beautiful in spring, early summer, and autumn.</p>
                    <p>Ecopark was the first park in Tashkent to embody the principles of “green” construction in its layout and architecture. There are no fairground rides, but visitors can avoid the hustle and bustle of the city as they walk along neat paths, picnic on the grass, or do yoga.</p>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/tashkent/botanical_garden/botanical-garden7.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/tashkent/botanical_garden/botanical-garden8.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/tashkent/botanical_garden/botanical-garden9.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                    </div>

                    <p>The refurbished Central Park (formerly Telman Park) offers shady alleys with benches, and modern European attractions for children and adults - including the first authentic French carousel in Uzbekistan. Central Park regularly holds free public festivals and other events.</p>
                    <p>Ankhor Lokomotiv Park boasts the highest ferris wheel in Uzbekistan, which offers a breathtaking view of the capital.</p>

                    <h3 className='text-black'>Shopping in Tashkent</h3>
                    <p>To combine shopping and entertainment, visit the Samarkand Darvaza, Mega Planet, Next, Parus, and Compass shopping and entertainment centres. These offer modern facilities including food courts, cinemas, children’s play areas, and many shops selling international brands.</p>
                    <p>The charm of shopping oriental style—with friendly sellers and stalls laden with fresh vegetables and fruits, fragrant spices, hot lepeshka (non) bread, and all kinds of goods—lives in Tashkent’s vibrant bazaars. Chorsu and Alay Bazaars are the most popular among tourists.</p>

                    <h3 className='text-black'>Food in Tashkent</h3>
                    <p>Tashkent’s numerous cafes and restaurants offer a wide range of cuisines including European, Russian, Asian (such as Korean, Chinese, and Indian), Middle Eastern, Caucasian, and, of course, Uzbek.</p>

                    <h3 className='text-black'>Uzbek Cuisine</h3>
                    <p>On almost every street there are teahouses and cafes (“Milliy Taomlar”, which means “national dishes” in Uzbek) serving traditional dishes  like shashlik, shawarma, samsa, plov, naryn, manti, lagman, and shurpa. These venues offer high-quality, delicious, local foods at reasonable prices.</p>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/cuisine/pilaf.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/cuisine/lagman.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/cuisine/beshbarmak.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                    </div>

                    <p>At the Chorsu Bazaar are another gastronomic highlight on the map of Tashkent: many food stalls serving all the famous Uzbek dishes at very low prices.</p>
                    <p>The most delicious plov (pilaf) in Tashkent is served at the Central Asian Plov Centre (Osh Markazi). People from all over the city come here to eat, and in just a couple of hours the huge cauldrons become empty.</p>

                    <h3 className='text-black'>Vegetarian Restaurants</h3>
                    <p>Tashkent does not have any dedicated vegetarian restaurants, but several restaurants serve vegetarian dishes such as delicious salads, vegetable dumplings, samsa, pizza, and pasta.</p>

                    <h3 className='text-black'>Coffee Houses, Bakeries, and Patisseries</h3>
                    <p>Recently, Tashkent has become a very comfortable city for coffee lovers: there are now many western-style coffee shops in the capital.  Café-bakeries where customers can buy freshly-baked bread, baguettes, croissants, cakes, and pastries, are also flourishing.</p>

                    <h3 className='text-black'>City Transport in Tashkent</h3>
                    <p>Tashkent’s transport infrastructure is quite well-developed.</p>

                    <h3 className='text-black'>Public Transport</h3>
                    <p>Buses and minibuses are the cheapest way to move around Tashkent, with routes to almost all parts of the city. For now, there is no convenient, complete system or website for tracking routes and bus schedules in Tashkent.</p>
                    <p>Tashkent’s metro system is a fast, affordable, and comfortable way to travel. However, the existing network is limited mainly to the central areas of the city. Trains depart from the stations every 3-4 minutes during rush hour and about every 20 minutes in the evenings.</p>
                    <p>All public transport in Tashkent operates until 22:00.</p>

                    <h3 className='text-black'>Taxis</h3>
                    <p>Taxis are also a popular way to travel around Tashkent. It is easy to flag down taxis on the road or order them through one of the official taxi services. Smartphone apps such as Yandex or MyTaxi are very convenient.</p>

                    <h3 className='text-black'>Car Rental</h3>
                    <p>Car rental services exist in Tashkent. Cars should be ordered at least a day in advance. It is advisable to book further in advance during the peak tourist season, when there may be a shortage of cars.</p>
                    <p>Other Modes of Transport</p>
                    <p>Bicycles can also be rented, but there is no system of bicycle lanes yet</p>

                    <h3 className='text-black'>How to Get to Tashkent</h3>
                    <p>Flying is the most convenient way to get to Tashkent from other countries. The city is served by several international airlines, such as Aeroflot, Air Astana, Asiana Airlines, China Southern Airlines, Korean Airlines, Nordwind Airlines, Somon Air, and Turkish Airlines. The national airline, Uzbekistan Airways, offers regular flights to many European, Asian, and North American cities including Bangkok, Beijing, Delhi, Frankfurt, Istanbul, Kuala Lumpur, London, New York, Paris, Seoul, and Tel Aviv. It also flies to many CIS countries, as well as within Uzbekistan.</p>
                    <p>Although most international visitors arrive by air, Tashkent can also be reached by train from Russia or Kazakhstan. Trains are mainly used for travel within Uzbekistan, with regular trains between Tashkent and Samarkand, Bukhara, Urgench, Nukus, and other cities.</p>

                    <h3 className='text-black'>Languages Spoken in Tashkent</h3>
                    <p>Uzbekistan’s national language is Uzbek, with Russian used in Tashkent for international communication. Maps, tourist information, restaurant menus, and signs in Tashkent are mainly in Russian, and guides in museums are Russian-speaking. </p>
                    <p>English is not as common as Russian, although more and more people, especially young people, are learning it. Most hotels, restaurants, and other tourist sites in Tashkent have someone who can speak at least basic English.</p>

                    <h3 className='text-black'>Currency in Tashkent</h3>
                    <p>The main currency used in Tashkent is the Uzbek som. The most popular foreign currency is the US dollar, and the second most popular is the euro. The Russian ruble is less widely-used and may suffer from a poor exchange rate.</p>
                    <p>Foreign exchange bureaus operate at hotels, as well as in all banks. Many ATMs accept Visa and Mastercard.</p>

                    <h3 className='text-black'>Security in Tashkent</h3>
                    <p>Tashkent is a peaceful, welcoming, and safe city for travelling alone, as well as for family or group holidays. Nevertheless, all visitors should take standard security precautions and avoid leaving belongings unattended.</p>
                    <p>In busy public areas, such as metro stations, parks, shopping centres, and bazaars, there are many law enforcement officers. Be prepared to be stopped by police on the street and asked for your passport and registration documents (although such requests are now less frequent than they used to be).</p>

                    <h3 className='text-black'>Tashkent, Uzbekistan - Pictures</h3>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/tashkent/tashkent-photo-gallery/alisher-navoi-theater.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/tashkent/tashkent-photo-gallery/tashkent-chimes.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                        <div className='relative aspect-video'>
                            <Image src="https://www.advantour.com/img/uzbekistan/tashkent/tashkent-photo-gallery/amir-temur-museum.jpg" layout='fill' objectFit='cover' alt="img" />
                        </div>
                    </div>

















                </div>

                <div className='border border-gray-300 p-4 rounded-md h-max'>
                    <Link href="/about-uzbekistan/tashkent/tours" className='border'>
                        <a className='text-black hover:text-red-500 transition-all cursor-pointer'>Tashkent Tours</a>
                    </Link>
                </div>
            </div>

            <Footer />


        </>
    )
}


export default Tashkent