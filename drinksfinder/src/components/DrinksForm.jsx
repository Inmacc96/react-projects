import { Button, Form, Row, Col } from "react-bootstrap";
import useCategories from "../hooks/useCategories";

const DrinksForm = () => {
  const { categories } = useCategories();
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nameofdrink">Drink Name</Form.Label>

            <Form.Control
              id="nameofdrink"
              type="text"
              placeholder="Eg: Tequila, Vodka, etc"
              name="nameofdrink"
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="category">Drink Category</Form.Label>

            <Form.Select id="category" name="category">
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

      <Row className="justify-content-end">
        <Col md={3}>
          <Button variant="danger" className="text-uppercase w-100">
            Search of drinks
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default DrinksForm;
