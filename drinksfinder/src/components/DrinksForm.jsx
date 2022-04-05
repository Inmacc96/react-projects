import { Button, Form, Row, Col } from "react-bootstrap";

const DrinksForm = () => {
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
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default DrinksForm;
