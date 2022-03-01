import React from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
`;

const useSelectCurrency = (label, options) => {
  const SelectCurrency = () => (
    <>
      <Label>{label}</Label>
      <select>
        <option value="">Seleccione</option>

        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );

  return [SelectCurrency];
};

export default useSelectCurrency;
