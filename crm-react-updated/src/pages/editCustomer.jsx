import { Form, useNavigate } from "react-router-dom";
import { getCustomer } from "../api/customers";
import { useLoaderData } from "react-router-dom";
import FormCustomer from "../components/FormCustomer";

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
  const navigate = useNavigate();

  const customer = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Edit Customer</h1>
      <p className="mt-3">You can then modify a customer's details</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Back to
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {/*       {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)} */}

        <Form method="POST" noValidate>
          <FormCustomer customer={customer} />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Register customer"
          />
        </Form>
      </div>
    </>
  );
};

export default EditCustomer;
