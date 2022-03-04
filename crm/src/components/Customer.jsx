import {useNavigate} from "react-router-dom";

const Customer = ({ customer }) => {
    const navigate = useNavigate();
  const { customerName, email, phone, company, id } = customer;
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">{customerName}</td>
      <td className="p-3">
        <p>
          {" "}
          <span className="text-gray-800 uppercase font-bold">Email:</span>{" "}
          {email}
        </p>
        <p>
          {" "}
          <span className="text-gray-800 uppercase font-bold">Tel:</span>{" "}
          {phone}
        </p>
      </td>
      <td className="p-3">{company}</td>
      <td className="p-3">
        <button
          type="button"
          className="bg-yellow-500 hover:bg-yellow-600 w-full text-white p-2 uppercase font-bold text-xs mt-3"
          onClick={()=>navigate(`/customers/${id}`)}
        >
          Ver
        </button>
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 w-full text-white p-2 uppercase font-bold text-xs mt-3"
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 w-full text-white p-2 uppercase font-bold text-xs mt-3"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Customer;
