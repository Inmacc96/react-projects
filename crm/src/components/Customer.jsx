import React from "react";

const Customer = ({ customer }) => {
  return (
    <div>
      <h1>{customer.customerName}</h1>
    </div>
  );
};

export default Customer;
