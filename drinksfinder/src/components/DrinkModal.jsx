import { Modal, Image } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks";

const DrinkModal = () => {
  const { modal, handleModalClick } = useDrinks();

  return (
    <Modal show={modal} onHide={handleModalClick}>
      <Modal.Body>Cuerpo de body</Modal.Body>
    </Modal>
  );
};

export default DrinkModal;
