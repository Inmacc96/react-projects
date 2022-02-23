import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ExpensesList from "./components/ExpensesList";
import { generateId } from "./helpers";
import IconNewExpenditure from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [expenses, setExpenses] = useState([]);

  const handleNewExpenditure = () => {
    setModal(true);

    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  };

  const saveExpenditure = (expenditure) => {
    expenditure.id = generateId();
    setExpenses([...expenses, expenditure]);

    setAnimateModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <ExpensesList expenses={expenses} />
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
        />
      )}
    </div>
  );
}

export default App;
