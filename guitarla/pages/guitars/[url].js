import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Guitar.module.css";

const Product = ({ guitar }) => {
  const { name, image, description, price } = guitar[0];
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

          <form className={styles.form}>
            <label>Cantidad:</label>
            <select>
              <option value="">-- Seleccione --</option>
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
