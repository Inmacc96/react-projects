import { createContext } from "react";

const QuoterContext = createContext();

const QuoterProvider = ({ children }) => {
  return <QuoterContext.Provider value={{}}>{children}</QuoterContext.Provider>;
};

export { QuoterProvider };
export default QuoterContext;
