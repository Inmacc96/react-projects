import { useContext } from "react";
import DrinksContext from "../context/DrinksProvider";

const useDrinks = () => {
  return useContext(DrinksContext);
};

export default useDrinks;
