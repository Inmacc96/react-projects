import { useState } from "react";
import "../styles/normalize.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.some((article) => article.id === product.id)) {
      const updateCart = cart.map((article) => {
        if (article.id === product.id) {
          article.amount = product.amount;
        }
        return article;
      });
      setCart(updateCart);
    } else {
      setCart([...cart, product]);
    }
  };
  return <Component {...pageProps} cart={cart} addToCart={addToCart} />;
}

export default MyApp;
