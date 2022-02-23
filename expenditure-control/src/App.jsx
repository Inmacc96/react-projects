import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { generateId } from "./helpers";
import IconNewExpenditure from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimiateModal] = useState(false);

  const [expenses, setExpenses] = useState([]);

  const handleNewExpenditure = () => {
    setModal(true);

    setTimeout(() => {
      setAnimiateModal(true);
    }, 500);
  };

  const saveExpenditure = (expenditure) => {
    expenditure.id = generateId();
    setExpenses([...expenses, expenditure]);
    
    setAnimiateModal(false);
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
        <div className="nuevo-gasto">
          <img
            src={IconNewExpenditure}
            alt="Icon New Expenditure"
            onClick={handleNewExpenditure}
          />
        </div>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimiateModal={setAnimiateModal}
          saveExpenditure={saveExpenditure}
        />
      )}
    </div>
  );
}

export default App;
