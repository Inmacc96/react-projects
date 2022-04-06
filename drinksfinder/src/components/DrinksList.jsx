import { Row } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";
import Drink from "./Drink";

const DrinksList = () => {
  const { drinks } = useDrinks();

  return (
    <Row className="mt-5">
       { drinks.length ? drinks.map((drink) => (
        <Drink key={drink.idDrink} drink={drink} />
      )) : <p>TPM</p>} 
    </Row>
  );
};

export default DrinksList;
