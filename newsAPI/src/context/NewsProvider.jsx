import { useState, useEffect, createContext } from "react";
import axios from "axios";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    const APIQuery = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;

      const { data } = await axios(url);

      setNews(data.articles);
    };
    APIQuery();
  }, [category]);

  return (
    <NewsContext.Provider value={{ category, handleChangeCategory, news }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider };
export default NewsContext;
