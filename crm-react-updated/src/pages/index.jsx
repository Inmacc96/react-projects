import { useLoaderData } from "react-router-dom";

export function loader() {
  const customers = [
    {
      id: 1,
      name: "Juan",
      phone: 102013313,
      email: "juan@juan.com",
      company: "Codigo Con Juan",
    },
    {
      id: 2,
      name: "Karen",
      phone: 138198313,
      email: "karen@juan.com",
      company: "Codigo Con Juan",
    },
    {
      id: 3,
      name: "Josue",
      phone: 31983913,
      email: "josue@juan.com",
      company: "Codigo Con Juan",
    },
    {
      id: 4,
      name: "Miguel",
      phone: 319381983,
      email: "miguel@juan.com",
      company: "Codigo Con Juan",
    },
    {
      id: 5,
      name: "Pedro",
      phone: 1398198938,
      email: "pedro@juan.com",
      company: "Codigo Con Juan",
    },
  ];
  return customers;
}

const Index = () => {
  const data = useLoaderData();

  console.log(data);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Customers</h1>
      <p className="mt-3">Manage yours customers</p>
    </>
  );
};

export default Index;
