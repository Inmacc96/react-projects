import { useContext } from "react";
import CategoriesContext from "../context/CategoriesProvider";

const useCategories = () => {
  return useContext(CategoriesContext);
};

export default useCategories;
