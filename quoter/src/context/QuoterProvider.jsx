import { useState, createContext } from "react";

const QuoterContext = createContext();

const QuoterProvider = ({ children }) => {
  const [data, setData] = useState({
    brand: '',
    year: '',
    plan:''
  })

  const handleChangeData = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  };

  return (
    <QuoterContext.Provider value={{ data, handleChangeData }}>
      {children}
    </QuoterContext.Provider>
  );
};

export { QuoterProvider };
export default QuoterContext;
