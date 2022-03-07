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
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
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
      {customer?.customerName ? (
        <CustomerForm customer={customer} loading={loading} />
      ) : (
        <div className="font-bold mt-5 text-center text-2xl text-gray-600">
          Cliente ID no válido
        </div>
      )}
    </>
  );
};

export default EditCustomer;
