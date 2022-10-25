import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// useDispatch: Para mandar a llamar las acciones de Redux
// useSelector:  Para acceder al state dentro del componente

//Actions de REDUX
import { createNewProductAction } from "../actions/productsActions";
import { displayAlertAction } from "../actions/alertAction";

const NewProduct = () => {
  //state locales del componente
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  //Utilizar usedispatch y te devuelve una función
  const dispatch = useDispatch();

  //Acceder al state del store
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const alert = useSelector((state) => state.alert.alert);

  //Mandar llamar el action de productsAction
  const addProduct = (product) => {
    //dispatch manda a ejecutar createNewProductAction
    dispatch(createNewProductAction(product));
  };

  //Cuando el usuario haga submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar formulario
    if (name.trim() === "" || price <= 0) {
      const alert = {
        msg: "All fields are required",
        classes: "alert alert-danger text-center text-uppercase p3",
      };
      dispatch(displayAlertAction(alert));

      return;
    }

    // Si no hay errores, Crear el nuevo producto
    addProduct({
      name,
      price,
    });

    //Redireccionar a home
    navigate("/");
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Add New Product
            </h2>

            {alert && <p className={alert.classes}>{alert.msg}</p>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                  name="product-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Product Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product Price"
                  name="product-price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-bock w-100"
              >
                Add Product
              </button>
            </form>

            {loading && <p>Loading...</p>}

            {error && (
              <p className="alert alert-danger p-2 mt-4 text-center">
                There was an error
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
