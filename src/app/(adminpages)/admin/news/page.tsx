import React from "react";

const News = () => {
   return (
      <div className="w-full flex flex-col h-auto flex-1">
         <h5 className="text-2xl font-bold">NEWS LIST</h5>
         <div className="news-list w-full flex flex-col mt-8">
            <div className="top w-full flex justify-between bg-gray-400 h-[40px]">
               <div className="news-title w-auto flex items-center justify-start flex-[2] border-r">
                  <h5 className="ml-6">News Title</h5>
               </div>
               <div className="news-title w-full flex-[5] flex items-center justify-start border-r">
                  <h5 className="ml-6">News Text</h5>
               </div>
               <div className="news-date w-auto flex items-center flex-[1] justify-center border-r ">
                  <h5>News Date</h5>
               </div>
               <div className="news-date w-auto flex items-center flex-[1] justify-center "></div>
            </div>
            <div className="news-list-inside w-full flex flex-col mt-6  ">
               <div className="news w-full flex justify-between  h-[40px] even:bg-gray-300 odd:bg-gray-200">
                  <div className="news-title w-auto flex items-center justify-start flex-[2] border-r border-r-gray-400 ">
                     <h5 className="font-medium text-[15px] ml-6">
                        Title of the news
                     </h5>
                  </div>
                  <div className="news-title w-full flex-[5] flex items-center justify-start border-r border-r-gray-400">
                     <h5 className="ml-6 font-medium text-[15px]">
                        This is the text of the news. News text text text.
                     </h5>
                  </div>
                  <div className="news-date w-auto flex items-center flex-[1] justify-center border-r border-r-gray-400 ">
                     <h5 className="font-medium text-[15px]">09.05.2024</h5>
                  </div>
                  <div className="news-button w-auto flex items-center flex-[1] justify-center ">
                     <button className="px-6 py-[2px] bg-green-400 rounded-lg text-[14px]">
                        EDIT
                     </button>
                  </div>
               </div>
               <div className="news w-full flex justify-between  h-[40px] odd:bg-gray-200 even:bg-gray-300 ">
                  <div className="news-title w-auto flex items-center justify-start flex-[2] border-r border-r-gray-400 ">
                     <h5 className="font-medium text-[15px] ml-6">
                        Title of the news
                     </h5>
                  </div>
                  <div className="news-title w-full flex-[5] flex items-center justify-start border-r border-r-gray-400">
                     <h5 className="ml-6 font-medium text-[15px]">
                        This is the text of the news. News text text text.
                     </h5>
                  </div>
                  <div className="news-date w-auto flex items-center flex-[1] justify-center border-r border-r-gray-400 ">
                     <h5 className="font-medium text-[15px]">09.05.2024</h5>
                  </div>
                  <div className="news-button w-auto flex items-center flex-[1] justify-center ">
                     <button className="px-6 py-[2px] bg-green-400 rounded-lg text-[14px]">
                        EDIT
                     </button>
                  </div>
               </div>
               <div className="news w-full flex justify-between  h-[40px] odd:bg-gray-200 even:bg-gray-300 ">
                  <div className="news-title w-auto flex items-center justify-start flex-[2] border-r border-r-gray-400 ">
                     <h5 className="font-medium text-[15px] ml-6">
                        Title of the news
                     </h5>
                  </div>
                  <div className="news-title w-full flex-[5] flex items-center justify-start border-r border-r-gray-400">
                     <h5 className="ml-6 font-medium text-[15px]">
                        This is the text of the news. News text text text.
                     </h5>
                  </div>
                  <div className="news-date w-auto flex items-center flex-[1] justify-center border-r border-r-gray-400 ">
                     <h5 className="font-medium text-[15px]">09.05.2024</h5>
                  </div>
                  <div className="news-button w-auto flex items-center flex-[1] justify-center ">
                     <button className="px-6 py-[2px] bg-green-400 rounded-lg text-[14px]">
                        EDIT
                     </button>
                  </div>
               </div>
               <div className="news w-full flex justify-between  h-[40px] odd:bg-gray-200 even:bg-gray-300 ">
                  <div className="news-title w-auto flex items-center justify-start flex-[2] border-r border-r-gray-400 ">
                     <h5 className="font-medium text-[15px] ml-6">
                        Title of the news
                     </h5>
                  </div>
                  <div className="news-title w-full flex-[5] flex items-center justify-start border-r border-r-gray-400">
                     <h5 className="ml-6 font-medium text-[15px]">
                        This is the text of the news. News text text text.
                     </h5>
                  </div>
                  <div className="news-date w-auto flex items-center flex-[1] justify-center border-r border-r-gray-400 ">
                     <h5 className="font-medium text-[15px]">09.05.2024</h5>
                  </div>
                  <div className="news-button w-auto flex items-center flex-[1] justify-center ">
                     <button className="px-6 py-[2px] bg-green-400 rounded-lg text-[14px]">
                        EDIT
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default News;
