import { useState } from "react";
import Text from "./Text";

const NewBudget = ({ budget, setBudget }) => {
  const [text, setText] = useState("");

  const handleBudget = (e) => {
    e.preventDefault();

    //budget is string
    if (!Number(budget) || Number(budget) < 0) {
      setText("No es un presupuesto válido");
    } else {
      setText("Si es un presupuesto válido");
    }
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>

          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Añade tu presupuesto"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>

        <input type="submit" value="Añadir" />
        {text && <Text type="error">{text}</Text>}
      </form>
    </div>
  );
};

export default NewBudget;
