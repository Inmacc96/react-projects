import { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetControl = ({ expenses, budget }) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expenditure) => expenditure.amount + total,
      0
    );

    const totalAvailable = budget - totalSpent;

    setAvailable(totalAvailable);
    setSpent(totalSpent);
  }, [expenses]);

  const formatAmount = (amount) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar value={50} />
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> {formatAmount(budget)}
        </p>

        <p>
          <span>Disponible: </span> {formatAmount(available)}
        </p>

        <p>
          <span>Gastado: </span> {formatAmount(spent)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
