"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import { FaNewspaper } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
const NavbarLeft = () => {
   const [isClosed, setIsClosed] = useState(false);
   return (
      <>
         <div
            className={`w-[260px] h-screen lg:relative absolute flex flex-col flex-shrink-0 ${
               isClosed ? "w-[50px]" : "w-[260px]"
            }`}
         >
            <div
               className={`h-screen flex flex-col bg-white flex-1 shadow flex-shrink-0 ${
                  isClosed ? "w-[50px]" : "w-[260px]"
               }`}
            >
               <div
                  className={`back w-full flex items-center  mt-4 ${
                     isClosed ? "justify-center" : "px-4 justify-end"
                  }`}
               >
                  <button
                     className="p-1 bg-white shadow rounded-lg"
                     onClick={() => setIsClosed(!isClosed)}
                  >
                     {isClosed ? (
                        <IoMdArrowForward className="text-[20px]" />
                     ) : (
                        <IoMdArrowBack className="text-[20px]" />
                     )}
                  </button>
               </div>
               <div
                  className={`logo-container w-full items-center justify-start px-2 py-6 ${
                     isClosed ? "hidden" : "flex"
                  }`}
               >
                  <Image
                     src={Logo}
                     alt="omg-capital-logo"
                     className="mx-auto w-full h-auto max-w-[180px]"
                  />
               </div>
               <div className="links-container mt-2 ">
                  <div className="link w-full h-12 shadow-sm flex items-center justify-start  text-[15px] gap-2">
                     <a
                        href="/admin/news"
                        className={`flex gap-2 items-center justify-start w-full h-full  hover:bg-[#e7e7e7] transition-colors duration-300 ${
                           isClosed ? "pl-4" : "pl-8"
                        }`}
                     >
                        <FaNewspaper className="text-[20px]" />
                        {!isClosed && <h5>News List</h5>}
                     </a>
                  </div>
                  <div className="link w-full h-12 shadow-sm flex items-center justify-start  text-[15px] gap-2">
                     <a
                        href="/admin/add-news"
                        className={`flex gap-2 items-center justify-start w-full h-full  hover:bg-[#e7e7e7] transition-colors duration-300 ${
                           isClosed ? "pl-4" : "pl-8"
                        }`}
                     >
                        <IoMdAddCircle className="text-[20px]" />
                        {!isClosed && <h5>Add News</h5>}
                     </a>
                  </div>
                  <div className="link w-full h-12 shadow-sm flex items-center justify-start  text-[15px] gap-2">
                     <a
                        href="/admin/users"
                        className={`flex gap-2 items-center justify-start w-full h-full  hover:bg-[#e7e7e7] transition-colors duration-300 ${
                           isClosed ? "pl-4" : "pl-8"
                        }`}
                     >
                        <FaUsers className="text-[20px]" />
                        {!isClosed && <h5>Users</h5>}
                     </a>
                  </div>
                  <div className="link w-full h-12 shadow-sm flex items-center justify-start  text-[15px] gap-2">
                     <a
                        href="/admin/investors"
                        className={`flex gap-2 items-center justify-start w-full h-full  hover:bg-[#e7e7e7] transition-colors duration-300 ${
                           isClosed ? "pl-4" : "pl-8"
                        }`}
                     >
                        <FaUsers className="text-[20px]" />
                        {!isClosed && <h5>Investors</h5>}
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default NavbarLeft;
