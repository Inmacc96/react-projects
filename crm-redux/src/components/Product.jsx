import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

//Redux
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../actions/productsActions";

const Product = ({ product }) => {
  const { name, price, id } = product;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //  Confirmar si desea eliminarlo
  const confirmDeleteProduct = (id) => {
    //Preguntar al usuario
    Swal.fire({
      title: "Are you sure?",
      text: "A product that is deleted cannot be recovered",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //Pasarlo al action
        dispatch(deleteProductAction(id));
      }
    });
  };

  const redirectEdit = (product) => {
    navigate(`/products/edit/${product.id}`);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">$ {price}</span>
      </td>
      <td className="actions">
        <button
          type="button"
          onClick={() => redirectEdit(product)}
          className="btn btn-primary mr-2"
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmDeleteProduct(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Product;
