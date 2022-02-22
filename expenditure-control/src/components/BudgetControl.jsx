import React from "react";

const BudgetControl = ({budget}) => {
  return (
    <div className="contenedor-presupuesto contendor sombra dos-columnas">
      <div>
        <p>Gráfica aquí</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> ${budget}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
