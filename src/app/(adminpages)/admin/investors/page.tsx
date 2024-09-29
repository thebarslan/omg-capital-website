"use client";

import React, { useState, useEffect } from "react";
import { useInvestor } from "../../../contexts/InvestorContext";

const Investors = () => {
  const { investors, fetchAllInvestors, loading } = useInvestor();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredInvestors, setFilteredInvestors] = useState(investors);

  useEffect(() => {
    fetchAllInvestors();
  }, [fetchAllInvestors]);

  useEffect(() => {
    setFilteredInvestors(
      investors.filter(
        (investor) =>
          investor._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          investor.surname.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [investors, searchTerm]);

  const handleDetailClick = (investor: any) => {
    alert(
      `Investor Details:\nName: ${investor.name}\nSurname: ${investor.surname}\nMonthly Income: ${investor.monthlyIncome}`
    );
  };

  return (
    <div className="w-full flex flex-col h-auto flex-1">
      <div className="flex justify-between items-center">
        <h5 className="text-2xl font-bold">INVESTORS LIST</h5>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search by ID, Name or Surname"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-1 rounded-sm text-sm"
          />
          <button
            onClick={() => setFilteredInvestors(investors)} // Resetting the search
            className="px-3 py-1 bg-blue-500 text-white rounded-sm text-sm"
          >
            Search
          </button>
        </div>
      </div>
      <div className="news-list w-full flex flex-col mt-8">
        <div className="top w-full flex justify-between bg-gray-400 h-[40px]">
          <div className="news-title w-auto flex items-center justify-start flex-[1] border-r">
            <h5 className="lg:ml-6 ml-2 text-[12px] lg:text-[15px]">Investor ID</h5>
          </div>
          <div className="news-title w-auto flex items-center justify-start flex-[2] border-r">
            <h5 className="lg:ml-6 ml-2 text-[12px] lg:text-[15px]">Name</h5>
          </div>
          <div className="news-title w-auto flex items-center justify-start flex-[2] border-r">
            <h5 className="lg:ml-6 ml-2 text-[12px] lg:text-[15px]">Surname</h5>
          </div>
          <div className="news-date w-auto flex items-center flex-[1] justify-center border-r">
            <h5 className="text-[12px] lg:text-[15px]">Monthly Income</h5>
          </div>
          <div className="news-date w-auto flex items-center flex-[1] justify-center"></div>
        </div>

        {loading ? (
          <div className="w-full flex justify-center items-center h-60">
            <p className="text-lg text-gray-500">Loading...</p>
          </div>
        ) : filteredInvestors.length === 0 ? (
          <div className="no-news-message w-full flex justify-center items-center h-60">
            <p className="text-lg text-gray-500">No investors available.</p>
          </div>
        ) : (
          <div className="news-list-inside w-full flex flex-col mt-6">
            {filteredInvestors.map((investor) => (
              <div
                key={investor._id}
                className="news w-full flex justify-between h-[40px] even:bg-gray-300 odd:bg-gray-200"
              >
                <div className="news-title w-auto flex items-center justify-start flex-[1] border-r border-r-gray-400 ">
                  <h5 className="font-medium lg:text-[15px] lg:ml-6 text-[12px] ml-2">
                    {investor._id}
                  </h5>
                </div>
                <div className="news-title w-auto flex items-center justify-start flex-[2] border-r border-r-gray-400">
                  <h5 className="font-medium lg:text-[15px] lg:ml-6 text-[12px] ml-2">
                    {investor.name}
                  </h5>
                </div>
                <div className="news-title w-auto flex items-center justify-start flex-[2] border-r border-r-gray-400">
                  <h5 className="font-medium lg:text-[15px] lg:ml-6 text-[12px] ml-2">
                    {investor.surname}
                  </h5>
                </div>
                <div className="news-date w-auto flex items-center flex-[1] justify-center border-r border-r-gray-400 ">
                  <h5 className="font-medium lg:text-[15px] text-[12px] ">
                    ${investor.monthlyIncome}
                  </h5>
                </div>
                <div className="news-button w-auto flex items-center flex-[1] justify-center ">
                  <button
                    className="lg:px-6 px-2 py-[2px] bg-blue-400 rounded-lg text-[14px] lg:font-semibold font-medium"
                    onClick={() => handleDetailClick(investor)}
                  >
                    DETAIL
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Investors;
