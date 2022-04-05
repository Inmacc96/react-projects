import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);
  const [favDrinks, setFavDrinks] = useState([]);

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

  const addFavDrink = (id) => {
    const favDrink = drinks.filter((drink) => drink.idDrink === id);
    setFavDrinks([...favDrinks, favDrink[0]]);
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
        addFavDrink,
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };
export default DrinksContext;
