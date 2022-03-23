import { useState, createContext } from "react";

const QuoterContext = createContext();

const QuoterProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const changeState = () => {
      setModal(!modal)
  }

  return <QuoterContext.Provider value={{modal, changeState}}>{children}</QuoterContext.Provider>;
};

export { QuoterProvider };
export default QuoterContext;
