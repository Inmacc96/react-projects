import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);

  const getDrink = async (data) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${data.nameofdrink}&c=${data.category}`;

      const { data: result } = await axios(url);
      setDrinks(result.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DrinksContext.Provider value={{ getDrink, drinks }}>
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };
export default DrinksContext;
