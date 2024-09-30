"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";

// Investor data type
interface Investor {
  name: string;
  surname: string;
  birthDate: string;
  gender: string;
  phoneNumber: string;
  email: string;
  city: string;
  province: string;
  monthlyIncome: number;
  profession: string;
}

// InvestorContext type
interface InvestorContextType {
  investors: Investor[];
  loading: boolean;
  error: string | null;
  fetchAllInvestors: () => Promise<void>;
  fetchInvestorById: (id: string) => Promise<Investor | null>;
  addInvestor: (investor: Investor) => Promise<void>;
}

const InvestorContext = createContext<InvestorContextType | undefined>(
  undefined
);

export const useInvestor = (): InvestorContextType => {
  const context = useContext(InvestorContext);
  if (!context) {
    throw new Error("useInvestor must be used within an InvestorProvider");
  }
  return context;
};

interface InvestorProviderProps {
  children: ReactNode;
}

export const InvestorProvider = ({ children }: InvestorProviderProps) => {
  const [investors, setInvestors] = useState<Investor[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const BACKEND_URL =
    process.env.NEXT_REACT_TEMPLATE_BACKEND_URL || "http://localhost:5005";

  // Fetch all investors
  const fetchAllInvestors = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Unauthorized");

      const response = await axios.get<Investor[]>(
        `${BACKEND_URL}/api/investors`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setInvestors(response.data);
    } catch (error) {
      console.error("Failed to fetch investors:", error);
      setError("Failed to fetch investors");
    } finally {
      setLoading(false);
    }
  };

  // Fetch a single investor by ID
  const fetchInvestorById = async (id: string): Promise<Investor | null> => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Unauthorized");

      const response = await axios.get<Investor>(
        `${BACKEND_URL}/api/investors/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to fetch investor by ID:", error);
      setError("Failed to fetch investor by ID");
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Add a new investor
  const addInvestor = async (investor: Investor) => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/investors/register`,
        investor,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        const registeredInvestor = response.data.investor;
        setInvestors([...investors, registeredInvestor]);
        console.log("Investor registered successfully:", registeredInvestor);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("Error registering investor:", error);
    }
  };

  useEffect(() => {
    fetchAllInvestors();
  }, []);

  return (
    <InvestorContext.Provider
      value={{
        investors,
        loading,
        error,
        fetchAllInvestors,
        fetchInvestorById,
        addInvestor,
      }}
    >
      {children}
    </InvestorContext.Provider>
  );
};
