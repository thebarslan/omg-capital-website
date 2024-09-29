"use client";

import React, { useState } from "react";
import { useNews } from "../../../contexts/NewsContext"; // News context'i import et

const AddNews = () => {
  const curr = new Date();
  curr.setDate(curr.getDate());
  const todayDate = curr.toISOString().substring(0, 10);

  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [date, setDate] = useState<string>(todayDate);

  const { createNews } = useNews(); // Context'ten createNews fonksiyonunu al

  const handleAddNews = async () => {
    if (!title || !text || !date) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      await createNews({
        title,
        text,
        imageUrl,
        link,
        date,
      });
      alert("News added successfully!");
      
      // Formu sıfırla
      setTitle("");
      setText("");
      setImageUrl("");
      setLink("");
      setDate(todayDate);
    } catch (error) {
      console.error("Error adding news:", error);
      alert("Failed to add news. Please try again.");
    }
  };

  return (
    <div className="w-full flex flex-col h-auto flex-1">
      <h5 className="text-2xl font-bold">ADD NEWS</h5>
      <div className="add-news w-full flex flex-col gap-4">
        <div className="input-container flex items-start gap-[2px] mt-6 text-black flex-col">
          <h5 className="text-[13px] font-medium pl-[2px]">News Title</h5>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-[300px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
          />
        </div>
        <div className="input-container flex items-start gap-[2px] mt-6 text-black flex-col">
          <h5 className="text-[13px] font-medium pl-[2px]">News Text</h5>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-[300px] h-[50px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
          />
        </div>
        <div className="input-container flex items-start gap-[2px] mt-6 text-black flex-col">
          <h5 className="text-[13px] font-medium pl-[2px]">
            News Image - Add an image URL
          </h5>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-[300px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
          />
        </div>
        <div className="input-container flex items-start gap-[2px] mt-6 text-black flex-col">
          <h5 className="text-[13px] font-medium pl-[2px]">
            News Link - Add the link of the news
          </h5>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-[300px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
          />
        </div>
        <div className="input-container flex items-start gap-[2px] mt-6 text-black flex-col">
          <h5 className="text-[13px] font-medium pl-[2px]">
            News Date - Default value today's date
          </h5>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-[300px] h-[28px] rounded-sm outline-none border-2 border-[#cecece] text-black pl-[4px] text-[13px] font-medium"
          />
        </div>
      </div>
      <div className="add-news-button mt-10">
        <button
          onClick={handleAddNews}
          className="px-6 py-2 text-[14px] bg-green-500 text-white rounded-lg"
        >
          Add News
        </button>
      </div>
    </div>
  );
};

export default AddNews;
