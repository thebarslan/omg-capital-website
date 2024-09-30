"use client";
import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import Image from "next/image";
import { useUser } from "../contexts/AuthContext"; // useUser hook'unu içe aktarın

const Login = () => {
   const { login, loading, error } = useUser(); // useUser'dan login fonksiyonunu alın
   const [formData, setFormData] = useState({ email: "", password: "" });
   const [isChecked, setIsChecked] = useState(false);

   // Form verilerini güncelleme
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   // Giriş yap butonuna tıklama işlemi
   const handleLogin = async () => {
      if (!isChecked) {
         alert("Please accept the user agreement.");
         return;
      }

      try {
         await login(formData.email, formData.password); 
      } catch (error) {
         console.error("Login failed", error);
      }
   };

   return (
      <div className="w-screen h-screen login-gradient overflow-x-hidden overflow-y-hidden text-white flex items-center overflow-hidden relative">
         <div className="absolute bg-[#00000055] z-[200] w-full h-full left-0 top-0"></div>
         <div className="w-full max-w-[1000px] h-[500px] bg-[#fffffff0] flex flex-col relative z-[200] lg:ml-40 rounded-2xl shadow">
            <div className="top w-full flex-1 h-full bg-[#ffffffc0] px-10 flex flex-col pt-8 rounded-t-2xl">
               <div className="image-container w-[150px]">
                  <a href="/">
                     <Image
                        src={Logo}
                        alt="omg-logo"
                        className="w-[150px] h-auto"
                     />
                  </a>
               </div>
               <div className="title-container w-full items-center mt-8">
                  <h5 className="text-[17px] text-black">
                     Please log in to your account.
                  </h5>
               </div>
               <div className="input-container flex items-start gap-0 mt-6 text-black flex-col">
                  <h5 className="text-[13px] font-medium pl-[2px]">Email</h5>
                  <input
                     type="text"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
                  />
               </div>
               <div className="input-container flex items-start gap-0 mt-3 text-black flex-col">
                  <h5 className="text-[13px] font-medium pl-[2px]">Password</h5>
                  <input
                     type="password"
                     name="password"
                     value={formData.password}
                     onChange={handleChange}
                     className="w-[200px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
                  />
               </div>
               <div className="user-agreement flex items-center text-black gap-0 mt-5 pl-1">
                  <label className="check-container relative flex items-center -mt-[3px]">
                     <input 
                        type="checkbox" 
                        checked={isChecked} 
                        onChange={() => setIsChecked(!isChecked)} 
                     />
                     <span className="checkmark"></span>
                  </label>
                  <h5 className="text-[13px] font-medium pl-[2px] flex items-center gap-1 -ml-3">
                     Accept{" "}
                     <span>
                        <div className="underline cursor-pointer">
                           user agreement
                        </div>
                     </span>
                  </h5>
               </div>
               <div className="button-container mt-5">
                  <button 
                     onClick={handleLogin} 
                     className="px-6 py-[5px] rounded-lg text-[13px] font-medium login-btn"
                     disabled={loading} // Giriş yaparken butonun devre dışı kalması için
                  >
                     {loading ? "LOADING..." : "LOGIN"}
                  </button>
               </div>
               {error && <p className="text-red-500 mt-2">{error}</p>} {/* Hata mesajı gösterme */}
               <div className="flex items-center gap-5 mt-4">
                  <a
                     href="/forgotusername"
                     className="text-[13px] text-black underline"
                  >
                     Forgot your username
                  </a>
                  <a
                     href="/forgotpassword"
                     className="text-[13px] text-black underline"
                  >
                     Forgot your password
                  </a>
               </div>
            </div>
            <div className="bottom flex lg:flex-row flex-col items-center justify-between w-full h-20 px-10 lg:py-0 py-[10px] text-black">
               <div className="left flex items-center text-[12px] font-medium">
                  <h5>© 2011 - 2024 OMG CAPITAL ADVISORS GROUP</h5>
               </div>

               <div className="right flex gap-6">
                  <a
                     href="/"
                     className="hover:bg-black hover:text-white transition-colors duration-300  px-4 py-[6px] bg-logoRed text-white rounded-lg text-[13px]"
                  >
                     HOME
                  </a>
                  <a
                     href="/register"
                     className="hover:bg-black hover:text-white transition-colors duration-300  px-4 py-[6px] bg-logoRed text-white rounded-lg text-[13px]"
                  >
                     REGISTER
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
