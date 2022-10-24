import { useEffect } from "react";
import Product from "./Product";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { getProductsAction } from "../actions/productsActions";


const Products = () => {
  const dispatch = useDispatch();

  //Obtener el state
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    //Consultar la API
    const getProducts = () => {
      dispatch(getProductsAction());
    };

    getProducts();
  }, []);

  return (
    <>
      <h2 className="text-center my-5">Desde products.js</h2>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0
            ? "There are no products"
            : products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Products;
