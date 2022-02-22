import React from "react";

const BudgetControl = ({ budget }) => {
  const formatAmount = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <div className="contenedor-presupuesto contendor sombra dos-columnas">
      <div>
        <p>Gráfica aquí</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> {formatAmount(budget)}
        </p>

        <p>
          <span>Disponible: </span> {formatAmount(0)}
        </p>

        <p>
          <span>Gastado: </span> {formatAmount(0)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
