import Layout from "../components/Layout";
import Image from "next/image";
import { useState, useEffect } from "react";
import { formatDate } from "../helpers";
import styles from "../styles/Cart.module.css";

const Cart = ({ cart, updateAmount, deleteProduct }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalValue = cart.reduce(
      (total, product) => total + product.amount * product.price,
      0
    );
    setTotal(totalValue);
  }, [cart]);

  return (
    <Layout page="Carrito de compras">
      <h1 className="heading">Carrito</h1>
      <main className={`contenedor ${styles.content}`}>
        <div className={styles.cart}>
          <h2>Artículos</h2>
          {cart.length === 0
            ? "Carrito Vacío"
            : cart.map((product) => (
                <div key={product.id} className={styles.product}>
                  <div>
                    <Image
                      layout="responsive"
                      width={product.start_date ? 700 : 250}
                      height={product.start_date ? 700 : 500}
                      src={product.image}
                      alt={product.name}
                    />
                  </div>

                  <div>
                    <p className={styles.name}>{product.name}</p>
                    <div className={styles.amount}>
                      {product.start_date ? (
                        <p className={styles.dates}>
                         {formatDate(product.start_date)} / {formatDate(product.end_date)}
                        </p>
                      ) : (
                        <>
                          <p>Cantidad:</p>
                          <select
                            value={product.amount}
                            className={styles.select}
                            onChange={(e) =>
                              updateAmount({
                                id: product.id,
                                amount: e.target.value,
                              })
                            }
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                          </select>
                        </>
                      )}
                    </div>
                    <p className={styles.price}>
                      $<span>{product.price}</span>
                    </p>
                    <p className={styles.subtotal}>
                      Subtotal: $<span>{product.price * product.amount}</span>
                    </p>
                  </div>

                  <button
                    type="button"
                    className={styles.delete}
                    onClick={() => deleteProduct(product.id)}
                  >
                    X
                  </button>
                </div>
              ))}
        </div>
        <div className={styles.summary}>
          {total > 0 ? (
            <>
              <h3>Resumen del Pedido</h3>
              <p className={styles.price}>Total a pagar: ${total}</p>
            </>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Cart;
