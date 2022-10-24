import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";
import clientAxios from "../config/axios";

// Crear nuevos productos

export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());
    try {
      //Insertar en la API
      await clientAxios.post("/products", product);

      //Si todo sale bien, actualizar el state
      dispatch(addProductSuccess(product));
    } catch (err) {
      console.log(err);

      //Si hay un error, cambiar el error del state
      dispatch(addProductError(true));
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

//Si el producto se guarda en la base de datos
const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

//Si hubo un error
const addProductError = (status) => ({
  type: ADD_PRODUCT_ERROR,
  payload: status,
});
