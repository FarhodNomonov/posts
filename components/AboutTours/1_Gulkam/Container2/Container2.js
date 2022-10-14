import React from "react";
import Link from "next/link";
import Image from "next/image";

const Container2 = () => {
  return (
    <div className="main-div grid grid-cols-3 py-[100px]  gap-[20px]">
      {/* left */}
      <div className="col-span-2 space-y-12">
        <h1>Gulkam Canyon</h1>

        <div className="flex flex-col gap-2">
          <div className="w-full aspect-video relative">
            <Image
              src="https://www.advantour.com/img/uzbekistan/chimgan/gulkam-canyon4.jpg"
              layout="fill"
              objectFit="cover"
              alt="img"
            />
            <div className="bg-orange text-white absolute top-8 left-8 py-2 px-8 flex flex-col items-center rounded-full">
              {/* <span className='text-[24px] font-bold'>01</span> */}
              <span className="text-[24px] font-bold">September, 2022</span>
            </div>
          </div>
          <div>
            <h3 className="text-black font-semibold">
              The tour is offered from mid-May until early October.
            </h3>
            <p className="leading-[2.14] mt-6 mb-8">
              Adventurous and active travellers that want to experience
              Uzbekistan’s nature will love this day of hiking in the Gulkam
              Canyon and the Chimgan Mountains. Before the start of the active
              part of the tour, you will have a trip along the serpentines,
              which offer a view of the Charvak reservoir and the rocky slopes
              of the eastern side of Chimgan. You will drive into the Gulkam
              Gorge and go straight to the gorges. Sheer cliffs will rise above
              you on both sides, where sunlight reaches the bottom only at noon.
              After seeing the main part of the tour, you will go to the
              picturesque waterfall on the Kuilyusai tributary to rest and have
              lunch. During heavy rain, the Gulkam gorges can become deadly in
              the event of a mudflow, but in good weather this is a great
              opportunity to feel like a real extreme.
            </p>
            {/* <a className='text-[14px] font-[700] text-orange hover:text-darkPurple transition-all' href="#">READ MORE</a> */}
          </div>
        </div>
      </div>

      {/* right */}
      <div className="col-span-1 flex flex-col items-start ml-[50px]">
        <h3 className="text-black font-semibold text-[18px] mb-[40px]">
          Another Tours
        </h3>

        <Link href="/about-tours/index_2">
          <a>
            <button
              type="button"
              className="text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]"
            >
              Yangiabad Tour
            </button>
          </a>
        </Link>

        <Link href="/about-tours">
          <a>
            <button
              type="button"
              className="text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]"
            >
              Chimgan & Charvak Tour
            </button>
          </a>
        </Link>

        <Link href="/about-tours">
          <a>
            <button
              type="button"
              className="text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]"
            >
              Bulaksu Tour
            </button>
          </a>
        </Link>

        <Link href="/about-tours">
          <a>
            <button
              type="button"
              className="text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]"
            >
              Tour to Jade Lakes (Urungach)
            </button>
          </a>
        </Link>

        <Link href="/about-tours">
          <a>
            <button
              type="button"
              className="text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]"
            >
              Obi-Rakhmat and Paltau
            </button>
          </a>
        </Link>
        <Link href="/about-tours">
          <a>
            <button
              type="button"
              className="text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]"
            >
              Tour to Bulaksu Gorge
            </button>
          </a>
        </Link>

        <Link href="/about-tours">
          <a>
            <button
              type="button"
              className="text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]"
            >
              Jade Lakes
            </button>
          </a>
        </Link>

        <Link href="/about-tours">
          <a>
            <button
              type="button"
              className="text-[14px] font-[500] ml-4 tracking-wide cursor-pointer hover:text-darkPurple mb-[20px]"
            >
              Aydarkul Lake
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Container2;
