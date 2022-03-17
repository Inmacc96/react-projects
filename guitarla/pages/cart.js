import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Cart.module.css";

const Cart = ({ cart, updateAmount }) => {
  return (
    <Layout page="Carrito de compras">
      <h1 className="heading">Carrito</h1>
      <main className={`contenedor ${styles.content}`}>
        <div className={styles.cart}>
          {cart.length === 0
            ? "Carrito Vacío"
            : cart.map((product) => (
                <div key={product.id} className={styles.product}>
                  <div>
                    <Image
                      layout="responsive"
                      width={250}
                      height={500}
                      src={product.image}
                      alt={product.name}
                    />
                  </div>

                  <div>
                    <p className={styles.name}>{product.name}</p>
                    <div className={styles.amount}>
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
                    </div>
                    <p className={styles.price}>
                      $<span>{product.price}</span>
                    </p>
                    <p className={styles.subtotal}>
                      Subtotal: $<span>{product.price * product.amount}</span>
                    </p>
                  </div>
                </div>
              ))}
        </div>
        <div>2</div>
      </main>
    </Layout>
  );
};

export default Cart;
