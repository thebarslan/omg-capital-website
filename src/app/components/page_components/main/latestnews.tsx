"use client";
import React, { useEffect, useState } from "react";
import Container from "../../common/container";

import Media1 from "../../../assets/images/media/media1.webp";
import Media2 from "../../../assets/images/media/media2.webp";
import Media3 from "../../../assets/images/media/media3.webp";
import Media4 from "../../../assets/images/media/media4.webp";
import Media5 from "../../../assets/images/media/media5.webp";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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

      // Run once on page render
      checkScreenSize();

      // Run again after 1 second
      const timeout = setTimeout(() => {
         checkScreenSize();
      }, 1000);

      // Add event listener to track resize
      window.addEventListener("resize", checkScreenSize);

      return () => {
         clearTimeout(timeout); // Clear timeout on component unmount
         window.removeEventListener("resize", checkScreenSize); // Clean up resize listener
      };
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
                           className="news h-[300px] w-full  flex flex-col relative"
                           href="https://www.youtube.com/watch?v=G4uhBy8v6nE"
                           target="_blank"
                        >
                           <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
                           <div className="w-full h-[300px]">
                              <Image
                                 src={Media1}
                                 alt="news-img"
                                 className="object-cover w-full h-[300px] "
                              />
                           </div>
                           <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
                           <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
                              <div className="w-full flex justify-between items-center">
                                 <h5 className="text-[19px]">BloombergHT</h5>
                                 <h5 className="text-[12px]">22.02.2024</h5>
                              </div>
                              <p className="text-[14px] font-medium">
                                 BloombergHT - Kontrolmatik & Harbin Electric
                                 Arasında Proje Finansmanı Anlaşması
                              </p>
                           </div>
                        </a>
                     </SwiperSlide>
                     <SwiperSlide>
                        <a
                           className="news h-[300px] w-full  flex flex-col relative"
                           href="https://www.youtube.com/watch?v=UPxUN4sT7hw"
                           target="_blank"
                        >
                           <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
                           <div className="w-full h-[300px]">
                              <Image
                                 src={Media2}
                                 alt="news-img"
                                 className="object-cover w-full h-[300px] "
                              />
                           </div>
                           <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
                           <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
                              <div className="w-full flex justify-between items-center">
                                 <h5 className="text-[19px]">BloombergHT</h5>
                                 <h5 className="text-[12px]">21.02.2024</h5>
                              </div>
                              <p className="text-[14px] font-medium">
                                 BloombergHT - Sabah Raporu
                              </p>
                           </div>
                        </a>
                     </SwiperSlide>
                     <SwiperSlide>
                        <a
                           className="news h-[300px] w-full  flex flex-col relative"
                           href="https://www.youtube.com/watch?v=I4-1Jxi_Dcg&t=1187s"
                           target="_blank"
                        >
                           <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
                           <div className="w-full h-[300px]">
                              <Image
                                 src={Media3}
                                 alt="news-img"
                                 className="object-cover w-full h-[300px] "
                              />
                           </div>
                           <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
                           <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
                              <div className="w-full flex justify-between items-center">
                                 <h5 className="text-[19px]">BloombergHT</h5>
                                 <h5 className="text-[12px]">28.02.2023</h5>
                              </div>
                              <p className="text-[14px] font-medium">
                                 BloombergHT - Finans Merkezi
                              </p>
                           </div>
                        </a>
                     </SwiperSlide>
                     <SwiperSlide>
                        <a
                           className="news h-[300px] w-full  flex flex-col relative"
                           href="https://www.youtube.com/watch?v=QnjVFk_-cBs"
                           target="_blank"
                        >
                           <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
                           <div className="w-full h-[300px]">
                              <Image
                                 src={Media4}
                                 alt="news-img"
                                 className="object-cover w-full h-[300px] "
                              />
                           </div>
                           <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
                           <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
                              <div className="w-full flex justify-between items-center">
                                 <h5 className="text-[19px]">Habertürk</h5>
                                 <h5 className="text-[12px]">20.02.2022</h5>
                              </div>
                              <p className="text-[14px] font-medium">
                                 HaberTürk - Borsada Yatırım
                              </p>
                           </div>
                        </a>
                     </SwiperSlide>
                     <SwiperSlide>
                        <a
                           className="news h-[300px] w-full  flex flex-col relative"
                           href="https://www.youtube.com/watch?v=oGnl5ppn9jA"
                           target="_blank"
                        >
                           <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
                           <div className="w-full h-[300px]">
                              <Image
                                 src={Media5}
                                 alt="news-img"
                                 className="object-cover w-full h-[300px] "
                              />
                           </div>
                           <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
                           <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
                              <div className="w-full flex justify-between items-center">
                                 <h5 className="text-[19px]">BloombergHT</h5>
                                 <h5 className="text-[12px]">20.04.2021</h5>
                              </div>
                              <p className="text-[14px] font-medium">
                                 BloombergHT - Yatırım Kulübü
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
