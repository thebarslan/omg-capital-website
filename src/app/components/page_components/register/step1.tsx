import React from "react";

interface Step1Props {
   formData: {
      name: string;
      surname: string;
      email: string;
      gender: string;
   };
   handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Step1: React.FC<Step1Props> = ({ formData, handleInputChange }) => {
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
               name="name"
               value={formData.name}
               onChange={handleInputChange}
               className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
            />
         </div>
         <div className="input-container flex items-start gap-0 mt-5 text-black flex-col">
            <h5 className="text-[13px] font-medium pl-[2px]">Surname</h5>
            <input
               type="text"
               name="surname"
               value={formData.surname}
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
            <h5 className="text-[13px] font-medium pl-[2px]">Gender</h5>
            <select
               name="gender"
               value={formData.gender}
               onChange={handleInputChange}
               className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
            >
               <option value="" disabled>
                  Select your gender
               </option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
            </select>
         </div>
      </>
   );
};

export default Step1;
