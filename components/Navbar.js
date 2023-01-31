import React, { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLanguage } from "../redux/selector";
import { setLanguage } from "../redux/action/languageActions";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaBars,
} from "react-icons/fa";
import { ChevronDownIcon, LogoutIcon, XIcon } from "@heroicons/react/outline";
import { getUsersSuccess, getErrorUser } from "../redux/reducer/Auth/userSlice";
import { getRequest } from "../utils/request";
import { getCatergories } from "../redux/reducer/categories";
import { getTours } from "../redux/reducer/tours";
import { nameLang } from "../utils/func";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = getLanguage();
  const user = useSelector(({ user }) => user?.user);
  const categories = useSelector(({ categories }) => categories);

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      getRequest("user", token)
        .then((data) => {
          dispatch(getUsersSuccess(data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const logout = () => {
    dispatch(getErrorUser());
    window.location.reload();
  };

  useEffect(() => {
    const scrollEvent = window.addEventListener("scroll", (e) => {
      if (window.scrollY > 900) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      return () => {
        window.removeEventListener("scroll", scrollEvent());
      };
    });
  }, []);

  const ChangeLanguage = (item) => {
    dispatch(setLanguage(item.target.value));
  };

  const categoriesFC = () => {
    getRequest("category/all")
      .then((data) => {
        dispatch(getCatergories(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getToursFC = () => {
    getRequest("mix/all/product/20")
      .then((data) => {
        dispatch(getTours(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useLayoutEffect(() => {
    categoriesFC();
    getToursFC();
  }, []);

  return (
    <div>
      {/* uppper */}
      <div className="hidden sm:block bg-darkPurple py-[10px] text-white relative z-10">
        <div className="main-div flex items-center justify-between">
          <div className="flex items-center gap-[36px]">
            <h6 className="">
              <a href="tel:+998996340128">+998 99 634 01 28</a>
            </h6>
            <div className="flex gap-[20px]">
              <a
                href="https://t.me/DUPPI_Travel"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegramPlane className="text-[14px] hover:text-orange cursor-pointer" />
              </a>
              <FaFacebookF className="text-[14px] hover:text-orange cursor-pointer" />
              <a
                href="https://www.instagram.com/duppi_travel/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-[14px] hover:text-orange cursor-pointer" />
              </a>
              <FaWhatsapp className="text-[14px] hover:text-orange cursor-pointer" />
            </div>
          </div>
          <h6 className="divide-x text-[10px] login_flex">
            <select className="pr-2 bg-lang mr-2" onChange={ChangeLanguage}>
              <option value="uz">Uz</option>
              <option value="ru">Ru</option>
              <option value="en">En</option>
            </select>

            {user?.name && (
              <LogoutIcon onClick={logout} className="hover:text-orange" />
            )}

            {!user?.name && (
              <Link href="/login">
                <a className="pr-2 mr-2 pl-2 hover:text-orange uppercase">
                  {language["login"]}
                </a>
              </Link>
            )}
            {!user?.name && (
              <Link href="/sign-up">
                <a className="pl-2 mr-2  hover:text-orange uppercase">
                  {language["register"]}
                </a>
              </Link>
            )}
            {user?.name && (
              <Link href="/accaunt">
                <a className="pl-2 mr-2  hover:text-orange uppercase">
                  Accaunt
                </a>
              </Link>
            )}
          </h6>
        </div>
      </div>

      {/* lower */}
      <motion.div
        initial={{ height: 0 }}
        animate={{
          position: isScrolled ? "fixed" : "relative",
          top: isScrolled ? 0 : 0,
          zIndex: isScrolled ? 10 : 0,
          height: isScrolled ? "100px" : 0,
          opacity: isScrolled ? 1 : 0,
        }}
        className="bg-darkPurple/80 backdrop-blur text-white w-full"
      >
        <div className="main-div flex items-center justify-between h-full">
          {/* logo */}
          <Link href="/">
            <a className="h-[100px] w-[200px] relative">
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/logo3.png"
                alt="img"
              />
            </a>
          </Link>

          {/* navigation */}
          <ul className="hidden sm:flex items-center gap-8">
            <li>
              <Link href="/home">
                <a className="text-[13px] font-[600] py-[10px] relative group">
                  <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
                  {language["home"]}
                </a>
              </Link>
            </li>
            {/* countries */}
            <Menu as="li" className="relative ">
              {({ open }) => (
                <>
                  <Menu.Button className="flex gap-1 items-center relative">
                    <a className="text-[13px] font-[600] py-[10px] group">
                      <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
                      {language["asia_central"]}
                    </a>
                    <ChevronDownIcon
                      className={`w-4 ${
                        open ? "transform -rotate-180" : ""
                      } transition-all`}
                    />
                  </Menu.Button>

                  <Transition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Menu.Items
                      static
                      className="absolute left-0 top-0 bg-white whitespace-nowrap text-slate-700 border shadow p-1 rounded outline-none"
                    >
                      <Menu.Item
                        as="div"
                        className="hover:bg-orange hover:text-white p-1 rounded"
                      >
                        <Link href="/about-uzbekistan" className="border-2">
                          <a> {language["asia_central"]}</a>
                        </Link>
                      </Menu.Item>
                      <Menu.Item
                        as="div"
                        className="hover:bg-orange hover:text-white p-1 rounded"
                      >
                        <Link href="/about-kyrgizistan" className="border-2">
                          <a> {language["kyrgizistan"]}</a>
                        </Link>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>

            {/* tours */}
            <li>
              {/* <Link href="/tours">
                <a className="text-[13px] font-[600] py-[10px] relative group">
                  <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
                  {language["tours"]}
                </a>
              </Link> */}

              <Menu as="li" className="relative ">
                {({ open }) => (
                  <>
                    <Menu.Button className="flex gap-1 items-center relative">
                      <a className="text-[13px] font-[600] py-[10px] group">
                        <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
                        {language["tours"]}
                      </a>
                      <ChevronDownIcon
                        className={`w-4 ${
                          open ? "transform -rotate-180" : ""
                        } transition-all`}
                      />
                    </Menu.Button>

                    <Transition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Menu.Items
                        static
                        className="absolute left-0 top-0 bg-white whitespace-nowrap text-slate-700 border shadow p-1 rounded outline-none"
                      >
                        {/* <Link href="/" className="border-2"> */}
                        {categories?.map((item) => {
                          return (
                            <Menu.Item
                              as="div"
                              className="hover:bg-orange hover:text-white p-1 rounded"
                            >
                              <Link href={`/tourInfo/${item?.id}`}>
                              <a>{nameLang(item, language)}</a>
                              </Link>
                              </Menu.Item>
                              
                          );
                        })}
                        {/* </Link> */}
                        
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </li>

            {/*{language["offers"]} */}
            <li>
              <Link href="/about-us">
                <a className="text-[13px] font-[600] py-[10px] relative group">
                  <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
                  {language["about"]}
                </a>
              </Link>
            </li>

            {/*{language["offers"]} */}
            <li>
              <Link href="/offers">
                <a className="text-[13px] font-[600] py-[10px] relative group">
                  <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
                  {language["offers"]}
                </a>
              </Link>
            </li>
            {/* news */}
            <li>
              <Link href="/news">
                <a className="text-[13px] font-[600] py-[10px] relative group">
                  <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
                  {language["news"]}
                </a>
              </Link>
            </li>
            {/* {language["contact"]} */}
            <li>
              <a className="text-[13px] font-[600] py-[10px] relative group">
                <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
                {language["contact"]}
              </a>
            </li>
          </ul>

          <div
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="sm:hidden"
          >
            {isSidebarOpen ? (
              <XIcon className="w-6 hover:text-orange" />
            ) : (
              <FaBars className="text-xl hover:text-orange" />
            )}
          </div>
        </div>
      </motion.div>

      {/* lower */}
      <motion.div className="bg-lightPurple text-white h-[100px] relative z-10">
        <div className="main-div flex items-center justify-between h-full">
          {/* logo */}
          <Link href="/">
            <a className="h-[100px] w-[200px] relative">
              <Image
                layout="fill"
                objectFit="contain"
                src="/images/logo3.png"
                alt="img"
              />
            </a>
          </Link>

          <ul className="hidden sm:flex items-center gap-8">
            {/* countries */}
            <li>
              <Link href="/">
                <a className="text-[13px] font-[600] py-[10px] relative group">
                  <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
                  {language["home"]}
                </a>
              </Link>
            </li>
            <Menu as="li" className="relative ">
              {({ open }) => (
                <>
                  <Menu.Button className="flex gap-1 items-center relative">
                    <a className="text-[13px] font-[600] py-[10px] group">
                      <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
                      {language["asia_central"]}
                    </a>
                    <ChevronDownIcon
                      className={`w-4 ${
                        open ? "transform -rotate-180" : ""
                      } transition-all`}
                    />
                  </Menu.Button>

                  <Transition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Menu.Items
                      static
                      className="absolute left-0 top-0 bg-white whitespace-nowrap text-slate-700 border shadow p-1 rounded outline-none"
                    >
                      <Menu.Item
                        as="div"
                        className="hover:bg-orange hover:text-white p-1 rounded"
                      >
                        <Link href="/about-uzbekistan" className="border-2">
                          <a>{language["uzbekistan"]}</a>
                        </Link>
                      </Menu.Item>
                      <Menu.Item
                        as="div"
                        className="hover:bg-orange hover:text-white p-1 rounded"
                      >
                        <Link
                          href="/about-uzbekistan/about-kyrgizistan"
                          className="border-2"
                        >
                          <a>{language["kyrgizistan"]}</a>
                        </Link>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
            {/* tours */}
            <li>
            <Menu as="li" className="relative ">
                {({ open }) => (
                  <>
                    <Menu.Button className="flex gap-1 items-center relative">
                      <a className="text-[13px] font-[600] py-[10px] group">
                        <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
                        {language["tours"]}
                      </a>
                      <ChevronDownIcon
                        className={`w-4 ${
                          open ? "transform -rotate-180" : ""
                        } transition-all`}
                      />
                    </Menu.Button>

                    <Transition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Menu.Items
                        static
                        className="absolute left-0 top-0 bg-white whitespace-nowrap text-slate-700 border shadow p-1 rounded outline-none"
                      >
                        {/* <Link href="/" className="border-2"> */}
                        {categories?.map((item) => {
                          return (
                            <Menu.Item
                              as="div"
                              className="hover:bg-orange hover:text-white p-1 rounded"
                            >
                              <Link href={`/tourInfo/${item?.id}`}>
                              <a>{nameLang(item, language)}</a>
                              </Link>
                              </Menu.Item>
                              
                          );
                        })}
                        {/* </Link> */}
                        
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </li>

            <li>
              <Link href="/about-us">
                <a className="text-[13px] font-[600] py-[10px] relative group">
                  <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
                  {language["about"]}
                </a>
              </Link>
            </li>

            {/*{language["offers"]} */}
            <li>
              <Link href="/offers">
                <a className="text-[13px] font-[600] py-[10px] relative group">
                  <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
                  {language["offers"]}
                </a>
              </Link>
            </li>
            {/* news */}
            <li>
              <Link href="/news">
                <a className="text-[13px] font-[600] py-[10px] relative group">
                  <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
                  {language["news"]}
                </a>
              </Link>
            </li>
            {/* {language["contact"]} */}
            <li>
              <a className="text-[13px] font-[600] py-[10px] relative group">
                <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
                {language["contact"]}
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <div
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="sm:hidden"
          >
            {isSidebarOpen ? (
              <XIcon className="w-6 hover:text-orange" />
            ) : (
              <FaBars className="text-xl hover:text-orange" />
            )}
          </div>
        </div>
      </motion.div>

      {/* sidebar */}
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: isSidebarOpen ? "70vh" : "0",
          opacity: isSidebarOpen ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 60 }}
        className="lbg fixed left-1 sm:left-3 right-1 sm:right-3 rounded-t-[30px] overflow-hidden bottom-0 z-10 flex flex-col justify-center items-center"
      >
        <div className="h-[100px] w-[300px] relative">
          <Image
            layout="fill"
            objectFit="contain"
            src="/images/logo3.png"
            alt="img"
          />
        </div>
        <ul className="text-center space-y-3">
          <li>
            <Link href="/">
              <a
                onClick={() => setIsSidebarOpen(false)}
                className="text-[24px] font-beyond lowercase text-white tracking-wider font-[500] py-[10px] relative group"
              >
                <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
                {language["home"]}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <a
                onClick={() => setIsSidebarOpen(false)}
                className="text-[24px] font-beyond lowercase text-white tracking-wider font-[500] py-[10px] relative group"
              >
                <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
                {language["about"]}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/offers">
              <a
                onClick={() => setIsSidebarOpen(false)}
                className="text-[24px] font-beyond lowercase text-white tracking-wider font-[500] py-[10px] relative group"
              >
                <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
                {language["offers"]}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/offers">
              <a
                onClick={() => setIsSidebarOpen(false)}
                className="text-[24px] font-beyond lowercase text-white tracking-wider font-[500] py-[10px] relative group"
              >
                <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
                {language["news"]}
              </a>
            </Link>
          </li>
          <li>
            <a
              onClick={() => setIsSidebarOpen(false)}
              className="text-[24px] font-beyond lowercase text-white tracking-wider font-[500] py-[10px] relative group"
            >
              <div className="h-[2px] w-0 group-hover:w-[105%] transition-all lbg absolute top-full left-0"></div>
              {language["contact"]}
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
