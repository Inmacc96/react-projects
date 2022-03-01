import React from "react";
import styled from "@emotion/styled";
import useSelectCurrency from "../Hooks/useSelectCurrency";
import { currencies } from "../data/currencies";

const SubmitInput = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #7a70fe;
    cursor: pointer;
  }
`;

const Form = () => {
  const [SelectCurrency] = useSelectCurrency("Elige tu Moneda", currencies);

  return (
    <form>
      <SelectCurrency />

      <SubmitInput type="submit" value="Cotizar" />
    </form>
  );
};

export default Form;
