import React from "react";
import Logo from "../../assets/images/logo.png";
import Image from "next/image";

const AdminLogin = () => {
   return (
      <div className="w-screen h-screen flex justify-center items-center relative">
         <div className="absolute w-full h-full bg-[#d9d9d9de] left-0 top-0"></div>
         <div className="login-container flex flex-col lg:w-[400px] w-[90%] mx-auto h-auto p-12 bg-white shadow relative z-[200] rounded-lg">
            <div className="logo-container">
               <Image src={Logo} alt="logo" className="w-full h-auto" />
            </div>
            <div className="login-text-container w-full flex items-center justify-center mt-10">
               <h5 className="text-center">Login to continue to admin panel</h5>
            </div>
            <div className="input-container w-full flex mt-10 justify-center">
               <div className="coolinput">
                  <label htmlFor="input" className="text">
                     Username:
                  </label>
                  <input
                     type="text"
                     placeholder="Write here..."
                     name="input"
                     className="input"
                  />
               </div>
            </div>
            <div className="input-container w-full flex mt-4 justify-center">
               <div className="coolinput">
                  <label htmlFor="input" className="text">
                     Password:
                  </label>
                  <input
                     type="text"
                     placeholder="Write here..."
                     name="input"
                     className="input"
                  />
               </div>
            </div>
            <div className="button-container lg:mt-12 mt-8">
               <button className="w-full py-[6px] lg:text-lg text-[15px] bg-logoRed rounded-lg text-white border-2 border-logoRed hover:border-white hover:bg-white hover:text-black hover:bg-transparent transition-colors duration-300">
                  LOGIN
               </button>
            </div>
         </div>
      </div>
   );
};

export default AdminLogin;
