import React from "react";
import Logo from "../assets/images/logo.png";
import Image from "next/image";
const ForgotUsername = () => {
   return (
      <div className="w-screen h-screen login-gradient overflow-x-hidden overflow-y-hidden text-white flex items-center overflow-hidden relative">
         <div className="pattern absolute w-[4000px] h-[4000px] -right-[2800px] -bottom-[2800px] -rotate-[135deg]"></div>
         <div className="w-full max-w-[1000px] h-[500px] bg-[#ffffff78] flex flex-col relative z-[200] lg:ml-40 rounded-2xl shadow">
            <div className="top w-full flex-1 h-full bg-[#ffffffc0] px-10 flex flex-col pt-8 rounded-t-2xl">
               <div className="image-container w-[150px]">
                  <a href="/">
                     <Image
                        src={Logo}
                        alt="omg-logo"
                        className="w-[150px] h-auto"
                     />
                  </a>
               </div>
               <div className="title-container w-full items-center mt-8">
                  <h5 className="text-[17px] text-black">
                     Please enter your email.
                  </h5>
               </div>
               <div className="input-container flex items-start gap-0 mt-6 text-black flex-col">
                  <h5 className="text-[13px] font-medium pl-[2px]">Email</h5>
                  <input
                     type="text"
                     className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
                  />
               </div>

               <div className="button-container mt-5">
                  <button className="px-6 py-[5px] rounded-lg text-[13px] font-medium login-btn">
                     Submit
                  </button>
               </div>
            </div>
            <div className="bottom flex items-center justify-between w-full h-20 px-10 text-black">
               <div className="left flex items-center text-[14px] font-medium">
                  <h5>© 2011 - 2024 OMG CAPITAL ADVISORS GROUP</h5>
               </div>

               <div className="right flex gap-6">
                  <a
                     href="/"
                     className="hover:bg-black hover:text-white transition-colors duration-300  px-4 py-[6px] bg-logoRed text-white rounded-lg text-[14px]"
                  >
                     HOME
                  </a>
                  <a
                     href="/"
                     className="hover:bg-black hover:text-white transition-colors duration-300  px-4 py-[6px] bg-logoRed text-white rounded-lg text-[14px]"
                  >
                     REGISTER
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ForgotUsername;
