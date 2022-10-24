import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODUCTS_ERROR,
  GET_PRODUCT_DELETE,
  DELETED_PRODUCT_SUCCESS,
  DELETED_PRODUCT_ERROR,
  GET_PRODUCT_EDIT,
  START_PRODUCT_EDITION,
  EDITED_PRODUCT_SUCCESS,
  EDITED_PRODUCT_ERROR,
} from "../types";

// Cada reducer tiene su propio state
const initialState = {
  products: [],
  error: null,
  loading: false,
  productDelete: null,
  productEdit: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
    case START_DOWNLOAD_PRODUCTS:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };
    case ADD_PRODUCT_ERROR:
    case DOWNLOAD_PRODUCTS_ERROR:
    case DELETED_PRODUCT_ERROR:
    case EDITED_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DOWNLOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case GET_PRODUCT_DELETE:
      return {
        ...state,
        productDelete: action.payload,
      };
    case DELETED_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== state.deletedProduct
        ),
        productDelete: null,
      };
    case GET_PRODUCT_EDIT:
    case START_PRODUCT_EDITION:
      return {
        ...state,
        productEdit: action.payload,
      };
    case EDITED_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === state.productEdit.id ? state.productEdit : product
        ),
        productEdit: null,
      };
    default:
      return state;
  }
}
