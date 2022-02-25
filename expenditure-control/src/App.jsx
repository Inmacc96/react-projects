import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ExpensesList from "./components/ExpensesList";
import { generateId } from "./helpers";
import IconNewExpenditure from "./img/nuevo-gasto.svg";

function App() {
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) ?? []
  );

  const [budget, setBudget] = useState(
    Number(localStorage.getItem("budget")) ?? 0
  );
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [expenditureEdit, setExpenditureEdit] = useState({});

  console.log(localStorage.getItem("expenses"));

  useEffect(() => {
    if (Object.keys(expenditureEdit).length > 0) {
      handleNewExpenditure();
    }
  }, [expenditureEdit]);

  useEffect(() => {
    localStorage.setItem("budget", budget);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem("budget") ?? 0);

    if (budgetLS > 0) {
      setIsValidBudget(true);
    }
  }, []);

  const handleNewExpenditure = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const saveExpenditure = (expenditure) => {
    if (expenditure.id) {
      // Update
      const updatedExpenses = expenses.map((expenditureState) =>
        expenditureState.id == expenditure.id ? expenditure : expenditureState
      );
      setExpenses(updatedExpenses);
      setExpenditureEdit({});
    } else {
      // New expenditure
      expenditure.id = generateId();
      expenditure.date = Date.now();
      setExpenses([...expenses, expenditure]);
    }

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const deleteExpenditure = (id) => {
    const updateExpenses = expenses.filter(
      (expenditure) => expenditure.id !== id
    );
    setExpenses(updateExpenses);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <ExpensesList
              expenses={expenses}
              setExpenditureEdit={setExpenditureEdit}
              deleteExpenditure={deleteExpenditure}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconNewExpenditure}
              alt="Icon New Expenditure"
              onClick={handleNewExpenditure}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveExpenditure={saveExpenditure}
          expenditureEdit={expenditureEdit}
          setExpenditureEdit={setExpenditureEdit}
        />
      )}
    </div>
  );
}

export default App;
