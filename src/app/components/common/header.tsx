"use client";
import React, { useEffect, useState } from "react";
import Container from "./container";
import Logo from "../../assets/images/logo.png";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { FaInstagram, FaMediumM } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
   const [isOpen, setOpen] = useState(false);
   const [CommunityHover, setCommunityHover] = useState(false);
   const [ContactHover, setContactHover] = useState(false);
   const [NewsHover, setNewsHover] = useState(false);
   useEffect(() => {
      setCommunityHover(false);
      setContactHover(false);
      setNewsHover(false);
   }, []);
   return (
      <div className="header-container w-full shadow-md bg-[#F1F1F1] relative">
         <div
            className={`absolute mobile-menu w-full left-0 top-0 flex bg-[#F1F1F1] pt-24 z-[250] lg:hidden flex-col px-6 ${
               isOpen ? "active" : ""
            }`}
         >
            <div className="links w-full flex flex-col gap-2 *:text-black mt-5">
               <a href="/">HOME</a>

               <a href="/team">TEAM</a>
               <a href="/our-firm">OUR FIRM</a>
               <a href="/news">NEWS</a>
               <div className="link mt-6">
                  <a
                     href="/login"
                     className="w-full h-full px-6 py-2 bg-logoRed rounded-sm hover:bg-black duration-300 transition-colors text-white hover:text-white font-semibold"
                  >
                     INVESTOR LOGIN
                  </a>
               </div>
            </div>
            <div className="social-icons flex mt-8 gap-4">
               <div className="link h-10 flex items-center">
                  <a
                     href="https://x.com/prddao?t=PQe1O14blRuYW7YHmEWYzw&s=09"
                     target="_blank"
                     className=" text-black hover:text-logoRed w-full h-full flex items-center gap-4 rounded-tl-[6px] rounded-tr-[6px]"
                  >
                     <FaXTwitter className="w-auto h-7" />
                  </a>
               </div>
               <div className="link h-10 flex items-center">
                  <a
                     href="#"
                     className=" text-black hover:text-logoRed w-full h-full flex items-center gap-4 "
                  >
                     <FaInstagram className="w-auto h-7 " />
                  </a>
               </div>
               <div className="link h-10  flex items-center">
                  <a
                     href="https://t.me/paraddao"
                     target="_blank"
                     className=" text-black hover:text-logoRed w-full h-full flex items-center gap-4 "
                  >
                     <FaMediumM className="w-auto h-7 " />
                  </a>
               </div>
            </div>
         </div>
         <Container>
            <div className="header-inner-container flex w-full lg:h-[80px] h-[78px]  justify-between items-center relative z-[400]">
               <div className="logo-container">
                  <a href="/">
                     <Image
                        src={Logo}
                        alt="omg-logo"
                        className="lg:h-[48px] h-[48px] -mt-[3px] w-auto relatize z-[500]"
                     />
                  </a>
               </div>
               <div className="links gap-10 h-full items-center text-[14px] lg:flex hidden">
                  <div className="link">
                     <a
                        href="/"
                        className="w-full h-full hover:text-logoRed font-semibold"
                     >
                        HOME
                     </a>
                  </div>
                  <div
                     className="community relative"
                     onMouseEnter={() => setCommunityHover(true)}
                     onMouseLeave={() => setCommunityHover(false)}
                  >
                     <a href="#">WHO WE ARE</a>
                     {CommunityHover && (
                        <div className="hoverable-community-menu absolute w-[110px] h-auto -left-1 pt-10 top-0 z-[1000] flex flex-col">
                           <div className="menu bg-white rounded-lg w-full h-full relative shadow">
                              <div className="triangle -top-3 left-4 absolute z-[200]"></div>

                              <div className="link h-10 w-full flex items-center">
                                 <a
                                    href="/team"
                                    className="hover:bg-logoRed text-black hover:text-white w-full h-full flex items-center gap-[10px] pl-3 justify-start rounded-tl-[6px] rounded-tr-[6px] transition-colors duration-300"
                                 >
                                    <h5 className="text-[13px]">Our Team</h5>
                                 </a>
                              </div>
                              <div className="link h-10 w-full flex items-center">
                                 <a
                                    href="our-firm"
                                    className="hover:bg-logoRed text-black rounded-bl-[6px] rounded-br-[6px] hover:text-white w-full h-full flex items-center gap-[10px] pl-3 justify-start transition-colors duration-300"
                                 >
                                    <h5 className="text-[13px]">Firm</h5>
                                 </a>
                              </div>
                           </div>
                        </div>
                     )}
                  </div>
                  <div
                     className="community relative"
                     onMouseEnter={() => setContactHover(true)}
                     onMouseLeave={() => setContactHover(false)}
                  >
                     <a href="#">CONTACT</a>
                     {ContactHover && (
                        <div className="hoverable-community-menu absolute w-[120px] h-auto -left-1 pt-10 top-0 z-[1000] flex flex-col">
                           <div className="menu bg-white rounded-lg w-full h-full relative shadow">
                              <div className="triangle -top-3 left-4 absolute"></div>

                              <div className="link h-10 w-full flex items-center">
                                 <a
                                    href="/team"
                                    className="hover:bg-logoRed text-black hover:text-white w-full h-full flex items-center gap-[10px] pl-3  justify-start rounded-tl-[6px] rounded-tr-[6px] transition-colors duration-300"
                                 >
                                    <FaXTwitter className="text-[14px] mb-[1px]" />
                                    <h5 className="text-[13px]">Twitter</h5>
                                 </a>
                              </div>
                              <div className="link h-10 w-full flex items-center">
                                 <a
                                    href="/team"
                                    className="hover:bg-logoRed text-black hover:text-white w-full h-full flex items-center gap-[10px] pl-3  justify-start transition-colors duration-300"
                                 >
                                    <FaInstagram className="text-[14px] mb-[1px]" />
                                    <h5 className="text-[13px]">Instagram</h5>
                                 </a>
                              </div>
                              <div className="link h-10 w-full flex items-center">
                                 <a
                                    href="/team"
                                    className="hover:bg-logoRed text-black hover:text-white w-full h-full flex items-center gap-[10px] pl-3  justify-start rounded-bl-[6px] rounded-br-[6px] transition-colors duration-300"
                                 >
                                    <FaMediumM className="text-[14px] mb-[1px]" />
                                    <h5 className="text-[13px]">Medium</h5>
                                 </a>
                              </div>
                           </div>
                        </div>
                     )}
                  </div>
                  <div className="link">
                     <a
                        href="/news"
                        className="w-full h-full hover:text-logoRed font-semibold"
                     >
                        NEWS
                     </a>
                  </div>
                  <div className="link">
                     <a
                        href="/login"
                        className="w-full h-full px-6 py-2 bg-logoRed rounded-md hover:bg-black duration-300 transition-colors text-white hover:text-white font-semibold text-[14px]"
                     >
                        INVESTOR LOGIN
                     </a>
                  </div>
               </div>

               <div className="menu-icon lg:hidden flex ml-4">
                  <Hamburger
                     toggled={isOpen}
                     toggle={setOpen}
                     size={24}
                     rounded
                  />
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Header;
