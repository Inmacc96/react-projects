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

        <div className="campo">
          <label htmlFor="name">Nombre Gasto</label>

          <input
            id="name"
            type="text"
            placeholder="Añade el nombre del gasto"
          />
        </div>

        <div className="campo">
          <label htmlFor="amount">Cantidad</label>

          <input
            id="amount"
            type="number"
            placeholder="Añade la cantidad del gasto: ej. 300"
          />
        </div>

        <div className="campo">
          <label htmlFor="category">Categoría</label>

          <select id="category">
            <option value="">-- Seleccione --</option>
            <option value="saving">Ahorro</option>
            <option value="food">Comida</option>
            <option value="house">Casa</option>
            <option value="miscellaneous">Gastos Varios</option>
            <option value="leisure">Ocio</option>
            <option value="health">Salud</option>
            <option value="subscription">Suscripciones</option>
          </select>
        </div>

        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  );
};

export default Modal;
