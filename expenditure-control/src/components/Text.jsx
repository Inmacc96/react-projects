import React from "react";

const Text = ({ children, type }) => {
  return <div className={`alerta ${type}`}>{children}</div>;
};

export default Text;
