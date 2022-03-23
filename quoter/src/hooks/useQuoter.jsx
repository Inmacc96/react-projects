import { useContext } from "react";
import QuoterContext from "../context/QuoterProvider";

const useQuoter = () => {
  return useContext(QuoterContext);
};

export default useQuoter;
