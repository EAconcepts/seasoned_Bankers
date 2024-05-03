"use client";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export interface UserProps {
  password?: String;
  email?: String;
}
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let userString = localStorage.getItem("user");
      // let tkn = localStorage.getItem("token");
      // setToken(tkn);
      setUser(userString !== null && JSON.parse(userString));
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, setToken, setUser, token }}>
      {children}
    </AuthContext.Provider>
  );
};
