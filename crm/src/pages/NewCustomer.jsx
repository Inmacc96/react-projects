import React from 'react'
import CustomerForm from '../components/CustomerForm'

const NewCustomer = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">Llena los siguientes campos para registrar un cliente</p>
      <CustomerForm />
    </>
  )
}

export default NewCustomer