import React from "react";

const Step1 = () => {
   return (
      <>
         <div className="title-container w-full items-center mt-8">
            <h5 className="text-[17px] text-black">
               Register to create an account.
            </h5>
         </div>
         <div className="input-container flex items-start gap-0 mt-2 text-black flex-col">
            <h5 className="text-[13px] font-medium pl-[2px]">Name</h5>
            <input
               type="text"
               className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
            />
         </div>
         <div className="input-container flex items-start gap-0 mt-5 text-black flex-col">
            <h5 className="text-[13px] font-medium pl-[2px]">Surname</h5>
            <input
               type="text"
               className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
            />
         </div>
         <div className="input-container flex items-start gap-0 mt-5 text-black flex-col">
            <h5 className="text-[13px] font-medium pl-[2px]">Email</h5>
            <input
               type="email"
               className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
            />
         </div>
         <div className="input-container flex items-start gap-0 mt-5 text-black flex-col">
            <h5 className="text-[13px] font-medium pl-[2px]">Gender</h5>
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
