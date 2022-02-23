import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconNewExpenditure from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setanimateModal] = useState(false);

  const handleNewExpenditure = () => {
    setModal(true);

    setTimeout(() => {
      setanimateModal(true);
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
          setanimateModal={setanimateModal}
        />
      )}
    </div>
  );
}

export default App;
