import { useState, useEffect, createContext } from "react";

const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  return (
    <CategoriesContext.Provider value={{}}>
      {children}
    </CategoriesContext.Provider>
  );
};

export { CategoriesProvider };
export default CategoriesContext;
