import React, { createContext } from "react";
import UseCourseCart from "../../Hooks/UseCourseCart";

export const CartContext = createContext();

const ContextProvider = ({ children }) => {
  const allContext = UseCourseCart();
  return (
    <CartContext.Provider value={allContext}>{children}</CartContext.Provider>
  );
};

export default ContextProvider;
