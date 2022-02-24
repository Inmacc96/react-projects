import Expenditure from "./Expenditure";

const ExpensesList = ({ expenses, setExpenditureEdit }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? "Gastos" : "No hay gastos aún"}</h2>

      {expenses.map((expenditure) => (
        <Expenditure key={expenditure.id} expenditure={expenditure} setExpenditureEdit={setExpenditureEdit} />
      ))}
    </div>
  );
};

export default ExpensesList;
