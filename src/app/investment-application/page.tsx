import React from "react";
import Logo from "../assets/images/logo.png";
import Image from "next/image";
const InvestmentApplicationPage = () => {
   return (
      <div className="w-screen h-screen login-gradient overflow-x-hidden overflow-y-hidden text-white flex items-center overflow-hidden relative">
         <div className="pattern absolute w-[4000px] h-[4000px] -right-[2800px] -bottom-[2800px] -rotate-[135deg]"></div>
         <div className="w-full max-w-[1000px] h-[500px] bg-[#ffffff78] flex flex-col relative z-[200] lg:ml-40 rounded-2xl shadow">
            <div className="top w-full flex-1 h-full bg-[#ffffffc0] px-10 flex flex-col pt-8 rounded-t-2xl">
               <div className="top-container flex w-full justify-between">
                  <Image
                     src={Logo}
                     alt="omg-logo"
                     className="w-[150px] h-auto"
                  />
                  <div className="steps">
                     <h5 className="text-black">Step 1/3</h5>
                  </div>
               </div>
               <div className="title-container w-full items-center mt-8">
                  <h5 className="text-[17px] text-black">
                     Fill the informations.
                  </h5>
               </div>
               <div className="input-container flex items-start gap-0 mt-6 text-black flex-col">
                  <h5 className="text-[13px] font-medium pl-[2px]">Name</h5>
                  <input
                     type="text"
                     className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
                  />
               </div>
               <div className="input-container flex items-start gap-0 mt-3 text-black flex-col">
                  <h5 className="text-[13px] font-medium pl-[2px]">Surname</h5>
                  <input
                     type="text"
                     className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
                  />
               </div>
            </div>
            <div className="bottom flex items-center justify-between w-full h-20 px-10 text-black">
               <div className="left flex items-center text-[14px] font-medium">
                  <h5>© 2011 - 2024 OMG CAPITAL ADVISORS GROUP</h5>
               </div>

               <div className="right flex gap-6">
                  <button className="hover:bg-black hover:text-white transition-colors duration-300  px-4 py-[6px] bg-logoRed text-white rounded-lg text-[14px]">
                     Next Step
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default InvestmentApplicationPage;
