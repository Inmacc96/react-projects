import { Container } from "react-bootstrap";
import DrinksForm from "./components/DrinksForm";
import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from "./context/DrinksProvider";

function App() {
  return (
    <CategoriesProvider>
      <DrinksProvider>
        <header className="py-5">
          <h1>Drinks Finder</h1>
        </header>

        <Container className="mt-5">
          <DrinksForm />
        </Container>
      </DrinksProvider>
    </CategoriesProvider>
  );
}

export default App;
