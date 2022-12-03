import React from "react";
import Link from "next/link";
import { getLanguage } from "../redux/selector";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const { language } = getLanguage();
  return (
    <div className="bg-darkPurple py-[100px]">
      <div className="main-div text-white flex flex-wrap gap-[100px]">
        <div className="w-[260px] ml:w-full">
          <a
            href="#"
            className="text-[25px] sm:text-[30px] font-[800] flex items-end gap-[10px] "
          >
            <div className="h-[35px] w-[25px] sm:h-[48] sm:w-[35px] relative shrink-0">
              <Image
                src="/images/logo.webp"
                layout="fill"
                objectFit="contain"
                alt="img"
              />
            </div>
            <span className=" leading-[1]">TRAVEL.UZ</span>
          </a>
          <p className="py-8 leading-[2]">
            Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam eu convallis tortor.
          </p>
          <div className="flex gap-4 ml:justify-evenly ml:gap-0 ">
            <div className="border border-orange p-2 rounded-full">
              <FaTelegramPlane />
            </div>
            <div className="border border-orange p-2 rounded-full">
              <FaFacebookF />
            </div>
            <div className="border border-orange p-2 rounded-full">
              <FaInstagram />
            </div>
            <div className="border border-orange p-2 rounded-full">
              <FaTwitter />
            </div>
          </div>
        </div>

        <div className="">
          <p className="text-[16px] font-bold mb-8">{language["links"]}</p>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-orange" href="#">
                {language["home"]}
              </a>
            </li>
            <li>
              <a className="hover:text-orange" href="#">
                {language["about"]}
              </a>
            </li>
            <li>
              <a className="hover:text-orange" href="#">
                {language["offers"]}
              </a>
            </li>
            <li>
              <a className="hover:text-orange" href="#">
                {language["news"]}
              </a>
            </li>
            <li>
              <a className="hover:text-orange" href="#">
                {language["contact"]}
              </a>
            </li>
            <li>
              <Link href="/oferta">
                <a className="hover:text-orange">{language["oferta"]}</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="">
          <p className="text-[16px] font-bold mb-8">
            {" "}
            {language["contactinfo"]}
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4 items-center">
              <div className="relative w-6 h-6">
                <Image
                  src="/images/contactIcons/placeholder.svg"
                  layout="fill"
                  objectFit="contain"
                  alt="img"
                />
              </div>
              <p>
                {language["namangancity"]}, {language["uzbekistan"]}.
              </p>
            </li>
            <li className="flex gap-4 items-center">
              <div className="relative w-6 h-6">
                <Image
                  src="/images/contactIcons/phone.svg"
                  layout="fill"
                  objectFit="contain"
                  alt="img"
                />
              </div>
              <p>2556-808-8613, {language["mondayTo"]}</p>
            </li>
            <li className="flex gap-4 items-center">
              <div className="relative w-6 h-6">
                <Image
                  src="/images/contactIcons/message.svg"
                  layout="fill"
                  objectFit="contain"
                  alt="img"
                />
              </div>
              <p>contactme@gmail.com</p>
            </li>
            <div className="flex gap-5">
              <img
                style={{ width: "100px", height: "20px" }}
                className="ml:w-[100px]"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png"
              />
              <img
                style={{
                  width: "100px",
                  height: "20px",
                  padding: "2px",
                  borderRadius: "4px",
                }}
                className="bg-white"
                src="https://cdn.paycom.uz/documentation_assets/payme_01.svg"
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
