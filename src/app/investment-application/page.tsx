"use client";
import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import Image from "next/image";
import Step1 from "../components/page_components/investment-application/step1";
import Step2 from "../components/page_components/investment-application/step2";
import Step3 from "../components/page_components/investment-application/step3";
import { useInvestor } from "../contexts/InvestorContext"; // InvestorContext doğru yolda olduğundan emin olun
import { useRouter } from "next/navigation";

const InvestmentApplicationPage = () => {
   const [step, setStep] = useState(1);
   const { addInvestor } = useInvestor(); 
   const router = useRouter();
   // Form verilerini toplamak için bir state oluşturun
   const [formData, setFormData] = useState({
      name: "",
      surname: "",
      birthDate: "",
      gender: "",
      phoneNumber: "",
      email: "",
      city: "",
      province: "",
      monthlyIncome: 0,
      profession: "",
   });

   // Form verilerini güncellemek için bir handleChange fonksiyonu
   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   // Adım ilerlemesini kontrol etme ve veriyi kaydetme işlemi
   const handleStep = async () => {
      if (step === 3) {
         // Form gönderme işlemi burada olacak
         try {
            await addInvestor(formData);
            router.push("/");
            console.log("Investor registered successfully");
         } catch (error) {
            console.error("Error registering investor", error);
         }
         return;
      }
      setStep(step + 1);
   };

   return (
      <div className="w-screen h-screen login-gradient overflow-x-hidden overflow-y-hidden text-white flex items-center overflow-hidden relative">
         <div className="absolute bg-[#00000055] z-[200] w-full h-full left-0 top-0"></div>
         <div className="w-full max-w-[1000px] h-[500px] bg-[#fffffff0] flex flex-col relative z-[200] lg:ml-40 rounded-2xl shadow">
            <div className="top w-full flex-1 h-full bg-[#ffffffc0] px-10 flex flex-col pt-8 rounded-t-2xl">
               <div className="top-container flex w-full justify-between">
                  <Image
                     src={Logo}
                     alt="omg-logo"
                     className="w-[150px] h-auto"
                  />
                  <div className="steps">
                     <h5 className="text-black">Step {step}/3</h5>
                  </div>
               </div>
               {step === 1 && <Step1 formData={formData} handleInputChange={handleInputChange} />}
               {step === 2 && <Step2 formData={formData} handleInputChange={handleInputChange} />}
               {step === 3 && <Step3 formData={formData} handleInputChange={handleInputChange} />}
            </div>
            <div className="bottom flex lg:flex-row flex-col items-center justify-between w-full h-20 px-10 lg:py-0 py-[10px] text-black">
               <div className="left flex items-center text-[12px] font-medium">
                  <h5>© 2011 - 2024 OMG CAPITAL ADVISORS GROUP</h5>
               </div>

               <div className="right flex gap-6">
                  <div className="right flex gap-6">
                     <button
                        className="hover:bg-black hover:text-white transition-colors duration-300  px-4 py-[6px] bg-logoRed text-white rounded-lg text-[13px]"
                        onClick={handleStep}
                     >
                        {step === 1 && "Next"}
                        {step === 2 && "Next"}
                        {step === 3 && "Finish"}
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default InvestmentApplicationPage;
