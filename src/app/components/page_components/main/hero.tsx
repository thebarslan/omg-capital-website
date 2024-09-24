"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SliderImage from "../../../assets/images/slider-images/slider-img.jpg";
import SliderImage2 from "../../../assets/images/slider-images/slider-img-2.jpg";
import Image from "next/image";
import Container from "../../common/container";
const Hero = () => {
   return (
      <div className="slider w-full flex max-h-[650px] h-full">
         <div className="slider-item w-screen max-h-[650px] h-full relative">
            <div className="absolute left-0 top-0 bg-[#000000be] w-full h-full z-[20] "></div>

            <div className="hero-bigger-container h-full w-full">
               <Container>
                  <div className="hero-container w-full flex relative z-[200] lg:h-[650px] md:h-[450px] h-[280px] text-white items-center">
                     <div className="left flex flex-col">
                        <div className="title-container lg:w-3/4 w-3/4 lg:mt-0 mt-5">
                           <h5 className="lg:text-5xl text-xl font-bold">
                              Guiding Your Investments Towards Success
                           </h5>
                        </div>
                        <div className="button-container lg:mt-12 mt-8">
                           <a
                              href="/team"
                              className="lg:px-10 lg:py-[10px] px-6 py-[6px] lg:text-lg text-[15px] bg-logoRed rounded-lg text-white border-2 border-logoRed hover:border-white hover:bg-white hover:text-black hover:bg-transparent transition-colors duration-300"
                           >
                              Check our team
                           </a>
                        </div>
                     </div>
                  </div>
               </Container>
            </div>
         </div>
      </div>
   );
};

export default Hero;
