import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Alert from "./Alert";

const CustomerForm = () => {
  const navigate = useNavigate();

  const newCustomerSchema = Yup.object().shape({
    customerName: Yup.string()
      .min(3, "El Nombre es muy corto")
      .max(40, "El Nombre es muy largo")
      .required("El nombre del cliente es obligatorio"),
    company: Yup.string().required("El nombre de la empresa es obligatorio"),
    email: Yup.string()
      .email("Email no válido")
      .required("El email es obligatorio"),
    phone: Yup.number()
      .positive("El número no válido")
      .integer("El número no válido")
      .typeError("El número no es válido"),
  });

  const handleSubmit = async (values) => {
    try {
      const url = "http://localhost:4000/customers";

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      const result = await response.json();
      console.log(result);
      navigate("/customers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white  mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Agregar Cliente
      </h1>

      <Formik
        initialValues={{
          customerName: "",
          company: "",
          email: "",
          phone: "",
          notes: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);

          resetForm();
        }}
        validationSchema={newCustomerSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form className="mt-10">
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="name">
                  Nombre:
                </label>
                <Field
                  id="name"
                  type="text"
                  className="block mt-2 p-3 w-full bg-gray-50"
                  placeholder="Nombre del Cliente"
                  name="customerName"
                />
                {/* Cuando pinche fuera del input (touched.customerName) y exista un error */}
                {errors.customerName && touched.customerName ? (
                  <Alert>{errors.customerName}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="company">
                  Empresa:
                </label>
                <Field
                  id="company"
                  type="text"
                  className="block mt-2 p-3 w-full bg-gray-50"
                  placeholder="Empresa del Cliente"
                  name="company"
                />
                {errors.company && touched.company ? (
                  <Alert>{errors.company}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="email">
                  E-mail:
                </label>
                <Field
                  id="email"
                  type="email"
                  className="block mt-2 p-3 w-full bg-gray-50"
                  placeholder="Email del Cliente"
                  name="email"
                />
                {errors.email && touched.email ? (
                  <Alert>{errors.email}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="phone">
                  Teléfono:
                </label>
                <Field
                  id="phone"
                  type="tel"
                  className="block mt-2 p-3 w-full bg-gray-50"
                  placeholder="Teléfono del Cliente"
                  name="phone"
                />
                {errors.phone && touched.phone ? (
                  <Alert>{errors.phone}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="notes">
                  Notas:
                </label>
                <Field
                  as="textarea"
                  id="notes"
                  type="text"
                  className="block mt-2 p-3 w-full bg-gray-50 h-40"
                  placeholder="Notas del Cliente"
                  name="notes"
                />
              </div>

              <input
                type="submit"
                value="Agregar Cliente"
                className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg "
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CustomerForm;