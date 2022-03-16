import Layout from "../components/Layout";
import List from "../components/List";

const Home = ({ guitars }) => {
  return (
    <Layout page="Inicio">
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <List guitars={guitars} />
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

export default Home;
