import React, { createContext } from "react";
import UseCourse from "../../Hooks/UseCourse";

export const CartContext = createContext();

const ContextProvider = ({ children }) => {
  const allContext = UseCourse();
  return (
    <CartContext.Provider value={allContext}>{children}</CartContext.Provider>
  );
};

export default ContextProvider;
