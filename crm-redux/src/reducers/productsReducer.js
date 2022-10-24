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
} from "../types";

// Cada reducer tiene su propio state
const initialState = {
  products: [],
  error: null,
  loading: false,
  deletedProduct: null,
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
        deletedProduct: action.payload,
      };
    default:
      return state;
  }
}
