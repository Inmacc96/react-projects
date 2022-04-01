import { useContext } from "react";
import NewsContext from "../context/NewsProvider";

const useNews = () => {
  return useContext(NewsContext);
};

export default useNews;
