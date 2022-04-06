import { Row, Col, Carousel, Image } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";

const DrinksCarousel = () => {
  const { randomDrinks } = useDrinks();
  return (
    <Row className="justify-content-center">
      <Col md={8} lg={4}>
        <Carousel fade className="mb-5">
          {randomDrinks.map((drink) => (
            <Carousel.Item key={drink.idDrink} interval={3000}>
              <Image
                className="d-block w-100"
                src={drink.strDrinkThumb}
                alt={`${drink.strDrink}`}
              />
              <Carousel.Caption>
                <h1>{drink.strDrink}</h1>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default DrinksCarousel;
