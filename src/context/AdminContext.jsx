import React, { createContext, useState } from "react";

const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  const value = {
    user,
    token,
    setUser,
    setToken,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export { AdminContext, AdminContextProvider };
