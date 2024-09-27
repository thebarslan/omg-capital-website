"use client";
import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import Image from "next/image";
import Step1 from "../components/page_components/investment-application/step1";
import Step2 from "../components/page_components/investment-application/step2";
const InvestmentApplicationPage = () => {
   const [step, setStep] = useState(1);
   const handleStep = () => {
      if (step === 2) {
         console.log("Navigate");
         return;
      }
      setStep(step + 1);
   };
   return (
      <div className="w-screen h-screen login-gradient overflow-x-hidden overflow-y-hidden text-white flex items-center overflow-hidden relative">
         <div className="absolute bg-[#00000055] z-[200] w-full h-full left-0 top-0"></div>
         <div className="pattern absolute w-[4000px] h-[4000px] -right-[2800px] -bottom-[2800px] -rotate-[135deg]"></div>
         <div className="w-full max-w-[1000px] h-[500px] bg-[#fffffff0]  flex flex-col relative z-[200] lg:ml-40 rounded-2xl shadow">
            <div className="top w-full flex-1 h-full bg-[#ffffffc0] px-10 flex flex-col pt-8 rounded-t-2xl">
               <div className="top-container flex w-full justify-between">
                  <Image
                     src={Logo}
                     alt="omg-logo"
                     className="w-[150px] h-auto"
                  />
                  <div className="steps">
                     <h5 className="text-black">Step {step}/2</h5>
                  </div>
               </div>
               {step === 1 && <Step1 />}
               {step === 2 && <Step2 />}
            </div>
            <div className="bottom flex lg:flex-row flex-col items-center justify-between w-full h-20 px-10 lg:py-0 py-[9px] text-black">
               <div className="left flex items-center text-[14px] font-medium">
                  <h5>© 2011 - 2024 OMG CAPITAL ADVISORS GROUP</h5>
               </div>

               <div className="right flex gap-6">
                  <div className="right flex gap-6">
                     <button
                        className="hover:bg-black hover:text-white transition-colors duration-300  px-4 py-[6px] bg-logoRed text-white rounded-lg text-[14px]"
                        onClick={handleStep}
                     >
                        {step === 1 && "Next"}
                        {step === 2 && "Finish"}
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default InvestmentApplicationPage;
