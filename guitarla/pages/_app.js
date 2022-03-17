import { useState, useEffect } from "react";
import "../styles/normalize.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) ?? [];
    setCart(cartLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  const updateAmount = (product) => {
    const updateCart = cart.map((article) => {
      if (article.id === product.id) {
        article.amount = product.amount;
      }
      return article;
    });
    setCart(updateCart);
  };
  return (
    <Component
      {...pageProps}
      cart={cart}
      addToCart={addToCart}
      updateAmount={updateAmount}
    />
  );
}

export default MyApp;
