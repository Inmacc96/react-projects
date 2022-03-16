import Layout from "../components/Layout";
import List from "../components/List";

const Store = ({ guitars }) => {
  return (
    <Layout page="Tienda">
      <main className="contenedor">
        <List guitars={guitars} />
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitars/?_sort=price`;
  const response = await fetch(url);
  const guitars = await response.json();
  return {
    props: {
      guitars,
    },
  };
}

export default Store;
