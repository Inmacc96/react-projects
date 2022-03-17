import Layout from "../components/Layout";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <Layout page="Carrito de compras">
      <h1 className="heading">Carrito</h1>
      <main className={`contenedor ${styles.content}`}>
        <div>1</div>
        <div>2</div>
      </main>
    </Layout>
  );
};

export default Cart;
