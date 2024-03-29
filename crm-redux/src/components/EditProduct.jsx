import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editProductAction } from "../actions/productsActions";

const EditProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  //Producto a editar
  const productEdit = useSelector((state) => state.products.productEdit);

  useEffect(() => {
    if (productEdit) {
      setProductName(productEdit.name);
      setPrice(productEdit.price);
    }
  }, [productEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editProductAction({ name: productName, price, id: productEdit.id }));

    navigate("/")
  };

  if (!productEdit) return;
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Edit New Product
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                  name="product-name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
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
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
