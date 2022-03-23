import { createContext } from "react";

const QuoterContext = createContext();

const QuoterProvider = ({ children }) => {
  const hola = "Hola Mundo";

  const fnHolaMundo = () => {
      console.log('Hola Mundo desde una función')
  }

  return (
    <QuoterContext.Provider value={{ hola, fnHolaMundo }}>{children}</QuoterContext.Provider>
  );
};

export { QuoterProvider };
export default QuoterContext;
