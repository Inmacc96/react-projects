import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategories from "../hooks/useCategories";
import useDrinks from "../hooks/useDrinks";

const DrinksForm = () => {
  const [search, setSearch] = useState({
    nameofdrink: "",
    category: "",
  });
  const [alert, setAlert] = useState("");
  const { categories } = useCategories();
  const { getDrink, handleFavDrinkClick } = useDrinks();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }
    setAlert("");
    getDrink(search);
  };
  return (
    <Form onSubmit={handleSubmit}>
      {alert && (
        <Alert variant="danger" className="text-center">
          {alert}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nameofdrink">Drink Name</Form.Label>

            <Form.Control
              id="nameofdrink"
              type="text"
              placeholder="Eg: Tequila, Vodka, etc"
              name="nameofdrink"
              value={search.nameofdrink}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="category">Drink Category</Form.Label>

            <Form.Select
              id="category"
              name="category"
              value={search.category}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option> - Select Category - </option>
              {categories.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="justify-content-between">
        <Col md={3}>
          <Button
            variant="dark"
            className="text-uppercase w-100 my-4 my-md-0"
            onClick={() => {
              handleFavDrinkClick();
            }}
          >
            My favourite drinks
          </Button>
        </Col>
        <Col md={3}>
          <Button
            variant="danger"
            className="text-uppercase w-100"
            type="submit"
          >
            Search of drinks
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default DrinksForm;
