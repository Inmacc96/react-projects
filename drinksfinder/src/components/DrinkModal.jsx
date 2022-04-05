import { Modal, Image, Button } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";

const DrinkModal = () => {
  const { modal, handleModalClick, recipe, loading, addFavDrink } = useDrinks();

  const showIngredients = () => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {recipe[`strIngredient${i}`]} - {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    !loading && (
      <Modal show={modal} onHide={handleModalClick}>
        <Image
          src={recipe.strDrinkThumb}
          alt={`Recipe image ${recipe.strDrink}`}
        />
        <Modal.Header>
          <Modal.Title>{recipe.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <h2>Instructions</h2>
            {recipe.strInstructions}
          </div>
          <div className="p-3">
            <h2>Ingredients and quantities</h2>
            {showIngredients()}
          </div>
          <Button
            className="w-100 text-uppercase mt-3"
            variant="danger"
            onClick={() => {
              addFavDrink(recipe.idDrink);
              handleModalClick();
            }}
          >
            Add to favourites
          </Button>
        </Modal.Body>
      </Modal>
    )
  );
};

export default DrinkModal;
