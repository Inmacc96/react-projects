import { useState } from "react";
import Header from "./components/Header";
import IconNewExpenditure from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);

  const handleNewExpenditure = () => {
    setModal(true);
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
        <div class="nuevo-gasto">
          <img
            src={IconNewExpenditure}
            alt="Icon New Expenditure"
            onClick={handleNewExpenditure}
          />
        </div>
      )}

      {modal && <p>Desde Modal</p>}
    </div>
  );
}

export default App;
