import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODUCTS_ERROR,
} from "../types";
import clientAxios from "../config/axios";
import Swal from "sweetalert2";

// Crear nuevos productos
export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());
    try {
      //Insertar en la API
      await clientAxios.post("/products", product);

      //Si todo sale bien, actualizar el state
      dispatch(addProductSuccess(product));

      //Alerta
      Swal.fire("Success", "The product is added correctly", "success");
    } catch (err) {
      console.log(err);

      //Si hay un error, cambiar el error del state
      dispatch(addProductError(true));

      //Alerta de error
      Swal.fire({
        icon: "error",
        title: "There was an error",
        text: "There was an error, please try again",
      });
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

// Función que descarga los productos de la base de datos
export function getProductsAction() {
  return async (dispatch) => {
    dispatch(downloadProducts());

    try {
      const { data } = await clientAxios.get("/products");

      dispatch(downloadProductSuccess(data));
    } catch (err) {
      console.log(err);
      dispatch(downloadProductError());
    }
  };
}

const downloadProducts = () => ({
  type: START_DOWNLOAD_PRODUCTS,
  payload: true,
});

const downloadProductSuccess = (products) => ({
  type: DOWNLOAD_PRODUCTS_SUCCESS,
  payload: products,
});

const downloadProductError = () => ({
  type: DOWNLOAD_PRODUCTS_ERROR,
  payload: true,
});
