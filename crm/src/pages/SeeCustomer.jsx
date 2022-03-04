import { useParams } from "react-router-dom";

const SeeCustomer = () => {
  const { id } = useParams();

  return <div>SeeCustomer</div>;
};

export default SeeCustomer;
