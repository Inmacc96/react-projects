import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const [randomDrinks, setRandomDrinks] = useState([]);

  useEffect(() => {
    const getRandomDrinks = async () => {
      const url =
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

      const { data } = await axios(url);
      setRandomDrinks(data.drinks.slice(5, 11));
    };
    getRandomDrinks();
  }, []);

  useEffect(() => {
    setLoading(true);
    const getRecipe = async () => {
      if (!drinkId) return;

      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;

        const { data } = await axios(url);
        setRecipe(data.drinks[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getRecipe();
  }, [drinkId]);

  useEffect(() => {
    const getLS = () => {
      const drinks = JSON.parse(localStorage.getItem("favdrinks")) ?? [];
      setFavDrinks(drinks);
    };
    getLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("favdrinks", JSON.stringify(favDrinks));
  }, [favDrinks]);

  const getDrink = async (data) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${data.nameofdrink}&c=${data.category}`;

      const { data: result } = await axios(url);
      setDrinks(result.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClick = () => {
    setModal(!modal);
  };

  const handleDrinkIdClick = (id) => {
    setDrinkId(id);
  };



  return (
    <DrinksContext.Provider
      value={{
        getDrink,
        drinks,
        modal,
        handleModalClick,
        handleDrinkIdClick,
        recipe,
        loading,
        randomDrinks,
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };
export default DrinksContext;
