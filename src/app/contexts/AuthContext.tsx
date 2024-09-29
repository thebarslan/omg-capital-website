"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";

interface User {
  _id: string;
  name: string;
  email: string;
  userType: string;
  createdAt: string;
}

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
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

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

  const BACKEND_URL =
    process.env.NEXT_PUBLIC_TEMPLATE_BACKEND_URL || "http://localhost:5000";

  const fetchAllUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get<User[]>(`${BACKEND_URL}/api/auth`);
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
      const response = await axios.put<User>(
        `${BACKEND_URL}/api/auth/${id}`,
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
      await axios.delete(`${BACKEND_URL}/api/auth/${id}`);
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
      const response = await axios.post(`${BACKEND_URL}/api/auth/register`, userData);
      alert(response.data.message); // Show a success message
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
      const response = await axios.post(`${BACKEND_URL}/api/auth/login`, {
        email,
        password,
      });
      const token = response.data.token;

      // Save the token to localStorage
      localStorage.setItem("token", token);

      // Decode token to get user data (for this example, assume user data is in the token payload)
      const decodedUser: User = JSON.parse(atob(token.split(".")[1]));
      setCurrentUser(decodedUser);

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
    setCurrentUser(null);
  };

  // Check for token on initial load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedUser: User = JSON.parse(atob(token.split(".")[1]));
        setCurrentUser(decodedUser);
      } catch (error) {
        console.error("Failed to parse user data from token", error);
      }
    }
  }, []);

  useEffect(() => {
    fetchAllUsers();
  }, []);

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
