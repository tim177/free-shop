"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Utility functions for session management
const getToken = () => sessionStorage.getItem("authToken");
const getUserRole = () => sessionStorage.getItem("userRole");
const removeToken = () => {
  sessionStorage.removeItem("authToken");
  sessionStorage.removeItem("userRole");
};

// Define types for context
type AuthContextType = {
  userRole: string | null;
  isAuthenticated: boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  const checkAuth = () => {
    const token = getToken();
    const role = getUserRole();

    console.log("Checking Auth - Token:", token);
    console.log("Checking Auth - Role:", role);

    if (token && role) {
      setIsAuthenticated(true);
      setUserRole(role);
    } else {
      setIsAuthenticated(false);
      setUserRole(null);
      console.log("Not authenticated. Redirecting to login...");
      router.push("/login");
    }
  };

  useEffect(() => {
    checkAuth();

    // Listen for session updates
    const handleAuthUpdate = () => {
      console.log("SessionStorage updated. Rechecking authentication.");
      checkAuth();
    };

    window.addEventListener("authUpdated", handleAuthUpdate);

    return () => {
      window.removeEventListener("authUpdated", handleAuthUpdate);
    };
  }, [router]);

  const logout = () => {
    removeToken();
    setIsAuthenticated(false);
    setUserRole(null);
    router.push("/login");
    window.dispatchEvent(new Event("authUpdated"));
  };

  return (
    <AuthContext.Provider value={{ userRole, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
