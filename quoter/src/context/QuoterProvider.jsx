import { useState, createContext } from "react";
import {
  getYearDifference,
  calculateBrand,
  calculatePlan,
  formatMoney,
} from "../helpers";

const QuoterContext = createContext();

const QuoterProvider = ({ children }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState("");
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const insuranceQuote = () => {
    // A basis
    let result = 2000;

    // Get year diference
    const difference = getYearDifference(data.year);

    // Subtract 3% for each year.
    result -= (difference * 3 * result) / 100;

    // European 30%
    // American 15%
    // Asian 5%
    result *= calculateBrand(data.brand);

    // Basic 20%
    // Complete 50%
    result *= calculatePlan(data.plan);

    // Format money
    result = formatMoney(result);

    setLoading(true);

    setTimeout(() => {
      setResult(result);
      setLoading(false);
    }, 3000);
  };

  return (
    <QuoterContext.Provider
      value={{
        data,
        handleChangeData,
        error,
        setError,
        insuranceQuote,
        result,
        loading
      }}
    >
      {children}
    </QuoterContext.Provider>
  );
};

export { QuoterProvider };
export default QuoterContext;
