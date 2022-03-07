import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const SeeCustomer = () => {
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(true);
  const { customerName, email, phone, company, notes } = customer;

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

  return loading ? (
    <Spinner />
  ) : Object.keys(customer).length === 0 ? (
    <p>No Hay Resultados</p>
  ) : (
    <div>
      <h1 className="font-black text-4xl text-blue-900">
        Ver Cliente: {customerName}
      </h1>
      <p className="mt-3">Información del cliente</p>

      {customerName && (
        <p className="text-4xl text-gray-500 mt-10">
          <span className="text-gray-800 uppercase font-bold">Cliente:</span>{" "}
          {customerName}
        </p>
      )}
      {email && (
        <p className="text-2xl text-gray-500 mt-4">
          <span className="text-gray-800 uppercase font-bold">Email:</span>{" "}
          {email}
        </p>
      )}
      {phone && (
        <p className="text-2xl text-gray-500 mt-4">
          <span className="text-gray-800 uppercase font-bold">Teléfono:</span>{" "}
          {phone}
        </p>
      )}
      {company && (
        <p className="text-2xl text-gray-500 mt-4">
          <span className="text-gray-800 uppercase font-bold">Empresa:</span>{" "}
          {company}
        </p>
      )}
      {notes && (
        <p className="text-2xl text-gray-500 mt-4">
          <span className="text-gray-800 uppercase font-bold">Notas:</span>{" "}
          {notes}
        </p>
      )}
    </div>
  );
};

export default SeeCustomer;
