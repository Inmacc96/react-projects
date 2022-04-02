import { useState, useEffect, createContext } from "react";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("general");

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <NewsContext.Provider value={{ category, handleChangeCategory }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider };
export default NewsContext;
