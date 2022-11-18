import { useLoaderData } from "react-router-dom";
import Customer from "../components/Customer";
import { getCustomers } from "../api/customers";

export function loader() {
  const customers = getCustomers();

  return customers;
}

const Index = () => {
  const customers = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Customers</h1>
      <p className="mt-3">Manage yours customers</p>

      {customers.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Customer</th>
              <th className="p-2">Info</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <Customer key={customer.id} customer={customer} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">There are no customers yet</p>
      )}
    </>
  );
};

export default Index;
