import React from "react";

interface Step2Props {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step2 = ({ formData, handleInputChange }: Step2Props) => {
  return (
    <>
      <div className="title-container w-full items-center mt-8">
        <h5 className="text-[17px] text-black">Fill in your information.</h5>
      </div>
      <div className="input-container flex items-start gap-0 mt-3 text-black flex-col">
        <h5 className="text-[13px] font-medium pl-[2px]">Phone Number</h5>
        <input
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
        />
      </div>
      <div className="input-container flex items-start gap-0 mt-5 text-black flex-col">
        <h5 className="text-[13px] font-medium pl-[2px]">Email</h5>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
        />
      </div>
      <div className="input-container flex items-start gap-0 mt-5 text-black flex-col">
        <h5 className="text-[13px] font-medium pl-[2px]">City</h5>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
        />
      </div>
      <div className="input-container flex items-start gap-0 mt-5 text-black flex-col">
        <h5 className="text-[13px] font-medium pl-[2px]">Province</h5>
        <input
          type="text"
          name="province"
          value={formData.province}
          onChange={handleInputChange}
          className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
        />
      </div>
    </>
  );
};

export default Step2;
