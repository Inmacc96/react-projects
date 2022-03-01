import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Form from "./components/Form";
import CryptoImage from "./img/imagen-criptos.png";

const Container = styled.div`
  max-width: 900px;
  margin: 0px auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  } ;
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    //Añade un elemento justo despues del h1
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {
  const [currencies, setCurrencies] = useState({});
  const [quotation, setQuotation] = useState({});

  useEffect(() => {
    if (Object.keys(currencies).length > 0) {
      const quoteCrypto = async () => {
        const {currency, cryptocurrency} = currencies;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;
        const response = await fetch(url);
        const result = await response.json();

        setQuotation(result.DISPLAY[cryptocurrency][currency])
      };
      quoteCrypto();
    }
  }, [currencies]);

  return (
    <Container>
      <Image src={CryptoImage} alt="Cryptocurrency image" />

      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>

        <Form setCurrencies={setCurrencies} />
      </div>
    </Container>
  );
}

export default App;
