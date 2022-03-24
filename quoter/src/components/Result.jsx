import useQuoter from "../hooks/useQuoter";

const Result = () => {
  const { result } = useQuoter();
  if (result === 0) return null;
  return <div> {result} </div>;
};

export default Result;
