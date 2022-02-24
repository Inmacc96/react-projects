import Expenditure from "./Expenditure";

const ExpensesList = ({ expenses, setExpenditureEdit, deleteExpenditure }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{expenses.length ? "Gastos" : "No hay gastos aún"}</h2>

      {expenses.map((expenditure) => (
        <Expenditure
          key={expenditure.id}
          expenditure={expenditure}
          setExpenditureEdit={setExpenditureEdit}
          deleteExpenditure={deleteExpenditure}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
