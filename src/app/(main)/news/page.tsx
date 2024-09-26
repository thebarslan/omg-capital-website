import Container from "@/app/components/common/container";
import Image from "next/image";
import React from "react";
import News1 from "../../assets/images/news/news1.jpg";
import News2 from "../../assets/images/news/news2.jpg";
import News3 from "../../assets/images/news/news3.jpg";

const News = () => {
   return (
      <div className="w-full h-auto team flex flex-col">
         <div className="slider w-full flex max-h-[500px] h-full">
            <div className="news-item w-screen max-h-[500px] lg:h-[500px] md:h-[250px] h-[160px] relative">
               <div className="absolute left-0 top-0 bg-[#0000007a] w-full h-full z-[20]"></div>
               <div className="hero-bigger-container h-full w-full">
                  <Container>
                     <div className="hero-container w-full flex relative z-[200] lg:h-[500px] md:h-[250px] h-[160px] text-white items-end justify-center">
                        <h5 className="lg:text-6xl lg:font-extrabold font-bold lg:mb-12 text-2xl mb-4">
                           NEWS
                        </h5>
                     </div>
                  </Container>
               </div>
            </div>
         </div>
         <div className="bigger-container w-full flex flex-col gap-6 lg:my-20 my-12">
            <Container>
               <div className="latest-news-container w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-8">
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
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor...
                        </p>
                     </div>
                  </a>

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
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor...
                        </p>
                     </div>
                  </a>

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
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor...
                        </p>
                     </div>
                  </a>

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
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor...
                        </p>
                     </div>
                  </a>
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
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor...
                        </p>
                     </div>
                  </a>
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
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, sed do eiusmod tempor...
                        </p>
                     </div>
                  </a>
               </div>
            </Container>
         </div>
      </div>
   );
};

export default News;
