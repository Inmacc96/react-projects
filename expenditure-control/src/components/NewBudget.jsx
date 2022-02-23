import { useState } from "react";
import Text from "./Text";

const NewBudget = ({ budget, setBudget,setIsValidBudget }) => {
  const [text, setText] = useState("");

  const handleBudget = (e) => {
    e.preventDefault();

    if (!budget || budget < 0) {
      setText("No es un presupuesto válido");
      return;
    }
    setText(""); // Si ha habido un error, eliminamos el mensaje ya que en este caso ya es correcto
    setIsValidBudget(true);
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>

          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade tu presupuesto"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>

        <input type="submit" value="Añadir" />
        {text && <Text type="error">{text}</Text>}
      </form>
    </div>
  );
};

export default NewBudget;