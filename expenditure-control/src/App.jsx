import { useState } from "react";

import Header from "./components/Header";

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
    </div>
  );
}

export default App;
