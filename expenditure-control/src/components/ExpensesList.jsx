import Expenditure from "./Expenditure";

const ExpensesList = ({ expenses }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? "Gastos" : "No hay gastos aún"}</h2>

      {expenses.map((expenditure) => (
        <Expenditure key={expenditure.id} expenditure={expenditure} />
      ))}
    </div>
  );
};

export default ExpensesList;
