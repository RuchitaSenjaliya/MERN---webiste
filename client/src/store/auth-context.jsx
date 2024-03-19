/* eslint-disable react/prop-types */
import { createContext, useCallback, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [serviceData, setServiceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const authorizationToken = `Bearer ${token}`;

  let isLoggedIn = !!token;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  const userAuthentication = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        setIsLoading(false);
      } else {
        console.error("Failed to fetch user");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Failed to fetch data", error);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  const fetchServiceData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setServiceData(data.msg);
      }
    } catch (error) {
      console.log("Services error", error);
    }
  };

  useEffect(() => {
    fetchServiceData();
    userAuthentication();
  }, [userAuthentication, token]);

  const logoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        logoutUser,
        isLoggedIn,
        user,
        token,
        serviceData,
        authorizationToken,
        isLoading,
        setIsLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
