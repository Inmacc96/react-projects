import { Container } from "react-bootstrap";
import DrinksForm from "./components/DrinksForm";
import {CategoriesProvider} from './context/CategoriesProvider'

function App() {
  return (
    <CategoriesProvider>
      <header className="py-5">
        <h1>Drinks Finder</h1>
      </header>
      <Container className="mt-5">
        <DrinksForm />
      </Container>
    </CategoriesProvider>
  );
}

export default App;
