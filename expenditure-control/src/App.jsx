import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ExpensesList from "./components/ExpensesList";
import { generateId } from "./helpers";
import IconNewExpenditure from "./img/nuevo-gasto.svg";

function App() {
  const [expenses, setExpenses] = useState([]);

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [expenditureEdit, setExpenditureEdit] = useState({});

  useEffect(() => {
    if (Object.keys(expenditureEdit).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimateModal(true);
      }, 500);
    }
  }, [expenditureEdit]);

  const handleNewExpenditure = () => {
    setModal(true);
    setExpenditureEdit({});

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
        />
      )}
    </div>
  );
}

export default App;
