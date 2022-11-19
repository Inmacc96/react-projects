import { useNavigate, Form, redirect } from "react-router-dom";
import { deleteCustomer } from "../api/customers";

export async function action({ params }) {
  const id = params.customerId;

  await deleteCustomer(id);

  return redirect("/");
}

const Customer = ({ customer }) => {
  const navigate = useNavigate();

  const { name, email, phone, company, id } = customer;

  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{name}</p>
        <p>{company}</p>
      </td>

      <td className="p-6">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Phone: </span>
          {phone}
        </p>
      </td>

      <td className="p-6">
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 w-full text-white p-2 uppercase font-bold text-xs mt-3"
          onClick={() => {
            navigate(`/customer/${id}/edit`);
          }}
        >
          Edit
        </button>

        <Form
          method="POST"
          action={`/customers/${id}/delete`}
          onSubmit={() => {
            if (!confirm("Do you wish to delete this record?")) {
              e.preventDefault();
            }
          }}
        >
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 w-full text-white p-2 uppercase font-bold text-xs mt-3"
          >
            Delete
          </button>
        </Form>
      </td>
    </tr>
  );
};

export default Customer;
