import { Fragment, useState } from 'react'
import Image from 'next/image';
import { Disclosure, Tab, Transition } from '@headlessui/react'
import { ChevronDownIcon } from "@heroicons/react/outline"


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const questions = [
    {
        title: "Do the citizens of Russia and CIS countries need a visa for entry to Uzbekistan?",
        desc: "CIS countries except Tajikistan and Turkmenistan, Uzbekistan signed a bilateral agreement on visa-free regime. For entry into Uzbekistan is necessary to have a passport, and at the customs post to fill two declarations, one of which must be retained by you before your trip is completed."
    },
    {
        title: "Do I have to do the time registration during the stay in the Republic of Uzbekistan?",
        desc: "Foreign citizens temporarily residing in Uzbekistan must obtain registration upon arrival at the place of residence within three days, excluding holidays and weekends. If you stay at the hotel, the registration is carried out of the hotel staff automatically. When leaving the hotel be sure to check whether you have given out a registration form with the seal of the hotel. The registration on tourist visa is available only in case hotel accommodation."
    },
    {
        title: "What is the currency in circulation in Uzbekistan? Where can I exchange foreign currency?",
        desc: "National currency of Uzbekistan – Uzbek sum (UZS). In circulation are banknotes in denominations of 100, 200, 500, 1000, 5000, 10 000 and 50 000 sum. You can exchange money at the offices of the National Bank, specialized exchange offices and in some hotels. Exchange offices are also located near the bazaars and markets. When exchanging money with you need to have a passport and a temporary registration. There is the so-called “black market” exchange, but do not change money on the street. Illegal currency exchange is punishable by law. It should also be borne in mind that the old (before 1996 year), damaged banknotes and banknotes with inscriptions can not be accepted for exchange. It’s better to bring to Uzbekistan US dollars and Euro for exchange."
    },
    {
        title: "Can I use an international card for paying?",
        desc: "International cards Master Card or Visa in Uzbekistan can use basically only in the capital. You can withdraw cash from your international card at ATMs in major hotels in Tashkent. Also, some hotels, restaurants and shops accept international cards. Sometimes you may experience technical problems in their use, so it is better to have always a sufficient amount of cash."
    },
    {
        title: "What is the time difference with Uzbekistan?",
        desc: "In Uzbekistan +5 hours GMT."
    },
    {
        title: "Can foreign citizens to connect to a mobile operator in Uzbekistan?",
        desc: "Foreign citizens can become subscribers of any of the mobile operators in Uzbekistan (Ucell, Beeline, UMS and UzMobile) in the presence of the temporary registration. It’s possible to buy sim cards only in head offices of mobile operators."
    },
    {
        title: "Is it possible to bring alcoholic beverages to Uzbekistan?",
        desc: "In Uzbekistan it is allowed to bring two liters of alcoholic beverages per person."
    },
    {
        title: "How much of foreign currency is allowed to import to Uzbekistan?",
        desc: "Import of foreign currency in cash in Uzbekistan is not limited with mandatory filling in of the customs declaration."
    },
    {
        title: "How much of foreign currency can be exported from Uzbekistan?",
        desc: "Foreigners are allowed to export cash currency outside the Republic of Uzbekistan in the limit of the amount imported into the Republic in accordance with the customs declaration."
    },
    {
        title: "Is it possible to carry out a photo / video shooting at the tourist sites?",
        desc: "In all the monuments in Uzbekistan, you can take pictures and shoot amateur video, if there is no prohibiting signs. Most tourist facilities for this will be charged separately. You can not take pictures in the subway, airports, railway stations and stations, tunnels and in the existing mosques, this is done only with the consent of believers."
    },
    {
        title: "What clothes to take with myself to travel to Uzbekistan? Are there any restrictions on clothing for women?",
        desc: "On the eve of traveling to Uzbekistan, choosing what to put in the suitcase of clothes, prefer things made of cotton and other natural fabrics. Do not forget to take comfortable shoes, because most of the excursions will on foot. Be sure to bring a light hat and sunglasses. There are not strict restrictions on clothing for women. However, when visiting religious places of worship be sure to carry a scarf or shawl to cover the head and shoulders. Visiting of these objects for women in shorts, tops or other clothes with open parts of the body is not recommended.."
    },
    {
        title: "In what language does the local people of Uzbekistan speak?",
        desc: "Official language – Uzbek, but most people also understand Russian. In addition, English is becoming very popular among young people."
    },
]

const Container2 = () => {

    return (
        <>

            <div className='relative flex items-cente h-[95vh]'>

                <Tab.Group as="div" className="relative h-full flex flex-col w-1/2 p-[50px]">
                    <Tab.List className="flex space-x-1 rounded-xl bg-sky-500 p-1 border-black/20 border">
                        {/* about */}
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            About
                        </Tab>
                        {/* links */}
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            Useful Links
                        </Tab>
                        {/* tourists */}
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            For Tourists
                        </Tab>
                        {/* questions */}
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                        >
                            Questions
                        </Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-2 flex-1 overflow-y-scroll overscroll-contain border-black/20 border rounded-xl">
                        {/* about */}
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 h-full'
                            )}
                        >
                            <h3 className='text-[16px] text-slate-900 font-semibold p-3'>About Kyrgyzstan</h3>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900 space-x-3">
                                    <span>Area:</span>
                                    <span className=" text-sm font-normal leading-4 text-gray-500">199,951 square kilometers.</span>
                                </h3>
                                <span className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900 space-x-3">
                                    <span>Population:</span>
                                    <span className=" text-sm font-normal leading-4 text-gray-500">More than 6 million people</span>
                                </h3>
                                <span className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900 space-x-3">
                                    <span>Capital:</span>
                                    <span className=" text-sm font-normal leading-4 text-gray-500">Bishkek</span>
                                </h3>
                                <span className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900 space-x-3">
                                    <span>Currency:</span>
                                    <span className=" text-sm font-normal leading-4 text-gray-500">Som</span>
                                </h3>
                                <span className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900 space-x-3">
                                    <span>Religion:</span>
                                    <span className=" text-sm font-normal leading-4 text-gray-500">Islam</span>
                                </h3>
                                <span className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900 space-x-3">
                                    <span>Climate:</span>
                                    <span className=" text-sm font-normal leading-4 text-gray-500">Continental, dry</span>
                                </h3>
                                <span className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900 space-x-3">
                                    <span>Administrative divisions:</span>
                                    <span className=" text-sm font-normal leading-4 text-gray-500"> 17 regions..</span>
                                </h3>
                                <span className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900 space-x-3">
                                    <span>Big cities:</span>
                                    <span className=" text-sm font-normal leading-4 text-gray-500"> Akmola, Aktobe, Almaty, Astana, Atyrau, Baikonur, East Kazakhstan, Jambyl, Karaganda, Kostanay, Kyzylorda, Mangystau, North Kazakhstan, West Kazakhstan</span>
                                </h3>
                                <span className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900 space-x-3">
                                    <span>Official language:</span>
                                    <span className=" text-sm font-normal leading-4 text-gray-500"> Kazakh</span>
                                </h3>
                                <span className=" text-xs font-normal leading-4 text-gray-500">Russian language is the language of interethnic communication.</span>
                                <span className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900 space-x-3">
                                    <span>Public holidays:</span>
                                    <ul className='list-disc list-inside space-y-2 mt-2'>
                                        <li className=" text-sm font-normal leading-4 text-gray-500"> January 1 – New Year</li>
                                        <li className=" text-sm font-normal leading-4 text-gray-500"> January 14 – Day of Defenders of the Motherland</li>
                                        <li className=" text-sm font-normal leading-4 text-gray-500"> March 8 – International Women’s Day</li>
                                        <li className=" text-sm font-normal leading-4 text-gray-500"> March 21 – Nowruz</li>
                                        <li className=" text-sm font-normal leading-4 text-gray-500"> May 9 – Day of Memory and Honor</li>
                                        <li className=" text-sm font-normal leading-4 text-gray-500"> September 1 – Independence Day</li>
                                        <li className=" text-sm font-normal leading-4 text-gray-500"> October 1 – Teacher’s day</li>
                                        <li className=" text-sm font-normal leading-4 text-gray-500"> 8 December – Constitution Day</li>
                                    </ul>
                                </h3>
                                <span className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900 space-x-3">
                                    
                                    <span>Religious holidays:</span>
                                    <ul className='list-disc list-inside space-y-2 mt-2'>
                                        <li className=" text-sm font-normal leading-4 text-gray-500"> Eid al-Fitr</li>
                                        <li className=" text-sm font-normal leading-4 text-gray-500"> Eid al-Adha.</li>
                                    </ul>
                                </h3>
                                <span className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900 space-x-3">
                                    <span>Month Average Temperature (C)</span>
                                    <ul className='list-disc list-inside space-y-2 mt-2'>
                                        
                                        <li className=" text-sm font-normal leading-4 text-gray-500">January: 1</li>
                                        <li className=" text-sm font-normal leading-4 text-gray-500">February: 2</li>
                                        <li className=" text-sm font-normal leading-4 text-gray-500">March: 9</li>
                                        <li className=" text-sm font-normal leading-4 text-gray-500">April: 16</li>
                                        <li className=" text-sm font-normal leading-4 text-gray-500">May: 26</li>
                                        <li className=" text-sm font-normal leading-4 text-gray-500">June: 35</li>
                                        <li className=" text-sm font-normal leading-4 text-gray-500">July: 38</li>
                                        <li className=" text-sm font-normal leading-4 text-gray-500">August: 35</li>
                                        <li className=" text-sm font-normal leading-4 text-gray-500">September: 25</li>
                                        <li className=" text-sm font-normal leading-4 text-gray-500">October: 13</li>
                                        <li className=" text-sm font-normal leading-4 text-gray-500">November: 8</li>
                                        <li className=" text-sm font-normal leading-4 text-gray-500">December: 3</li>
                                    </ul>
                                </h3>
                                <span className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>


                        </Tab.Panel>
                        {/* links */}
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 h-full'
                            )}
                        >
                            <h3 className='text-[16px] text-slate-900 font-semibold p-3'>Useful Links</h3>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900">
                                    <span>Governmental portal of the Republic of Uzbekistan –</span>
                                    <span className=" text-sm leading-4 text-orange font-semibold"> gov.uz</span>
                                </h3>
                                <a href="https://www.gov.uz/uz" target="_blank" rel="noreferrer" className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900">
                                    <span>The site of the State Customs Committee of Uzbekistan –</span>
                                    <span className=" text-sm leading-4 text-orange font-semibold"> customs.uz</span>
                                </h3>
                                <a href="https://customs.uz/uz" target="_blank" rel="noreferrer" className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900">
                                    <span>The site of the Ministry of Foreign Affairs of Uzbekistan –</span>
                                    <span className=" text-sm leading-4 text-orange font-semibold"> mfa.uz</span>
                                </h3>
                                <a href="https://mfa.uz/en" target="_blank" rel="noreferrer" className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900">
                                    <span>Website of State Committee of Uzbekistan for the development of tourism –</span>
                                    <span className=" text-sm leading-4 text-orange font-semibold"> uzbektourism.uz</span>
                                </h3>
                                <a href="https://uzbektourism.uz/" target="_blank" rel="noreferrer" className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900">
                                    <span>Website of the National Air Company “Uzbekistan Airways” –</span>
                                    <span className=" text-sm leading-4 text-orange font-semibold"> www.uzairways.com</span>
                                </h3>
                                <a href="https://www.uzairways.com/uz" target="_blank" rel="noreferrer" className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900">
                                    <span>Website of “Uzbekistan Railways» –</span>
                                    <span className=" text-sm leading-4 text-orange font-semibold">  railway.uz</span>
                                </h3>
                                <a href="https://railway.uz/uz/" target="_blank" rel="noreferrer" className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900">
                                    <span>Website of UzA – Uzbekistan National News Agency –</span>
                                    <span className=" text-sm leading-4 text-orange font-semibold"> uza.uz</span>
                                </h3>
                                <a href="https://uza.uz/uz" target="_blank" rel="noreferrer" className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900">
                                    <span>Website of  Information Agency Uzbekistan Today –</span>
                                    <span className=" text-sm leading-4 text-orange font-semibold"> ut.uz</span>
                                </h3>
                                <a href="http://ut.uz/" target="_blank" rel="noreferrer" className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900">
                                    <span>Website of Center of Hydrometeorological Service –</span>
                                    <span className=" text-sm leading-4 text-orange font-semibold"> meteo.uz</span>
                                </h3>
                                <a href="http://hydromet.uz/" target="_blank" rel="noreferrer" className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900">
                                    <span>Website of Help Desk “Golden Pages” –</span>
                                    <span className=" text-sm leading-4 text-orange font-semibold"> www.goldenpages.uz</span>
                                </h3>
                                <a href="https://www.goldenpages.uz/" target="_blank" rel="noreferrer" className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900">
                                    <span>Website of Help Desk “Yellow Pages” –</span>
                                    <span className=" text-sm leading-4 text-orange font-semibold"> www. yellowpages.uz</span>
                                </h3>
                                <a href="https://www.goldenpages.uz/" target="_blank" rel="noreferrer" className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                        </Tab.Panel>
                        {/* for tourists */}
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 h-full'
                            )}
                        >
                            <h3 className='text-[16px] text-slate-900 font-semibold p-3'>INFORMATION FOR TOURIST. TRIP TO UZBEKISTAN</h3>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-sm font-medium leading-5 text-slate-900">
                                    <span>Importnant and practical information for travelers along Uzbekistan.</span>
                                </h3>
                                <span className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900"> General information </h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">The Republic of Uzbekistan is located in the interfluve of the Amudarya and the Syrdarya and occupies an area of 448.9 thousand square meters. km. The length of the territory of the republic from the west to the east is 1425 kilometers and  from the north to the south is 930 kilometers.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">The territory in the north and northeast borders with Kazakhstan, in the east and southeast with Kyrgyzstan and Tajikistan, in the west with Turkmenistan, in the south with Afghanistan</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">The capital of Uzbekistan is Tashkent.</p>
                                <span className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900"> Money </h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">The national currency of Uzbekistan is sum. Most of the exchange offices in the city accept the euro and US dollars. Other types of currency can be exchanged only in exchange offices located directly in banks. In some hotels currency exchange offices are open around the clock, 7 days a week. Others, as a rule, open at 9 o’clock in the morning, but the working day ends already at 15:30 – 16:00.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">The exchange rate for foreign currencies changes to about + 20 sums  on every Tuesday. You can find more information on the exchange rate on the website of the Central Bank of Uzbekistan – <span className='text-orange' >cbu.uz.</span></p>
                                <a href="https://cbu.uz/en/" target="_blank" rel="noreferrer" className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900"> It is practically impossible to exchange crumpled, inscribed bills and older 1996 year.</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Please, beware of exchanging currencies on the street and with strangers, exchange of currency on the black market is illegal. Few hotels, restaurants, shops accept credit cards. Also, there may be technical problems when using credit cards. Therefore, we ask you to use credit cards as a reserve option, but not the main one. C cards like MasterCard you can get cash at the ATMs of Asaka Bank – <span className='text-orange' >asakabank.uz/en</span>. It’s possiblel to get cash from cards as Visa at ATMs, for example, Kapital Bank.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Travelers’ checks are not cashed by all banks.</p>
                                <a href="https://asakabank.uz/en" target="_blank" rel="noreferrer" className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')} />
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Necessary documents for entry to Uzbekistan</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">To enter and travel around Uzbekistan, for all foreign citizens is required  a passport and a visa.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">The visa is not required for the citizens of Russia, Azerbaijan, Armenia, Belarus, Georgia, Kazakhstan, Kyrgyzstan, Moldova, Ukraine, but they should have valid foreign passport at the time of entry and exit from Uzbekistan.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] ">More information on the visa to Uzbekistan and the process of its obtaining, the addresses of Embassies and Consulates of Uzbekistan abroad can be found in the following sections:</p>
                                <ul className='list-decimal list-inside mb-4'>
                                    <li><a className='text-orange hover:underline' href="https://novotours.uz/viza/uzbekistan_visa.html/">Visa of the Republic of Uzbekistan.</a></li>
                                    <li><a className='text-orange hover:underline' href="https://novotours.uz/viza/uzbekistan_visa_support.html/">Tourist visa to Uzbekistan.</a></li>
                                    <li><a className='text-orange hover:underline' href="https://novotours.uz/viza/consular_missions_uzbekistan_abroad.html/">Consular missions of Uzbekistan abroad.</a></li>
                                </ul>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">It’s not required compulsory medical or any other types of insurance for traveling along Uzbekistan, but it is recommended to have medical insurance for case of illness.</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">At the airport of Uzbekistan</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">While entering Uzbekistan, you will need to fill out the customs declaration in 2 copies, one copy with the stamp of the customs department remains with you and it must be kept while you are in Uzbekistan.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">During the filling the customs declaration, please, show all available currency, jewelry, traveler’s checks. All other values ​​and equipment, cell phones, also need to declare by marking as used.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Import of currency is not limited, but export should be no more imported and declared amount, as declarations will be verified at departure. Therefore, please keep the customs declaration till your deparure from Uzbekistan.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Particular attention should be paid to sleeping pills and soothing drugs, medicines with psychotropic substances, as the transportation of them without a prescription is limited.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">In Uzbekistan, the import of medicines is prohibited for commercial purposes, therefore, from medicines, we recommend taking only the most necessary.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Alcohol products can be imported and exported up to 2 liters per person.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Here is sample of filling in the customs declaration during entering and leaving Uzbekistan.</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Information on departure</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">One should be at the airport 2.5 hours before departure. Self-passing passport, customs control and registration for the flight, which ends 40 minutes before departure.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4]">When registering luggage, please note:</p>
                                <ul>
                                    <li className=" text-slate-500 tracking-wide leading-[1.4]">– the maximum weight of checked-in baggage as a rule (in economy class 20 kg per ticket, in business class 30 kg)</li>
                                    <li className=" text-slate-500 tracking-wide leading-[1.4] mb-4">– hand luggage not more than 5 kg.</li>
                                </ul>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Medical service</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">The majority of medical services in Uzbekistan are paid. If you need a doctor, contact the reception of the hotel and use an insurance medical policy.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">An insurance medical policy you can issued in your country, having first ascertained from your insurance agent that it will operate in Uzbekistan.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Our travel agency does not make out insurance policies for foreign citizens.</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Keeping values and money</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">In order to avoid misunderstanding, we ask you not to leave money, documents and valuables in hotels in your absence. If necessary, you can use the safe at the reception of the hotel.</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Registration</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">In Uzbekistan, hotels are required to present to their guests a coupon about registration for the period of residence in this hotel.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Please make sure the spelling of your name is correct, the date of stay at the hotel on the coupon.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">The registration coupon may be required to present a passport control officer upon departure from Uzbekistan, as well as the police.</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Hotels</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">As you know, the East is famous for its hospitality. So in Uzbekistan, tourism is, first of all, centuries-old traditions of hospitality. This is one of the reasons why in Uzbekistan so popular is the accommodation in small private hotels and houses in national character.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">You will not lose, but rather win, if you choose such a hotel. National character, hearty breakfast and home cosiness are guaranteed.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">There are hotels belonging to the popular hotel chains as “Hyatt Regency”, “Wyndham”, “Radisson” and “Ramada” in the capital. You can get acquainted with our hotel catalog, where you can choose and book a room in a hotel, a high-class hotel or in a cheap private hotel.</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Entrance tickets</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Entrance tickets to architectural monuments, museums, palaces, necropolises are paid separately. The fee for video and photography of historical monuments inside is also paid separately.</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Museums</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Museums are open from 09:00 to 18:00. Photographing in museums is permitted, but at an additional cost. You can also shoot on video for an additional fee.</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Opening hours of organizations and shops</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">State and commercial organizations work from 09:00 till 18:00, except on Sundays, and on pre-holidays till 13:00. Banks are open from 09:00 till 16:00, Monday to Friday, lunch time is from 14:00 till 15:00. Restaurants  work until 23:00. There are no specific hours for shops. During the summer period, shops are usually open from 09:00 till 20:00.</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Weekends and holidays</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">The day off is Saturday and Sunday. In some organizations Saturday is a short day.</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Public Holidays</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">January 1 is New Year;</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">January 14  is the day of Defender of the Motherland (working day);</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">March 21 is Navruz holiday (New Year of the peoples of Central Asia);</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">March 8 is International Women’s Day;</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">May 9 is  the day of Rremembrance and Honors;</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">September 1 is Independence Day;</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">October 1 is the day of the Teacher and Mentor;</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">December 8 is the day of the Constitution of the Republic of Uzbekistan;</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">The first day of the religious Muslim holiday “Ruza Hayit” (Iid-al-Fitr);</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">The first day of the religious Muslim holiday “Kurban Hayit” (Iid-al-Adha).</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Voltage in electrical network</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">In the network – AC 220 volts (sockets – eurostandard).</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Safety </h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">In Uzbekistan it is safe, but not only because of the peaceful and hospitable nature of the local population, but also because the state pays much attention to the safety of its and foreign citizens, so the crime rate is very low.</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Meal </h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Uzbek national cuisine is very rich, diverse and caloric. Dozens of types of pilaf, manti, samsa, shish kebabs, lagman, khanum, mammar, chuchvara, eastern sweets and other Uzbek dishes can be tasted in almost any cafe and restaurant in the republic.</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Water and beverages </h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Drinking tap water is not recommended. In hotels, restaurants and shops, mineral water is sold in plastic packaging.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Fruits and vegetables, before consumption, you must necessarily rinse in boiled or running water, and in any case not to drink with water from the tap.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Alcoholic beverages are sold in specialized wine-vodka shops and in restaurants.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">On sale there is always good quality beer of local brands .</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Clothes and footwear</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Some art products are subject to examination, without which export of these products from Uzbekistan is impossible. In case of questions on examination, please contact sellers, guides, drivers or our employees.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Expertise is subject to handmade products: carpets, suzane, musical instruments, art furniture, fiction, painting, graphics, sculpture, silver art objects, silverware, etc.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Alcoholic beverages are sold in specialized wine-vodka shops and in restaurants.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Do not rush to buy antiques, first ask the seller to call a state expert to evaluate the product, perhaps the product is more than 50 years old and in that case, you will not be allowed to take it out of Uzbekistan. Violators are waiting for a fine and confiscation of antiques</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Mobile communication in Uzbekistan</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">In the offices of the mobile operator, you can get a local SIM card by providing a passport and a registration card from the hotel.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">BEELINE: <a className='text-orange font-semibold hover:underline' href="">www.beeline.uz</a></p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">UCELL: <a className='text-orange font-semibold hover:underline' href="">www.ucell.uz</a></p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">UMS: <a className='text-orange font-semibold hover:underline' href="">ums.uz</a></p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Uzmobile GSM: <a className='text-orange font-semibold hover:underline' href="">uzmobile.uz</a></p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">The Internet</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">In Uzbekistan, you can easily find an Internet cafe in any major city. Most hotels have Wi Fi access (password can be accessed at the reception). The width of the channel is usually not used to 2 MBit, and in cheap hotels it is several times smaller.</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Time</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">GMT (GMT) + 5 hours.</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Climate</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">The climate of Uzbekistan is sharply continental. It is characterized by a sharp amplitude of daytime and night, summer and winter temperatures. The temperature difference is quite significant, depending on the pore of the year. The average January temperature drops to -6 ° C, and the average July temperature rises to + 32 ° C. The average annual amount of precipitation falling on the plain is 120 – 200 mm, in mountain areas – 1000 mm. The amount of precipitation is insignificant, therefore, agriculture depends more on irrigation.</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Behavior rules</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">The men are greeted with a hand. Women and girls are undesirable to take their arm without first having asked their consent. With women it is not accepted to greet with a hand, enough of an oral greeting or a slight bow of the head.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">You can not enter the Uzbek’s house in shoes. If the owner goes ahead of you and himself goes into the shoes, then this ban is removed.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Ramadan is the month of Moslem fast, however, restaurants, bars and cafes are working as usual. But, at this time, the local population limits themselves to drinking alcohol.</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Tips</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Their payment is not mandatory, but everyone will be happy with a small tip. It is believed that drivers, porters, tour guides, hotel staff and waiters deserve encouragement, if the customer was satisfied with the service.</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Psychology of bargaining</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">In the East, bargaining is turned into an art form. Bargaining, speak very loudly, and do not pretend that you doubt your victory. Of course, the trader will never let go to the annouced price principlly. But you can really reduce the price to 10-20% by using bargaining.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Bargaining costs until the end, tiring the seller and quenching the curiosity of buyers.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Of course, the trader will say that you are his first customer for today and therefore he gives the goods almost for nothing.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">Have fun shopping.</p>
                            </div>

                            <div className="relative rounded-md p-3 hover:bg-gray-100" >
                                <h3 className="text-[14px] font-semibold leading-5 text-slate-900">Language</h3>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">The official language in the Republic of Uzbekistan is Uzbek. In the cities of Bukhara and Samarkand, however, the main language of communication among local residents is Tajik.</p>
                                <p className=" text-slate-500 tracking-wide leading-[1.4] mb-4">The Russian language is very common, and up to 80% of the population and speak in it, especially urban.</p>
                            </div>

                        </Tab.Panel>
                        {/* questions */}
                        <Tab.Panel className={classNames(
                            'rounded-xl bg-white p-3',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 h-full'
                        )}
                        >
                            {questions.map((question, questionIndex) => (
                                <Disclosure className="rounded-md hover:bg-gray-100 mb-4 p-1" as="div" key={questionIndex}>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className='text-[14px] font-semibold text-left text-slate-900 p-3 text-blackColor3 font-open w-full flex gap-[30px] justify-between items-start leading-[1.2]'>{question.title} <ChevronDownIcon className={`${open ? "-rotate-180" : "rotate-0"} transition-all w-4 h-4 shrink-0`} /> </Disclosure.Button>
                                            <Transition
                                                show={open}
                                                enter="transition duration-100 ease-out"
                                                enterFrom="transform scale-95 opacity-0"
                                                enterTo="transform scale-100 opacity-100"
                                                leave="transition duration-75 ease-out"
                                                leaveFrom="transform scale-100 opacity-100"
                                                leaveTo="transform scale-95 opacity-0"
                                            >
                                                <Disclosure.Panel as="div" className=' ml-3'>
                                                    <p className='mt-2 text-slate-500 tracking-wide leading-[1.5] pr-2 pb-2'>{question.desc}</p>
                                                </Disclosure.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </Tab.Panel>

                    </Tab.Panels>
                </Tab.Group>

                <div className='w-1/2 aspect-square relative bg2'></div>

            </div>

        </>
    )
}

export default Container2