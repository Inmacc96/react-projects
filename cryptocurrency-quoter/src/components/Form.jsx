import React from "react";
import styled from "@emotion/styled";
import useSelectCurrencies from "../Hooks/useSelectCurrencies";

const SubmitInput = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color .3s ease;
  &:hover{
      background-color: #7a70fe;
      cursor:pointer;
  }
`;

const Form = () => {

    const [selectCurrencies] = useSelectCurrencies();

    selectCurrencies();

  return (
    <form>
      <SubmitInput type="submit" value="Cotizar" />
    </form>
  );
};

export default Form;
