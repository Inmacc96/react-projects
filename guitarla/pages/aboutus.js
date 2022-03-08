import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <Layout page="Sobre nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.container}>
          <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="Imagen sobre nosotros"/>

          <div>
            <p>
              Velit ut commodo occaecat nulla incididunt enim elit tempor non.
              Irure consectetur minim laborum aliqua do est amet nostrud minim
              eiusmod quis mollit eu. Nostrud veniam ea adipisicing mollit
              consequat labore amet voluptate et consequat mollit. Adipisicing
              consectetur nisi aute culpa magna. Nisi ad voluptate id fugiat
              duis tempor est. Ullamco culpa in et nulla esse duis.
            </p>
            <p>
              Velit ut commodo occaecat nulla incididunt enim elit tempor non.
              Irure consectetur minim laborum aliqua do est amet nostrud minim
              eiusmod quis mollit eu. Nostrud veniam ea adipisicing mollit
              consequat labore amet voluptate et consequat mollit. Adipisicing
              consectetur nisi aute culpa magna. Nisi ad voluptate id fugiat
              duis tempor est. Ullamco culpa in et nulla esse duis. 
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutUs;
