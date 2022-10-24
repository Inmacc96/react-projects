import { useDispatch, useSelector } from "react-redux";
// useDispatch: Para mandar a llamar las acciones de Redux
// useSelector:  Para acceder al state dentro del componente

//Actions de REDUX
import { createNewProductAction } from "../actions/productsActions";

const NewProduct = () => {

  //Utilizar usedispatch y te duelve una función
  const dispatch = useDispatch();

  //Mandar llamar el action de productsAction
  const addProduct = () => {
    //dispatch manda a ejecutar createNewProductAction
    dispatch(createNewProductAction())
  }

  //Cuando el usuario haga submit
  const handleSubmit = e => {
    e.preventDefault();

    //Validar formulario

    // Si no hay errores

    //Crear el nuevo producto
    addProduct()
  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Add New Product
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                  name="product-name"
                />
              </div>

              <div className="form-group">
                <label>Product Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product Price"
                  name="product-price"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-bock w-100"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
