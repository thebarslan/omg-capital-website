"use client";

import React, { useState, useEffect } from "react";
import { useNews } from "../../../contexts/NewsContext";
import Container from "@/app/components/common/container";

const News = () => {
  const { news, loading, updateNews, deleteNews } = useNews();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedNews, setSelectedNews] = useState<any>(null);
  const [updatedTitle, setUpdatedTitle] = useState<string>("");
  const [updatedText, setUpdatedText] = useState<string>("");

  const [searchTerm, setSearchTerm] = useState<string>(""); // State to store the search term
  const [filteredNews, setFilteredNews] = useState(news); // State to store filtered news

  // Update filtered news when `news` or `searchTerm` changes
  useEffect(() => {
    const filtered = news.filter(
      (newsItem) =>
        newsItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        newsItem.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNews(filtered);
  }, [news, searchTerm]);

  const openEditModal = (newsItem: any) => {
    setSelectedNews(newsItem);
    setUpdatedTitle(newsItem.title);
    setUpdatedText(newsItem.text);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedNews(null);
  };

  const handleUpdateNews = async () => {
    if (!selectedNews) return;
    try {
      await updateNews(selectedNews._id, {
        title: updatedTitle,
        text: updatedText,
      });
      alert("News updated successfully!");
      closeModal();
    } catch (error) {
      console.error("Error updating news:", error);
      alert("Failed to update news. Please try again.");
    }
  };

  const handleDeleteNews = async () => {
    if (!selectedNews) return;
    const confirmation = confirm("Are you sure you want to delete this news?");
    if (!confirmation) return;

    try {
      await deleteNews(selectedNews._id);
      alert("News deleted successfully!");
      closeModal();
    } catch (error) {
      console.error("Error deleting news:", error);
      alert("Failed to delete news. Please try again.");
    }
  };

  return (
    <div className="w-full flex flex-col h-auto flex-1">
      <div className="flex justify-between items-center">
        <h5 className="text-2xl font-bold">NEWS LIST</h5>
        {/* Search Input */}
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search by title or text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-1 rounded-sm text-sm"
          />
          <button
            onClick={() => setSearchTerm("")} // Clear search
            className="px-3 py-1 bg-blue-500 text-white rounded-sm text-sm"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="news-list w-full flex flex-col mt-8">
        <div className="top w-full flex justify-between bg-gray-400 h-[40px]">
          <div className="news-title w-auto flex items-center justify-start flex-[2] border-r">
            <h5 className="lg:ml-6 ml-2">Title</h5>
          </div>
          <div className="news-title w-full flex-[5] flex items-center justify-start border-r">
            <h5 className="lg:ml-6 ml-2">Text</h5>
          </div>
          <div className="news-date w-auto flex items-center flex-[1] justify-center border-r ">
            <h5>Date</h5>
          </div>
          <div className="news-date w-auto flex items-center flex-[1] justify-center "></div>
        </div>

        <div className="news-list-inside w-full flex flex-col mt-6">
          {loading ? (
            <p className="text-center w-full">Loading...</p>
          ) : filteredNews.length === 0 ? ( // Display filtered news instead of the full list
            <div className="no-news-message w-full flex justify-center items-center h-60">
              <p className="text-lg text-gray-500">No news available.</p>
            </div>
          ) : (
            filteredNews.map((newsItem) => (
              <div
                key={newsItem._id}
                className="news w-full flex justify-between h-[40px] even:bg-gray-300 odd:bg-gray-200"
              >
                <div className="news-title w-auto flex items-center justify-start flex-[2] border-r border-r-gray-400">
                  <h5 className="font-medium lg:text-[15px] text-[12px] lg:ml-6 ml-2 line-clamp-1">
                    {newsItem.title}
                  </h5>
                </div>
                <div className="news-title w-full flex-[5] flex items-center justify-start border-r border-r-gray-400">
                  <h5 className="font-medium lg:text-[15px] text-[12px] lg:ml-6 ml-2 line-clamp-1">
                    {newsItem.text}
                  </h5>
                </div>
                <div className="news-date w-auto flex items-center flex-[1] justify-center border-r border-r-gray-400">
                  <h5 className="font-medium lg:text-[15px] text-[12px]">
                    {newsItem.date
                      ? new Date(newsItem.date).toLocaleDateString()
                      : "No Date"}
                  </h5>
                </div>
                <div className="news-button w-auto flex items-center flex-[1] justify-center">
                  <button
                    className="lg:px-6 px-1 py-[2px] bg-green-400 rounded-lg text-[14px] lg:font-semibold font-medium"
                    onClick={() => openEditModal(newsItem)}
                  >
                    EDIT
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-xl font-bold mb-4">Edit News</h2>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Title</label>
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                className="border-2 border-gray-300 rounded-md p-2"
              />
              <label className="text-sm font-medium mt-4">Text</label>
              <textarea
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
                className="border-2 border-gray-300 rounded-md p-2"
                rows={4}
              />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleUpdateNews}
              >
                Save
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={handleDeleteNews}
              >
                Delete
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
