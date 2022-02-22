import CloseBtn from "../img/cerrar.svg";

const Modal = ({ setModal }) => {
  const hideModal = () => {
    setModal(false);
  };
  return (
    <div class="modal">
      <div class="cerrar-modal">
        <img src={CloseBtn} alt="Close Modal" onClick={hideModal} />
      </div>
    </div>
  );
};

export default Modal;
