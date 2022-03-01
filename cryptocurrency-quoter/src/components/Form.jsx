import {useEffect} from "react";
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
  const [currency, SelectCurrency] = useSelectCurrency(
    "Elige tu Moneda",
    currencies
  ); // No tiene por qué llamarse igual a lo que devuelve useSelectCurrency

  useEffect(()=> {
    const consultAPI = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        const response = await fetch(url)
        const result = await response.json()

        console.log(result.Data)

    }
    consultAPI();
  },[]) //Cuando el componente esté listo, va a llamar a nuestr API

  return (
    <form>
      <SelectCurrency />

      <SubmitInput type="submit" value="Cotizar" />
    </form>
  );
};

export default Form;
