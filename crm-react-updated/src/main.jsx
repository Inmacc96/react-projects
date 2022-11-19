import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Index, { loader as customersLoader } from "./pages/index";
import NewCustomer, { action as newCustomerAction } from "./pages/newCustomer";
import ErrorPage from "./components/ErrorPage";
import EditCustomer, {
  loader as editCustomerLoader,
} from "./pages/editCustomer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: customersLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/customer/new",
        element: <NewCustomer />,
        action: newCustomerAction,
      },
      {
        path: "/customer/:customerId/edit",
        element: <EditCustomer />,
        loader: editCustomerLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
  ,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
