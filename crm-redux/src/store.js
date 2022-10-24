import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// Creamos el store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
