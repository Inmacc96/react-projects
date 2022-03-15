import Layout from "../components/Layout";

const Store = ({ guitars }) => {
  return (
    <Layout page="Tienda">
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitars`;
  const response = await fetch(url);
  const guitars = await response.json();
  return {
    props: {
      guitars,
    },
  };
}

export default Store;
