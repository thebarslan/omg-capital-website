"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface Step2Props {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
}

const Step2: React.FC<Step2Props> = ({ setUsername, setPassword, setConfirmPassword }) => {
  const t = useTranslations("RegisterPage");
  const [seePassword, setSeePassword] = useState(false);
  const [seePasswordAgain, setSeePasswordAgain] = useState(false);

  return (
    <>
      <div className="title-container w-full items-center mt-8">
        <h5 className="text-[17px] text-black">{t("title")}</h5>
      </div>
      <div className="input-container flex items-start gap-0 mt-6 text-black flex-col">
        <h5 className="text-[13px] font-medium pl-[2px]">{t("username")}</h5>
        <input
          type="text"
          className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container flex items-start gap-0 mt-5 text-black flex-col relative">
        <h5 className="text-[13px] font-medium pl-[2px]">{t("password")}</h5>
        <div className="input-container relative">
          <input
            type={seePassword ? "text" : "password"}
            className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="absolute right-2 bottom-[6px] z-[300]">
            <button
              className="flex items-center justify-center"
              onClick={() => setSeePassword(!seePassword)}
            >
              {seePassword ? <FaRegEye className="text-logoGray" /> : <FaRegEyeSlash className="text-logoGray" />}
            </button>
          </div>
        </div>
      </div>
      <div className="input-container flex items-start gap-0 mt-5 text-black flex-col relative">
        <h5 className="text-[13px] font-medium pl-[2px]">{t("confirm-password")}</h5>
        <div className="input-container relative">
          <input
            type={seePasswordAgain ? "text" : "password"}
            className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="absolute right-2 bottom-[6px] z-[300]">
            <button
              className="flex items-center justify-center"
              onClick={() => setSeePasswordAgain(!seePasswordAgain)}
            >
              {seePasswordAgain ? <FaRegEye className="text-logoGray" /> : <FaRegEyeSlash className="text-logoGray" />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;