import { Container } from "react-bootstrap";
import DrinksCarousel from "./components/DrinksCarousel";
import DrinksForm from "./components/DrinksForm";
import DrinksList from "./components/DrinksList";
import DrinkModal from "./components/DrinkModal";
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
          <DrinksCarousel />

          <DrinksForm />

          <DrinksList />

          <DrinkModal />
        </Container>
      </DrinksProvider>
    </CategoriesProvider>
  );
}

export default App;
