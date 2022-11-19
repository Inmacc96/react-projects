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
  action as updateCustomerAction,
} from "./pages/editCustomer";
import { action as deleteCustomerAction } from "./components/Customer";

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
        errorElement: <ErrorPage />,
      },
      {
        path: "/customer/:customerId/edit",
        element: <EditCustomer />,
        loader: editCustomerLoader,
        action: updateCustomerAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/customers/:customerId/delete",
        action: deleteCustomerAction,
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
