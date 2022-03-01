import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
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

const Form = ({ setCurrencies }) => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);

  const [currency, SelectCurrency] = useSelectCurrency(
    "Elige tu Moneda",
    currencies
  ); // No tiene por qué llamarse igual a lo que devuelve useSelectCurrency

  const [cryptocurrency, SelectCryptoCurrency] = useSelectCurrency(
    "Elige tu Criptomoneda",
    cryptos
  );

  useEffect(() => {
    const consultAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const response = await fetch(url);
      const result = await response.json();

      const cryptosArray = result.Data.map((crypto) => {
        const cryptos = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };

        return cryptos;
      });
      setCryptos(cryptosArray);
    };
    consultAPI();
  }, []); //Cuando el componente esté listo, va a llamar a nuestr API

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([currency, cryptocurrency].includes("")) {
      setError(true);
      return;
    }

    setError(false);
    setCurrencies({ currency, cryptocurrency });
  };

  return (
    <>
      {error && <Error>{"Todos los campos son obligatorios"}</Error>}
      <form onSubmit={handleSubmit}>
        <SelectCurrency />
        <SelectCryptoCurrency />

        <SubmitInput type="submit" value="Cotizar" />
      </form>
    </>
  );
};

export default Form;
