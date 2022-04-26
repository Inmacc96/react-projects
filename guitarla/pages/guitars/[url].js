import { useState } from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import { toast } from "react-toastify";
import styles from "../../styles/Guitar.module.css";

const Product = ({ guitar, addToCart }) => {
  const [amount, setAmount] = useState(1);
  const { name, image, description, price, id } = guitar[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (amount < 1) {
      alert("Cantidad no válida");
      return;
    } else {
      //Add product to cart
      const guitarSelected = {
        id,
        image: image.url,
        name,
        price,
        amount,
      };

      addToCart(guitarSelected);
      toast.success('Agregado correctamente')
    }
  };
  return (
    <Layout page={`Guitarra ${name}`}>
      <div className={styles.guitar}>
        <Image
          layout="responsive"
          width={180}
          height={350}
          src={image.url}
          alt={`Imagen Guitarra ${name}`}
        />
        <div className={styles.container}>
          <h3>{name}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>${price}</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label>Cantidad:</label>
            <select
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            >
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>

            <input type="submit" value="Agregar al Carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const urlGuitar = `${process.env.API_URL}/guitars?url=${url}`;
  const response = await fetch(urlGuitar);
  const guitar = await response.json();
  return {
    props: {
      guitar,
    },
  };
}
export default Product;
