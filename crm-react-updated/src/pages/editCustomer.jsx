import { getCustomer } from "../api/customers";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  // Obtener los datos del cliente

  const customer = await getCustomer(params.customerId);

  // Lanzar error en caso de que no exista el cliente
  // Detiene la ejecución del código y marca el error
  if (Object.values(customer).length == 0) {
    throw new Response("", {
      status: 404,
      statusText: "The client you request does not exist",
    });
  }
  return customer;
}

const EditCustomer = () => {
  const customer = useLoaderData();

  return <div>EditCustomer</div>;
};

export default EditCustomer;
