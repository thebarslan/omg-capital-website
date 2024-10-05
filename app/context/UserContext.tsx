"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";
import CryptoJS from "crypto-js"; // Şifreleme için gerekli kütüphane

// Şifreleme için bir gizli anahtar (secret key)
const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY || "default_secret_key";

// Kullanıcı bilgilerini tutacak arayüz
interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  gender: string;
  username: string;
}

interface UserContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  register: (
    name: string,
    surname: string,
    email: string,
    gender: string,
    username: string,
    password: string
  ) => Promise<void>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// Şifreleme fonksiyonu
const encryptToken = (token: string): string => {
  return CryptoJS.AES.encrypt(token, SECRET_KEY).toString();
};

// Şifre çözme fonksiyonu
const decryptToken = (encryptedToken: string): string | null => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedToken, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.error("Token decryption failed:", error);
    return null;
  }
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Register function
  const register = async (
    name: string,
    surname: string,
    email: string,
    gender: string,
    username: string,
    password: string
  ) => {
    try {
      const response = await axios.post(
        "http://localhost:5005/api/auth/register",
        {
          name,
          surname,
          email,
          gender,
          username,
          password,
        }
      );

      if (response.status === 201) {
        // Başarılı kayıt
        console.log("Kayıt başarıyla tamamlandı:", response.data.message);
      } else {
        // Beklenmedik bir durum
        console.error("Kayıt sırasında bir sorun oluştu:", response.data);
      }
    } catch (error: unknown) {
      // error'ın tipini 'unknown' olarak belirtiyoruz
      if (axios.isAxiosError(error)) {
        // Axios hata yanıtını işliyoruz
        if (error.response) {
          console.error("Kayıt başarısız:", error.response.data.message);
        //   alert(`Registration failed: ${error.response.data.message}`);
        } else {
          console.error("Axios error occurred:", error.message);
        //   alert("An error occurred with Axios");
        }
      } else if (error instanceof Error) {
        // Diğer hataları işliyoruz
        console.error("Kayıt sırasında bir hata oluştu:", error.message);
        // alert("An unknown error occurred during registration");
      } else {
        console.error("Bilinmeyen bir hata oluştu.");
        // alert("An unknown error occurred.");
      }
    }
  };

  // Login function
  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post(
        "http://localhost:5005/api/users/login",
        {
          username,
          password,
        }
      );

      const { token } = response.data;
      // Token'ı şifreleyip localStorage'a kaydet
      const encryptedToken = encryptToken(token);
      localStorage.setItem("encrypted_token", encryptedToken);

      // Profil bilgilerini al
      const profileResponse = await axios.get(
        "http://localhost:5005/api/users/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(profileResponse.data);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Login failed:", error.message);
      } else {
        console.error("Login failed: An unknown error occurred.");
      }
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("encrypted_token");
    setUser(null);
  };

  // Token ile kullanıcı oturumunu otomatik olarak geri yükle
  useEffect(() => {
    const loadUser = async () => {
      const encryptedToken = localStorage.getItem("encrypted_token");
      if (encryptedToken) {
        const token = decryptToken(encryptedToken);
        if (token) {
          try {
            const response = await axios.get(
              "http://localhost:5005/api/users/profile",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            setUser(response.data);
          } catch (error) {
            if (error instanceof Error) {
              console.error("User session expired:", error.message);
            } else {
              console.error("User session expired: An unknown error occurred.");
            }
            logout();
          }
        } else {
          console.error("Failed to decrypt token");
          logout();
        }
      }
    };

    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};
