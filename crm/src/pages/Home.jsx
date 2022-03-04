import { useState, useEffect } from "react";

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

  return <div>Home</div>;
};

export default Home;
