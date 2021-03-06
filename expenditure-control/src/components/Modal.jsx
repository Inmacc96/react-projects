import { useState, useEffect } from "react";
import Text from "./Text";
import CloseBtn from "../img/cerrar.svg";

const Modal = ({
  setModal,
  animateModal,
  setAnimateModal,
  saveExpenditure,
  expenditureEdit,
  setExpenditureEdit,
}) => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [id, setId] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (Object.keys(expenditureEdit).length > 0) {
      setName(expenditureEdit.name);
      setAmount(expenditureEdit.amount);
      setCategory(expenditureEdit.category);
      setId(expenditureEdit.id);
      setDate(expenditureEdit.date);
    }
  }, []);

  const hideModal = () => {
    setAnimateModal(false);
    setExpenditureEdit({});
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, category].includes("")) {
      setText("Todos los campos son obligatorios");
      setTimeout(() => {
        setText("");
      }, 3000);
      return;
    } else if (amount <= 0) {
      setText("Cantidad no válida. Inserte una cantidad positiva");
      setTimeout(() => {
        setText("");
      }, 3000);
      return;
    }

    saveExpenditure({ name, amount, category, id, date });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseBtn} alt="Close Modal" onClick={hideModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animateModal ? "animar" : "cerrar"}`}
      >
        <legend>{expenditureEdit.name ? "Editar Gasto" : "Nuevo Gasto"}</legend>
        {text && <Text type="error">{text}</Text>}

        <div className="campo">
          <label htmlFor="name">Nombre Gasto</label>

          <input
            id="name"
            type="text"
            placeholder="Añade el nombre del gasto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="amount">Cantidad</label>

          <input
            id="amount"
            type="number"
            placeholder="Añade la cantidad del gasto: ej. 300"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="category">Categoría</label>

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input
          type="submit"
          value={expenditureEdit.name ? "Guardar cambios" : "Añadir Gasto"}
        />
      </form>
    </div>
  );
};

export default Modal;
