import React from "react";
import Container from "./container";
import Logo from "../../assets/images/logo.png";
import Image from "next/image";

import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
   return (
      <div className="w-full flex lg:h-[300px] h-auto bg-[#f0f0f0]">
         <Container>
            <div className="w-full justify-between lg:pt-8 pt-16 h-full flex flex-col lg:gap-0 gap-12 xl:px-4 px-0">
               <div className="top h-full flex-1 w-full">
                  <div className="w-full flex justify-between h-full lg:flex-row flex-col lg:gap-0 gap-12">
                     <div className="left flex-1 w-full flex flex-col lg:items-start items-center">
                        <div className="logo-container h-full flex items-center -mt-3">
                           <div className="logo">
                              <a href="/" className="w-auto">
                                 <Image
                                    src={Logo}
                                    alt="omg-logo"
                                    className="lg:h-[100px] w-auto h-[60px]"
                                 />
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="middle flex-1 justify-center items-center text-center h-full flex flex-col gap-3">
                        <div className="h-full flex flex-col justify-center gap-3 mt-1">
                           <div className="title-container">
                              <h5 className="font-bold text-[18px]">
                                 NAVIGATION
                              </h5>
                           </div>
                           <div className="links w-full flex flex-col text-center   gap-[6px]">
                              <a
                                 href="/"
                                 className="text-[15px] hover:text-logoRed transition-colors duration-300"
                              >
                                 Home
                              </a>
                              <a
                                 href="/"
                                 className="text-[15px] hover:text-logoRed transition-colors duration-300"
                              >
                                 Team
                              </a>
                              <a
                                 href="/"
                                 className="text-[15px] hover:text-logoRed transition-colors duration-300"
                              >
                                 Our Firm
                              </a>
                              <a
                                 href="/"
                                 className="text-[15px] hover:text-logoRed transition-colors duration-300"
                              >
                                 News
                              </a>
                           </div>
                        </div>
                     </div>
                     <div className="right flex-1 w-full flex flex-col lg:items-end items-center -mt-0 h-full justify-center">
                        <div className="socials h-full flex flex-col justify-center gap-5 lg:items-end items-center">
                           <h5 className="text-[16px] font-extrabold">
                              SOCIAL MEDIAS
                           </h5>
                           <div className="social-links flex flex-col gap-[10px] text-end">
                              <a
                                 target="_blank"
                                 href="https://www.linkedin.com/company/omg-capital-financial-advisory/"
                                 className="flex items-center lg:justify-end justify-center lg:flex-row flex-row-reverse gap-2 text-[15px] hover:text-logoRed transition-colors duration-300"
                              >
                                 Linkedin <FaLinkedin className="text-[18px]" />
                              </a>
                              {/* <a
                                 href="/"
                                 className="flex items-center lg:justify-end justify-center lg:flex-row flex-row-reverse gap-2 text-[15px] hover:text-logoRed transition-colors duration-300"
                              >
                                 Instagram{" "}
                                 <FaInstagram className="text-[18px]" />
                              </a>
                              <a
                                 href="/"
                                 className="flex items-center lg:justify-end justify-center lg:flex-row flex-row-reverse gap-2 text-[15px] hover:text-logoRed transition-colors duration-300"
                              >
                                 Medium <FaMediumM className="text-[18px]" />
                              </a> */}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="bottom w-full flex justify-center h-auto pb-3">
                  <h5 className="text-[13px] text-[#6e6d6daa] font-semibold flex items-center gap-[5px]">
                     © 2011 - 2024 OMG CAPITAL ADVISORS GROUP
                  </h5>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Footer;
