import React from "react";

interface Step2Props {
   formData: {
      username: string;
      password: string;
      confirmPassword: string;
   };
   handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step2: React.FC<Step2Props> = ({ formData, handleInputChange }) => {
   return (
      <>
         <div className="title-container w-full items-center mt-8">
            <h5 className="text-[17px] text-black">
               Register to create an account.
            </h5>
         </div>
         <div className="input-container flex items-start gap-0 mt-6 text-black flex-col">
            <h5 className="text-[13px] font-medium pl-[2px]">Username</h5>
            <input
               type="text"
               name="username"
               value={formData.username}
               onChange={handleInputChange}
               className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
            />
         </div>
         <div className="input-container flex items-start gap-0 mt-5 text-black flex-col relative">
            <h5 className="text-[13px] font-medium pl-[2px]">Password</h5>
            <input
               type="password"
               name="password"
               value={formData.password}
               onChange={handleInputChange}
               className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
            />
         </div>
         <div className="input-container flex items-start gap-0 mt-5 text-black flex-col relative">
            <h5 className="text-[13px] font-medium pl-[2px]">Confirm Password</h5>
            <input
               type="password"
               name="confirmPassword"
               value={formData.confirmPassword}
               onChange={handleInputChange}
               className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
            />
         </div>
      </>
   );
};

export default Step2;
