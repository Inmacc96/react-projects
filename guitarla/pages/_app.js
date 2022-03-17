import { useState } from "react";
import "../styles/normalize.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return <Component {...pageProps} cart={cart} addToCart={addToCart} />;
}

export default MyApp;
