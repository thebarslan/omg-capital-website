"use client";
import React, { useEffect, useState } from "react";
import Container from "../../common/container";
import { useNews } from "../../../contexts/NewsContext";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";

const LatestNews = () => {
   const [slidePerview, setSlidePerview] = useState(3);
   const { news, loading } = useNews();

   useEffect(() => {
      const checkScreenSize = () => {
         if (window.innerWidth < 800) {
            setSlidePerview(1);
         } else if (window.innerWidth < 1200) {
            setSlidePerview(2);
         } else {
            setSlidePerview(3);
         }
      };

      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);

      return () => {
         window.removeEventListener("resize", checkScreenSize);
      };
   }, []);

   return (
      <div className="latest-news w-full h-auto flex mb-24 lg:mt-[80px] mt-10">
         <Container>
            <div className="bigger-container w-full flex flex-col gap-6">
               <h5 className="text-3xl font-bold">Latest News</h5>
               <div className="latest-news-container w-full flex">
                  {loading ? (
                     <p className="text-center w-full">Loading...</p>
                  ) : news.length === 0 ? (
                     <div className="no-news-message w-full flex justify-center items-center h-60">
                        <p className="text-lg text-gray-500">
                           There are currently no news articles available. Please check back later for the latest updates!
                        </p>
                     </div>
                  ) : (
                     <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={slidePerview}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                     >
                        {news.map((newsItem) => (
                           <SwiperSlide key={newsItem._id}>
                              <a
                                 className="news h-[300px] w-full flex flex-col relative"
                                 href={newsItem.link}
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
                                 <div className="relative w-full h-[300px]">
                                    <Image
                                       src={newsItem.imageUrl || "/default-image.png"}
                                       alt="news-img"
                                       className="object-cover w-full h-full"
                                       layout="fill"
                                       objectFit="cover"
                                    />
                                 </div>
                                 <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
                                 <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
                                    <div className="w-full flex justify-between items-center">
                                       <h5 className="text-[19px]">{newsItem.source || "Unknown Source"}</h5>
                                       <h5 className="text-[12px]">{newsItem.date || "No Date"}</h5>
                                    </div>
                                    <p className="text-[14px] font-medium">
                                       {newsItem.title || "No Title"}
                                    </p>
                                 </div>
                              </a>
                           </SwiperSlide>
                        ))}
                     </Swiper>
                  )}
               </div>
            </div>
         </Container>
      </div>
   );
};

export default LatestNews;
