import Layout from "../components/Layout";
import List from "../components/List";

const Home = ({ guitars, courses }) => {
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
  const urlGuitars = `${process.env.API_URL}/guitars`;
  const urlCourses = `${process.env.API_URL}/courses`;

  const [resGuitars, resCourses] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlCourses),
  ]);

  const [guitars, courses] = await Promise.all([
    resGuitars.json(),
    resCourses.json(),
  ]);

  return {
    props: {
      guitars,
      courses,
    },
  };
}

export default Home;
