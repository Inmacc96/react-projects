import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";

// Crear nuevos productos

export function createNewProductAction(product) {
  return (dispatch) => {
    dispatch(addProduct());
    try {
      dispatch(addProductSuccess(product));
    } catch (err) {
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
