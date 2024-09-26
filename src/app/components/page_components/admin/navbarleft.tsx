import Image from "next/image";
import React from "react";
import Logo from "../../../assets/images/logo.png";
import { FaNewspaper } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { FaUsers } from "react-icons/fa";

const NavbarLeft = () => {
   return (
      <div className="w-[260px] h-screen bg-white shadow flex flex-col flex-shrink-0 ">
         <div className="logo-container w-full flex items-center justify-start px-2 py-6">
            <Image
               src={Logo}
               alt="omg-capital-logo"
               className="mx-auto w-full h-auto max-w-[180px]"
            />
         </div>
         <div className="links-container ">
            <div className="link w-full h-12 shadow-sm flex items-center justify-start  text-[15px] gap-2">
               <a
                  href="/admin/news"
                  className="flex gap-2 items-center justify-start w-full h-full pl-8 hover:bg-[#e7e7e7] transition-colors duration-300"
               >
                  <FaNewspaper className="text-[20px]" />
                  <h5>News List</h5>
               </a>
            </div>
            <div className="link w-full h-12 shadow-sm flex items-center justify-start  text-[15px] gap-2">
               <a
                  href="/admin/add-news"
                  className="flex gap-2 items-center justify-start w-full h-full pl-8 hover:bg-[#e7e7e7] transition-colors duration-300"
               >
                  <IoMdAddCircle className="text-[20px]" />
                  <h5>Add News</h5>
               </a>
            </div>
            <div className="link w-full h-12 shadow-sm flex items-center justify-start  text-[15px] gap-2">
               <a
                  href="/admin/users"
                  className="flex gap-2 items-center justify-start w-full h-full pl-8 hover:bg-[#e7e7e7] transition-colors duration-300"
               >
                  <FaUsers className="text-[20px]" />
                  <h5>Users</h5>
               </a>
            </div>

            <div className="link w-full h-12 shadow-sm flex items-center justify-start pl-8">
               <h5>Add Stock</h5>
            </div>
            <div className="link w-full h-12 shadow-sm flex items-center justify-start pl-8">
               <h5>a</h5>
            </div>
         </div>
      </div>
   );
};

export default NavbarLeft;
