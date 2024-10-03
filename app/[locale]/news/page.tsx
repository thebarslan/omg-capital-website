"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Logo from "../../images/logo.png";
import Container from "@/app/components/common/container";
import Image from "next/image";
import { useParams } from "next/navigation";
import EnhancedModal from "../../components/common/enhancedModal"; // Yeni Modal bileşeni
import { useTranslations } from "next-intl";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  link: string;
  image: string;
  description: string;
}

const News = () => {
  const t = useTranslations("News-Page");

  const { locale } = useParams();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null); // Modal için seçili haber

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`http://localhost:5005/api/news`, {
          params: { locale },
        });

        // Haberleri ID'ye göre büyükten küçüğe sırala
        const sortedNews = response.data.sort(
          (a: NewsItem, b: NewsItem) => Number(b.id) - Number(a.id)
        );

        setNews(sortedNews);
      } catch (error) {
        console.error("Haberler alınamadı:", error);
      }
    };

    fetchNews();
  }, [locale]);

  // Haber açıklamasını kısaltmak için truncate fonksiyonu
  const truncate = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="w-full h-auto team flex flex-col">
      {/* Slider kısmı */}
      <div className="slider w-full flex max-h-[500px] h-full">
        <div className="news-item w-screen max-h-[500px] lg:h-[500px] md:h-[250px] h-[160px] relative">
          <div className="absolute left-0 top-0 bg-[#0000007a] w-full h-full z-[20]"></div>
          <div className="hero-bigger-container h-full w-full">
            <Container>
              <div className="hero-container w-full flex relative z-[50] lg:h-[500px] md:h-[250px] h-[160px] text-white items-end justify-center">
                <h5 className="lg:text-6xl lg:font-extrabold font-bold lg:mb-12 text-2xl mb-4">
                  {t("header")}
                </h5>
              </div>
            </Container>
          </div>
        </div>
      </div>

      {/* Haberlerin Gösterimi */}
      <div
        className={`bigger-container w-full flex flex-col gap-6 lg:my-20 my-12 ${
          selectedNews ? "blur-md" : ""
        }`}
      >
        <Container>
          <div className="latest-news-container w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-8 2xl:px-0 px-2">
            {news.length > 0 ? (
              news.map((item, index) => (
                <a
                  key={index}
                  className="news h-[300px] w-full flex flex-col relative"
                  onClick={() => setSelectedNews(item)} // Modal'ı açmak için
                >
                  <div className="absolute w-full h-full top-0 left-0 bg-[#00000070] z-[100]"></div>
                  <div className="w-full h-[300px]">
                    <Image
                      src={item.image}
                      alt="news-img"
                      className="object-cover w-full h-[300px]"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="absolute w-full h-[106px] bg-[#00000082] left-0 bottom-0 flex flex-col py-1 px-4 text-white"></div>
                  <div className="absolute w-full h-[106px] z-[200] left-0 bottom-0 flex flex-col py-1 px-4 text-white justify-start pt-2 gap-[2px]">
                    <div className="w-full flex justify-between items-center">
                      <h5 className="text-[19px]">{item.title}</h5>
                      <h5 className="text-[12px]">{item.date}</h5>
                    </div>
                    <p className="text-[14px] font-medium">
                      {truncate(item.description, 100)}{" "}
                      {/* 100 karaktere kadar kısalt */}
                    </p>
                  </div>
                </a>
              ))
            ) : (
              <div className="fixed inset-0 z-[600] flex flex-col justify-center items-center bg-white bg-opacity-95">
                <div className="relative duration-500 flex justify-center items-center">
                  <div className="w-[200px] h-[200px] rounded-full border-t-4 border-b-4 border-logoGray animate-spin-slow"></div>
                  <div className="absolute">
                    <Image
                      src={Logo}
                      alt="omg-logo"
                      className="w-[150px] h-auto"
                    />
                  </div>
                </div>
                <div className="flex mt-6 text-logoGray">
                  <p>{t("loading")}</p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>

      {/* Modal - Haber Detayı */}
      {selectedNews && (
        <EnhancedModal
          onClose={() => setSelectedNews(null)}
          title={selectedNews.title}
          description={selectedNews.description}
          date={selectedNews.date}
          image={selectedNews.image}
          link={selectedNews.link}
        />
      )}
    </div>
  );
};

export default News;
