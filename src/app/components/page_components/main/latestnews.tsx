"use client";
import React, { useEffect, useState } from "react";
import Container from "../../common/container";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import News1 from "../../../assets/images/news/news1.jpg";
import News2 from "../../../assets/images/news/news2.jpg";
import News3 from "../../../assets/images/news/news3.jpg";
import Image from "next/image";

const LatestNews = () => {
   const [slidePerview, setSlidePerview] = useState(3);
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
      window.addEventListener("resize", checkScreenSize);
      return () => window.removeEventListener("resize", checkScreenSize);
   }, []);
   return (
      <div className="latest-news w-full h-auto flex mb-24 lg:mt-[80px] mt-10">
         <Container>
            <div className="bigger-container w-full flex flex-col gap-6">
               <h5 className="text-3xl font-bold">Latest News</h5>
               <div className="latest-news-container w-full flex">
                  <Swiper
                     // install Swiper modules
                     modules={[Navigation, Pagination, Scrollbar, A11y]}
                     spaceBetween={20}
                     slidesPerView={slidePerview}
                     navigation
                     pagination={{ clickable: true }}
                     scrollbar={{ draggable: true }}
                     onSwiper={(swiper) => console.log(swiper)}
                     onSlideChange={() => console.log("slide change")}
                  >
                     <SwiperSlide>
                        <a
                           className="news h-[380px] w-full  flex flex-col relative"
                           href="https://medium.com"
                           target="_blank"
                        >
                           <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
                           <div className="w-full h-[380px]">
                              <Image
                                 src={News1}
                                 alt="news-img"
                                 className="object-cover w-full h-[380px] "
                              />
                           </div>
                           <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
                           <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
                              <div className="w-full flex justify-between items-center">
                                 <h5 className="text-[19px]">News Title</h5>
                                 <h5 className="text-[12px]">05.09.2024</h5>
                              </div>
                              <p className="text-[14px] font-medium">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit, sed do eiusmod tempor...
                              </p>
                           </div>
                        </a>
                     </SwiperSlide>
                     <SwiperSlide>
                        <a
                           className="news h-[380px] w-full  flex flex-col relative"
                           href="https://medium.com"
                           target="_blank"
                        >
                           <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
                           <div className="w-full h-[380px]">
                              <Image
                                 src={News2}
                                 alt="news-img"
                                 className="object-cover w-full h-[380px] "
                              />
                           </div>
                           <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
                           <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
                              <div className="w-full flex justify-between items-center">
                                 <h5 className="text-[19px]">News Title</h5>
                                 <h5 className="text-[12px]">05.09.2024</h5>
                              </div>
                              <p className="text-[14px] font-medium">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit, sed do eiusmod tempor...
                              </p>
                           </div>
                        </a>
                     </SwiperSlide>
                     <SwiperSlide>
                        <a
                           className="news h-[380px] w-full  flex flex-col relative"
                           href="https://medium.com"
                           target="_blank"
                        >
                           <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
                           <div className="w-full h-[380px]">
                              <Image
                                 src={News3}
                                 alt="news-img"
                                 className="object-cover w-full h-[380px] "
                              />
                           </div>
                           <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
                           <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
                              <div className="w-full flex justify-between items-center">
                                 <h5 className="text-[19px]">News Title</h5>
                                 <h5 className="text-[12px]">05.09.2024</h5>
                              </div>
                              <p className="text-[14px] font-medium">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit, sed do eiusmod tempor...
                              </p>
                           </div>
                        </a>
                     </SwiperSlide>
                     <SwiperSlide>
                        <a
                           className="news h-[380px] w-full  flex flex-col relative"
                           href="https://medium.com"
                           target="_blank"
                        >
                           <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
                           <div className="w-full h-[380px]">
                              <Image
                                 src={News1}
                                 alt="news-img"
                                 className="object-cover w-full h-[380px] "
                              />
                           </div>
                           <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
                           <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
                              <div className="w-full flex justify-between items-center">
                                 <h5 className="text-[19px]">News Title</h5>
                                 <h5 className="text-[12px]">05.09.2024</h5>
                              </div>
                              <p className="text-[14px] font-medium">
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit, sed do eiusmod tempor...
                              </p>
                           </div>
                        </a>
                     </SwiperSlide>
                  </Swiper>
               </div>
            </div>
         </Container>
      </div>
   );
};

export default LatestNews;
