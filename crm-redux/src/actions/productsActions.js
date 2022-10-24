import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";

// Crear nuevos productos

export function createNewProductAction(product) {
  return () => {
    // Lo guardamos en la BD
    console.log(product);

    //Llamamos al reducer para que actualice el state
  };
}
