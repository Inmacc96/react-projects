import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CustomerForm from "../components/CustomerForm";

const EditCustomer = () => {
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getCustomerAPI = async () => {
      try {
        const url = `http://localhost:4000/customers/${id}`;
        const response = await fetch(url, {});
        const result = await response.json();
        setCustomer(result);
      } catch (error) {
        console.log(error);
      }
      setLoading(!loading);
    };
    getCustomerAPI();
  }, []);

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">
        Utiliza este formulario para editar datos de un cliente
      </p>
      <CustomerForm customer={customer} loading={loading}/>
    </>
  );
};

export default EditCustomer;
