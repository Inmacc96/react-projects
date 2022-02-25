import Expenditure from "./Expenditure";

const ExpensesList = ({
  expenses,
  setExpenditureEdit,
  deleteExpenditure,
  filter,
  filteredExpenses,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filter ? (
        <>
          <h2>{filteredExpenses.length ? "Gastos" : "No hay gastos en esta categoría"}</h2>
          {filteredExpenses.map((expenditure) => (
            <Expenditure
              key={expenditure.id}
              expenditure={expenditure}
              setExpenditureEdit={setExpenditureEdit}
              deleteExpenditure={deleteExpenditure}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{expenses.length ? "Gastos" : "No hay gastos aún"}</h2>
          {expenses.map((expenditure) => (
            <Expenditure
              key={expenditure.id}
              expenditure={expenditure}
              setExpenditureEdit={setExpenditureEdit}
              deleteExpenditure={deleteExpenditure}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpensesList;
