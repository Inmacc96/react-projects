import { Row } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";
import Drink from "./Drink";

const DrinksList = () => {
  const { drinks } = useDrinks();
  console.log(drinks);

  return (
    <Row>
      {drinks.map((drink) => (
        <Drink key={drink.idDrink} drink={drink} />
      ))}
    </Row>
  );
};

export default DrinksList;
