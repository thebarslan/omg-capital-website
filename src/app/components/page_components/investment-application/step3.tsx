import React from "react";

interface Step3Props {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step3 = ({ formData, handleInputChange }: Step3Props) => {
  return (
    <>
      <div className="title-container w-full items-center mt-8">
        <h5 className="text-[17px] text-black">Fill in your information.</h5>
      </div>
      <div className="input-container flex items-start gap-0 mt-8 text-black flex-col">
        <h5 className="text-[13px] font-medium pl-[2px]">Monthly Income</h5>
        <input
          type="number"
          name="monthlyIncome"
          value={formData.monthlyIncome}
          onChange={handleInputChange}
          className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
        />
      </div>
      <div className="input-container flex items-start gap-0 mt-5 text-black flex-col">
        <h5 className="text-[13px] font-medium pl-[2px]">Profession</h5>
        <input
          type="text"
          name="profession"
          value={formData.profession}
          onChange={handleInputChange}
          className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
        />
      </div>
    </>
  );
};

export default Step3;
