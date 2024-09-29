"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";

// Haber veri tipini tanımlama
interface NewsItem {
  _id: string;
  title: string;
  text: string;
  imageUrl?: string;
  link?: string;
  date?: string;
  source?: string;
}

// Context'in içeriğinde neleri tutmak istediğimizi belirtiyoruz
interface NewsContextType {
  news: NewsItem[];
  loading: boolean;
  error: string | null;
  fetchAllNews: () => Promise<void>;
  fetchNewsById: (id: string) => Promise<NewsItem | null>;
  createNews: (newsItem: Omit<NewsItem, "_id">) => Promise<void>;
  updateNews: (id: string, updatedNews: Partial<NewsItem>) => Promise<void>;
  deleteNews: (id: string) => Promise<void>;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const useNews = (): NewsContextType => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNews must be used within a NewsProvider");
  }
  return context;
};

interface NewsProviderProps {
  children: ReactNode;
}

export const NewsProvider = ({ children }: NewsProviderProps) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAllNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get<NewsItem[]>(
        `${process.env.NEXT_PUBLIC_TEMPLATE_BACKEND_URL}/api/news`
      );
      setNews(response.data);
    } catch (error) {
      console.error("Failed to fetch news:", error);
      setError("Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  const fetchNewsById = async (id: string) => {
    setLoading(true);
    try {
      const response = await axios.get<NewsItem>(
        `${process.env.NEXT_PUBLIC_TEMPLATE_BACKEND_URL}/api/news/${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Failed to fetch news by ID:", error);
      setError("Failed to fetch news by ID");
      return null;
    } finally {
      setLoading(false);
    }
  };

  // createNews fonksiyonunu güncelleme
  const createNews = async (newsItem: Omit<NewsItem, "_id">) => {
    try {
      const token = localStorage.getItem("token"); // Token'ı localStorage'dan al
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_TEMPLATE_BACKEND_URL}/api/news`,
        newsItem,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        setNews([response.data, ...news]);
      } else {
        console.error(response.data);
        throw new Error("News creation failed", response.data);
      }
    } catch (error) {
      console.error("Failed to create news:", error);
      throw error;
    }
  };

  const updateNews = async (id: string, updatedNews: Partial<NewsItem>) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put<NewsItem>(
        `${process.env.NEXT_PUBLIC_TEMPLATE_BACKEND_URL}/api/news/${id}`,
        updatedNews,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNews(news.map((item) => (item._id === id ? response.data : item)));
    } catch (error) {
      console.error("Failed to update news:", error);
      setError("Failed to update news");
    } finally {
      setLoading(false);
    }
  };

  const deleteNews = async (id: string) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${process.env.NEXT_PUBLIC_TEMPLATE_BACKEND_URL}/api/news/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNews(news.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Failed to delete news:", error);
      setError("Failed to delete news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllNews();
  }, []);

  return (
    <NewsContext.Provider
      value={{
        news,
        loading,
        error,
        fetchAllNews,
        fetchNewsById,
        createNews,
        updateNews,
        deleteNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
