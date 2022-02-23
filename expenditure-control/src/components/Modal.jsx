import CloseBtn from "../img/cerrar.svg";

const Modal = ({ setModal, animateModal, setanimateModal }) => {
  const hideModal = () => {
    setanimateModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseBtn} alt="Close Modal" onClick={hideModal} />
      </div>

      <form className={`formulario ${animateModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>
      </form>
    </div>
  );
};

export default Modal;
