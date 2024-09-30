"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

// User interface definition
interface User {
  _id: string;
  name: string;
  email: string;
  username: string;
  userType: string;
  createdAt: string;
}

// Context type definition
interface UserContextType {
  users: User[];
  loading: boolean;
  error: string | null;
  fetchAllUsers: () => Promise<void>;
  updateUser: (id: string, updatedUser: Partial<User>) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  currentUser: User | null;
  authState: boolean; // Auth state to track if the user is authenticated
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

// Props type for the provider
interface UserProviderProps {
  children: ReactNode;
}

// Registration data structure
interface RegisterData {
  name: string;
  surname: string;
  email: string;
  gender: string;
  username: string;
  password: string;
  userType: string;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authState, setAuthState] = useState<boolean>(false); // Track authentication state

  const BACKEND_URL =
    process.env.NEXT_PUBLIC_TEMPLATE_BACKEND_URL || "http://localhost:5005";

  const router = useRouter();

  // Axios instance setup
  const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
  });

  // Interceptor for adding the Bearer token to requests
  axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  });

  const fetchAllUsers = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get<User[]>("/api/auth");
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (id: string, updatedUser: Partial<User>) => {
    setLoading(true);
    try {
      const response = await axiosInstance.put<User>(
        `/api/auth/${id}`,
        updatedUser
      );
      setUsers(users.map((user) => (user._id === id ? response.data : user)));
    } catch (error) {
      console.error("Failed to update user:", error);
      setError("Failed to update user");
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: string) => {
    setLoading(true);
    try {
      await axiosInstance.delete(`/api/auth/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Failed to delete user:", error);
      setError("Failed to delete user");
    } finally {
      setLoading(false);
    }
  };

  // User Registration
  const register = async (userData: RegisterData) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/api/auth/register", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        console.log("User registered successfully:", response.data);
        router.push("/");
        alert("User registered successfully");
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("Failed to register user:", error);
      setError("Failed to register user");
    } finally {
      setLoading(false);
    }
  };

  // User Login
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/api/auth/login", {
        email,
        password,
      });
      const { token, user } = response.data; // Destructure user data from response

      // Save the token to localStorage
      localStorage.setItem("token", `Bearer ${token}`);

      // Set the current user state with the returned user data
      setCurrentUser(user);

      // Save user data with an expiration time of 1 hour
      const expirationTime = new Date().getTime() + 60 * 60 * 1000; // 1 hour in milliseconds
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ user, expirationTime })
      );

      // Update auth state
      setAuthState(true);

      router.push("/profile");

      alert("Login successful");
    } catch (error) {
      console.error("Failed to login:", error);
      setError("Failed to login");
    } finally {
      setLoading(false);
    }
  };

  // User Logout
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setAuthState(false);
  };

  // Check for token and user on initial load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("currentUser");

    if (token && storedUser) {
      try {
        const { user, expirationTime } = JSON.parse(storedUser);

        // Check if the session is expired
        if (new Date().getTime() > expirationTime) {
          logout();
        } else {
          setCurrentUser(user);
          setAuthState(true); // Set authState to true
        }
      } catch (error) {
        console.error("Failed to parse user data from storage", error);
      }
    }
  }, []);

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
        fetchAllUsers,
        updateUser,
        deleteUser,
        register,
        login,
        logout,
        currentUser,
        authState, // Provide authState
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
