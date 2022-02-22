import React from "react";
import NewBudget from "./NewBudget";
import BudgetControl from "./BudgetControl";

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {isValidBudget ? (
        <BudgetControl budget={budget}/>
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
