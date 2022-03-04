import { useState, useEffect } from "react";
import Customer from "../components/Customer";

const Home = () => {
  const [customers, setCustomers] = useState([]);

  //Este es un excelente uso del useEffect: cuando quieres consultar
  // una API una vez que el componente esté listo.
  useEffect(() => {
    const getCustomersAPI = async () => {
      try {
        const url = "http://localhost:4000/customers";

        const response = await fetch(url);

        const results = await response.json();

        setCustomers(results);
      } catch (error) {
        console.log(error);
      }
    };

    getCustomersAPI();
  }, []);

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>

      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <Customer key={customer.id} customer={customer} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
