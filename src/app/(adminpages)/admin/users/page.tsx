import React from "react";

const Users = () => {
   return (
      <div className="w-full  flex flex-col h-auto flex-1">
         <h5 className="text-2xl font-bold">USERS LIST</h5>
         <div className="news-list w-full flex flex-col mt-8">
            <div className="top w-full flex justify-between bg-gray-400 h-[40px]">
               <div className="news-title w-auto flex items-center justify-start flex-[1] border-r">
                  <h5 className="lg:ml-6 ml-2 text-[12px] lg:text-[15px]">
                     User ID
                  </h5>
               </div>
               <div className="news-title w-auto flex items-center justify-start flex-[3] border-r">
                  <h5 className="lg:ml-6 ml-2 text-[12px] lg:text-[15px]">
                     Username
                  </h5>
               </div>

               <div className="news-date w-auto flex items-center flex-[1] justify-center border-r ">
                  <h5 className="text-[12px] lg:text-[15px]">Reg. Date</h5>
               </div>
               <div className="news-date w-auto flex items-center flex-[1] justify-center "></div>
            </div>
            <div className="news-list-inside w-full flex flex-col mt-6  ">
               <div className="news w-full flex justify-between  h-[40px] even:bg-gray-300 odd:bg-gray-200">
                  <div className="news-title w-auto flex items-center justify-start flex-[1] border-r border-r-gray-400 ">
                     <h5 className="font-medium lg:text-[15px] lg:ml-6 text-[12px] ml-2">
                        1234
                     </h5>
                  </div>

                  <div className="news-title w-full flex-[3] flex items-center justify-start border-r border-r-gray-400">
                     <h5 className="font-medium lg:text-[15px] lg:ml-6 text-[12px] ml-2">
                        username123123
                     </h5>
                  </div>
                  <div className="news-date w-auto flex items-center flex-[1] justify-center border-r border-r-gray-400 ">
                     <h5 className="font-medium lg:text-[15px]  text-[12px] ">
                        09.05.2024
                     </h5>
                  </div>
                  <div className="news-button w-auto flex items-center flex-[1] justify-center ">
                     <button className="lg:px-6 px-2 py-[2px] bg-green-400 rounded-lg text-[14px]">
                        EDIT
                     </button>
                  </div>
               </div>
               <div className="news w-full flex justify-between  h-[40px] even:bg-gray-300 odd:bg-gray-200">
                  <div className="news-title w-auto flex items-center justify-start flex-[1] border-r border-r-gray-400 ">
                     <h5 className="font-medium lg:text-[15px] lg:ml-6 text-[12px] ml-2">
                        1234
                     </h5>
                  </div>

                  <div className="news-title w-full flex-[3] flex items-center justify-start border-r border-r-gray-400">
                     <h5 className="font-medium lg:text-[15px] lg:ml-6 text-[12px] ml-2">
                        username123123
                     </h5>
                  </div>
                  <div className="news-date w-auto flex items-center flex-[1] justify-center border-r border-r-gray-400 ">
                     <h5 className="font-medium lg:text-[15px]  text-[12px] ">
                        09.05.2024
                     </h5>
                  </div>
                  <div className="news-button w-auto flex items-center flex-[1] justify-center ">
                     <button className="lg:px-6 px-2 py-[2px] bg-green-400 rounded-lg text-[14px]">
                        EDIT
                     </button>
                  </div>
               </div>
               <div className="news w-full flex justify-between  h-[40px] even:bg-gray-300 odd:bg-gray-200">
                  <div className="news-title w-auto flex items-center justify-start flex-[1] border-r border-r-gray-400 ">
                     <h5 className="font-medium lg:text-[15px] lg:ml-6 text-[12px] ml-2">
                        1234
                     </h5>
                  </div>

                  <div className="news-title w-full flex-[3] flex items-center justify-start border-r border-r-gray-400">
                     <h5 className="font-medium lg:text-[15px] lg:ml-6 text-[12px] ml-2">
                        username123123
                     </h5>
                  </div>
                  <div className="news-date w-auto flex items-center flex-[1] justify-center border-r border-r-gray-400 ">
                     <h5 className="font-medium lg:text-[15px]  text-[12px] ">
                        09.05.2024
                     </h5>
                  </div>
                  <div className="news-button w-auto flex items-center flex-[1] justify-center ">
                     <button className="lg:px-6 px-2 py-[2px] bg-green-400 rounded-lg text-[14px]">
                        EDIT
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Users;
