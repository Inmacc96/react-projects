import { Carousel, Image } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";

const DrinksCarousel = () => {
  const { randomDrinks } = useDrinks();
  return (
    <Carousel fade className="mb-5">
      {randomDrinks.map((drink) => (
        <Carousel.Item key={drink.idDrink} interval={3000}>
          <Image className='d-block w-100' src={drink.strDrinkThumb} alt={`${drink.strDrink}`} />
          <Carousel.Caption><h1 className="text-danger">{drink.strDrink}</h1></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default DrinksCarousel;
