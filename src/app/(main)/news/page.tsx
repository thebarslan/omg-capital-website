// import Container from "@/app/components/common/container";
// import Image from "next/image";
// import React from "react";
// import Media1 from "../../assets/images/media/media1.webp";
// import Media2 from "../../assets/images/media/media2.webp";
// import Media3 from "../../assets/images/media/media3.webp";
// import Media4 from "../../assets/images/media/media4.webp";
// import Media5 from "../../assets/images/media/media5.webp";
// import Media6 from "../../assets/images/media/media6.webp";
// import Media7 from "../../assets/images/media/media7.webp";
// import Media8 from "../../assets/images/media/media8.webp";
// import Media9 from "../../assets/images/media/media9.webp";

// const News = () => {
//    return (
//       <div className="w-full h-auto team flex flex-col">
//          <div className="slider w-full flex max-h-[500px] h-full">
//             <div className="news-item w-screen max-h-[500px] lg:h-[500px] md:h-[250px] h-[160px] relative">
//                <div className="absolute left-0 top-0 bg-[#0000007a] w-full h-full z-[20]"></div>
//                <div className="hero-bigger-container h-full w-full">
//                   <Container>
//                      <div className="hero-container w-full flex relative z-[200] lg:h-[500px] md:h-[250px] h-[160px] text-white items-end justify-center">
//                         <h5 className="lg:text-6xl lg:font-extrabold font-bold lg:mb-12 text-2xl mb-4">
//                            NEWS
//                         </h5>
//                      </div>
//                   </Container>
//                </div>
//             </div>
//          </div>
//          <div className="bigger-container w-full flex flex-col gap-6 lg:my-20 my-12">
//             <Container>
//                <div className="latest-news-container w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-8 2xl:px-0 px-2">
//                   <a
//                      className="news h-[300px] w-full  flex flex-col relative"
//                      href="https://www.youtube.com/watch?v=G4uhBy8v6nE"
//                      target="_blank"
//                   >
//                      <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
//                      <div className="w-full h-[300px]">
//                         <Image
//                            src={Media1}
//                            alt="news-img"
//                            className="object-cover w-full h-[300px] "
//                         />
//                      </div>
//                      <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
//                      <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
//                         <div className="w-full flex justify-between items-center">
//                            <h5 className="text-[19px]">BloombergHT</h5>
//                            <h5 className="text-[12px]">22.02.2024</h5>
//                         </div>
//                         <p className="text-[14px] font-medium">
//                            BloombergHT - Kontrolmatik & Harbin Electric Arasında
//                            Proje Finansmanı Anlaşması
//                         </p>
//                      </div>
//                   </a>

//                   <a
//                      className="news h-[300px] w-full  flex flex-col relative"
//                      href="https://www.youtube.com/watch?v=UPxUN4sT7hw"
//                      target="_blank"
//                   >
//                      <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
//                      <div className="w-full h-[300px]">
//                         <Image
//                            src={Media2}
//                            alt="news-img"
//                            className="object-cover w-full h-[300px] "
//                         />
//                      </div>
//                      <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
//                      <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
//                         <div className="w-full flex justify-between items-center">
//                            <h5 className="text-[19px]">BloombergHT</h5>
//                            <h5 className="text-[12px]">21.02.2024</h5>
//                         </div>
//                         <p className="text-[14px] font-medium">
//                            BloombergHT - Sabah Raporu
//                         </p>
//                      </div>
//                   </a>

//                   <a
//                      className="news h-[300px] w-full  flex flex-col relative"
//                      href="https://www.youtube.com/watch?v=I4-1Jxi_Dcg&t=1187s"
//                      target="_blank"
//                   >
//                      <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
//                      <div className="w-full h-[300px]">
//                         <Image
//                            src={Media3}
//                            alt="news-img"
//                            className="object-cover w-full h-[300px] "
//                         />
//                      </div>
//                      <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
//                      <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
//                         <div className="w-full flex justify-between items-center">
//                            <h5 className="text-[19px]">BloombergHT</h5>
//                            <h5 className="text-[12px]">28.02.2023</h5>
//                         </div>
//                         <p className="text-[14px] font-medium">
//                            BloombergHT - Finans Merkezi
//                         </p>
//                      </div>
//                   </a>

//                   <a
//                      className="news h-[300px] w-full  flex flex-col relative"
//                      href="https://www.youtube.com/watch?v=QnjVFk_-cBs"
//                      target="_blank"
//                   >
//                      <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
//                      <div className="w-full h-[300px]">
//                         <Image
//                            src={Media4}
//                            alt="news-img"
//                            className="object-cover w-full h-[300px] "
//                         />
//                      </div>
//                      <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
//                      <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
//                         <div className="w-full flex justify-between items-center">
//                            <h5 className="text-[19px]">Habertürk</h5>
//                            <h5 className="text-[12px]">20.02.2022</h5>
//                         </div>
//                         <p className="text-[14px] font-medium">
//                            HaberTürk - Borsada Yatırım
//                         </p>
//                      </div>
//                   </a>
//                   <a
//                      className="news h-[300px] w-full  flex flex-col relative"
//                      href="https://www.youtube.com/watch?v=oGnl5ppn9jA"
//                      target="_blank"
//                   >
//                      <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
//                      <div className="w-full h-[300px]">
//                         <Image
//                            src={Media5}
//                            alt="news-img"
//                            className="object-cover w-full h-[300px] "
//                         />
//                      </div>
//                      <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
//                      <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
//                         <div className="w-full flex justify-between items-center">
//                            <h5 className="text-[19px]">BloombergHT</h5>
//                            <h5 className="text-[12px]">20.04.2021</h5>
//                         </div>
//                         <p className="text-[14px] font-medium">
//                            BloombergHT - Yatırım Kulübü
//                         </p>
//                      </div>
//                   </a>
//                   <a
//                      className="news h-[300px] w-full  flex flex-col relative"
//                      href="https://www.youtube.com/watch?v=e196CRkh07U"
//                      target="_blank"
//                   >
//                      <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
//                      <div className="w-full h-[300px]">
//                         <Image
//                            src={Media6}
//                            alt="news-img"
//                            className="object-cover w-full h-[300px] "
//                         />
//                      </div>
//                      <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
//                      <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
//                         <div className="w-full flex justify-between items-center">
//                            <h5 className="text-[19px]">BloombergHT</h5>
//                            <h5 className="text-[12px]">20.12.2021</h5>
//                         </div>
//                         <p className="text-[14px] font-medium">
//                            BloombergHT - Yatırım Kulübü
//                         </p>
//                      </div>
//                   </a>
//                   <a
//                      className="news h-[300px] w-full  flex flex-col relative"
//                      href="https://www.youtube.com/watch?v=ETH2n0l_ySM"
//                      target="_blank"
//                   >
//                      <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
//                      <div className="w-full h-[300px]">
//                         <Image
//                            src={Media7}
//                            alt="news-img"
//                            className="object-cover w-full h-[300px] "
//                         />
//                      </div>
//                      <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
//                      <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
//                         <div className="w-full flex justify-between items-center">
//                            <h5 className="text-[19px]">Kriptometre</h5>
//                            <h5 className="text-[12px]">02.12.2020</h5>
//                         </div>
//                         <p className="text-[14px] font-medium">
//                            Kriptometre - Finansın Geleceği ve Rekabeti
//                         </p>
//                      </div>
//                   </a>
//                   <a
//                      className="news h-[300px] w-full  flex flex-col relative"
//                      href="https://www.youtube.com/watch?v=FDgv4RQMnUM"
//                      target="_blank"
//                   >
//                      <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
//                      <div className="w-full h-[300px]">
//                         <Image
//                            src={Media8}
//                            alt="news-img"
//                            className="object-cover w-full h-[300px] "
//                         />
//                      </div>
//                      <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
//                      <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
//                         <div className="w-full flex justify-between items-center">
//                            <h5 className="text-[19px]">BloombergHT</h5>
//                            <h5 className="text-[12px]">24.09.2019</h5>
//                         </div>
//                         <p className="text-[14px] font-medium">
//                            BloombergHT - Küresel Piyasalar
//                         </p>
//                      </div>
//                   </a>
//                   <a
//                      className="news h-[300px] w-full  flex flex-col relative"
//                      href="https://www.youtube.com/watch?v=cYrmDd3TsSE"
//                      target="_blank"
//                   >
//                      <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
//                      <div className="w-full h-[300px]">
//                         <Image
//                            src={Media9}
//                            alt="news-img"
//                            className="object-cover w-full h-[300px] "
//                         />
//                      </div>
//                      <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
//                      <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
//                         <div className="w-full flex justify-between items-center">
//                            <h5 className="text-[19px]">BloombergHT</h5>
//                            <h5 className="text-[12px]">01.08.2019</h5>
//                         </div>
//                         <p className="text-[14px] font-medium">
//                            BloombergHT - Küresel Piyasalar
//                         </p>
//                      </div>
//                   </a>
//                </div>
//             </Container>
//          </div>
//       </div>
//    );
// };

// export default News;


"use client";

import React, { useEffect } from "react";
import Container from "@/app/components/common/container";
import Image from "next/image";
import { useNews } from "../../contexts/NewsContext";

const News = () => {
  const { news, loading, fetchAllNews } = useNews();

  // Sayfa yüklendiğinde tüm haberleri getir
  useEffect(() => {
    fetchAllNews();
  }, [fetchAllNews]);

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
          {loading ? (
            <p className="text-center w-full">Loading...</p>
          ) : news.length === 0 ? (
            <div className="no-news-message w-full flex justify-center items-center h-60">
              <p className="text-lg text-gray-500">
                There are currently no news articles available. Please check back later for the latest updates!
              </p>
            </div>
          ) : (
            <div className="latest-news-container w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-8 2xl:px-0 px-2">
              {[...news].reverse().map((newsItem) => (
                <a
                  key={newsItem._id}
                  className="news h-[300px] w-full flex flex-col relative"
                  href={newsItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
                  <div className="w-full h-[300px]">
                    <Image
                      src={newsItem.imageUrl || "/default-image.png"}
                      alt="news-img"
                      className="object-cover w-full h-[300px]"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
                  <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
                    <div className="w-full flex justify-between items-center">
                      <h5 className="text-[19px]">{newsItem.source || "Unknown Source"}</h5>
                      <h5 className="text-[12px]">{newsItem.date || "No Date"}</h5>
                    </div>
                    <p className="text-[14px] font-medium">{newsItem.title || "No Title"}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default News;
