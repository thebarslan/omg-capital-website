import { useTranslations } from "next-intl";
import React from "react";

const Step1 = () => {
   const t = useTranslations("Investment-Applications-Page");

   return (
      <>
         <div className="title-container w-full items-center mt-8">
            <h5 className="text-[17px] text-black">{t("fill-informations")}</h5>
         </div>
         <div className="input-container flex items-start gap-0 mt-2 text-black flex-col">
            <h5 className="text-[13px] font-medium pl-[2px]">{t("name")}</h5>
            <input
               type="text"
               className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
            />
         </div>
         <div className="input-container flex items-start gap-0 mt-5 text-black flex-col">
            <h5 className="text-[13px] font-medium pl-[2px]">{t("surname")}</h5>
            <input
               type="text"
               className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
            />
         </div>
         <div className="input-container flex items-start gap-0 mt-5 text-black flex-col">
            <h5 className="text-[13px] font-medium pl-[2px]">{t("birth-date")}</h5>
            <input
               type="date"
               className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
            />
         </div>
         <div className="input-container flex items-start gap-0 mt-5 text-black flex-col">
            <h5 className="text-[13px] font-medium pl-[2px]">{t("gender")}</h5>
            <select
               name="gender"
               id="gender"
               className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
            >
               <option value="" disabled selected>
                  Select your gender
               </option>
               <option value="male">Male</option>
               <option value="female">Female</option>
            </select>
         </div>
      </>
   );
};

export default Step1;
