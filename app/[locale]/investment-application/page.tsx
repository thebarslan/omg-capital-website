"use client";
import React, { useState } from "react";
import Logo from "../../images/logo.png";
import Image from "next/image";
import Step1 from "../../components/page_components/investment-application/step1";
import Step2 from "../../components/page_components/investment-application/step2";
import Step3 from "../../components/page_components/investment-application/step3";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const InvestmentApplicationPage = () => {
  const router = useRouter();
  const t = useTranslations("Investment-Applications-Page");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleStep = () => {
    if (step === 3) {
      console.log("Navigate");
      setLoading(true);
      setTimeout(() => {
        router.push("https://tahvilbonovdmk.pashabank.com.tr/app");
      }, 5000);
    }
    setStep(step + 1);
  };

  return (
    <>
      {/* Loading modal */}
      {loading && (
        <div className="fixed inset-0 z-[600] flex flex-col justify-center items-center bg-white bg-opacity-80">
          <div className="relative duration-500 flex justify-center items-center">
            <div className="w-[200px] h-[200px] rounded-full border-t-4 border-b-4 border-logoGray animate-spin-slow"></div>
            <div className="absolute">
              <Image src={Logo} alt="omg-logo" className="w-[150px] h-auto" />
            </div>
          </div>
          <div className="flex mt-6 text-logoGray">
            <p>{t("redirect")}</p>
          </div>
        </div>
      )}

      {/* Main page */}
      <div className={`w-screen h-screen login-gradient overflow-x-hidden overflow-y-hidden text-white flex items-center overflow-hidden relative ${loading ? "blur-sm" : ""}`}>
        <div className="absolute bg-[#00000055] z-[200] w-full h-full left-0 top-0"></div>
        <div className="w-full max-w-[1000px] h-[500px] bg-[#fffffff0]  flex flex-col relative z-[200] lg:ml-40 rounded-2xl shadow">
          <div className="top w-full flex-1 h-full bg-[#ffffffc0] px-10 flex flex-col pt-8 rounded-t-2xl">
            <div className="top-container flex w-full justify-between">
              <Image src={Logo} alt="omg-logo" className="w-[150px] h-auto" />
              <div className="steps">
                <h5 className="text-black">
                  {t("step")} {step}/3
                </h5>
              </div>
            </div>
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
          </div>
          <div className="bottom flex lg:flex-row flex-col items-center justify-between w-full h-20 px-10 lg:py-0 py-[10px] text-black">
            <div className="left flex items-center text-[12px] font-medium">
              <h5>© 2011 - 2024 OMG CAPITAL ADVISORS GROUP</h5>
            </div>

            <div className="right flex gap-6">
              <div className="right flex gap-6">
                <button
                  className="hover:bg-black hover:text-white transition-colors duration-300 px-4 py-[6px] bg-logoRed text-white rounded-lg text-[13px]"
                  onClick={handleStep}
                >
                  {step === 1 && `${t("next-button")}`}
                  {step === 2 && `${t("next-button")}`}
                  {step === 3 && `${t("submit-button")}`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestmentApplicationPage;
