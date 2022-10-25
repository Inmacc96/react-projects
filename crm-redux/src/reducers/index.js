import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  products: productsReducer,
  alert: alertReducer
});
