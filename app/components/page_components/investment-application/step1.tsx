import { useTranslations } from "next-intl";
import React from "react";

interface Step1Props {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  surname: string;
  setSurname: React.Dispatch<React.SetStateAction<string>>;
  birthDate: string;
  setBirthDate: React.Dispatch<React.SetStateAction<string>>;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
}

const Step1: React.FC<Step1Props> = ({ name, setName, surname, setSurname, birthDate, setBirthDate, gender, setGender }) => {
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-container flex items-start gap-0 mt-5 text-black flex-col">
        <h5 className="text-[13px] font-medium pl-[2px]">{t("surname")}</h5>
        <input
          type="text"
          className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div className="input-container flex items-start gap-0 mt-5 text-black flex-col">
        <h5 className="text-[13px] font-medium pl-[2px]">{t("birth-date")}</h5>
        <input
          type="date"
          className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <div className="input-container flex items-start gap-0 mt-5 text-black flex-col">
        <h5 className="text-[13px] font-medium pl-[2px]">{t("gender")}</h5>
        <select
          name="gender"
          id="gender"
          className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="" disabled>
            {t("select-gender")}
          </option>
          <option value="male">{t("male")}</option>
          <option value="female">{t("female")}</option>
        </select>
      </div>
    </>
  );
};

export default Step1;