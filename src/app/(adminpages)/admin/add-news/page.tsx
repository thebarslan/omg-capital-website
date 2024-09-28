import React from "react";

const AddNews = () => {
   const curr = new Date();
   curr.setDate(curr.getDate());
   const date = curr.toISOString().substring(0, 10);
   <input
      id="dateRequired"
      type="date"
      name="dateRequired"
      defaultValue={date}
   />;
   return (
      <div className="w-full flex flex-col h-auto flex-1">
         <h5 className="text-2xl font-bold">ADD NEWS</h5>
         <div className="add-news w-full flex flex-col gap-4">
            <div className="input-container flex items-start gap-[2px] mt-6 text-black flex-col">
               <h5 className="text-[13px] font-medium pl-[2px]">News Title</h5>
               <input
                  type="text"
                  className="w-[300px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
               />
            </div>
            <div className="input-container flex items-start gap-[2px] mt-6 text-black flex-col">
               <h5 className="text-[13px] font-medium pl-[2px]">News Text</h5>
               <textarea className="w-[300px] h-[50px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium" />
            </div>
            <div className="input-container flex items-start gap-[2px] mt-6 text-black flex-col">
               <h5 className="text-[13px] font-medium pl-[2px]">
                  News Image - Add an image url
               </h5>
               <input
                  type="text"
                  className="w-[300px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
               />
            </div>
            <div className="input-container flex items-start gap-[2px] mt-6 text-black flex-col">
               <h5 className="text-[13px] font-medium pl-[2px]">
                  News Link - Add the link of the news
               </h5>
               <input
                  type="text"
                  className="w-[300px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
               />
            </div>
            <div className="input-container flex items-start gap-[2px] mt-6 text-black flex-col">
               <h5 className="text-[13px] font-medium pl-[2px]">
                  News Date - Default value todays date.
               </h5>
               <input
                  type="date"
                  id="dateRequired"
                  name="dateRequired"
                  defaultValue={date}
                  className="w-[300px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
               />
            </div>
         </div>
         <div className="add-news-button mt-10">
            <button className="px-6 py-2 text-[14px] bg-green-500 text-white rounded-lg">
               Add News
            </button>
         </div>
      </div>
   );
};

export default AddNews;
