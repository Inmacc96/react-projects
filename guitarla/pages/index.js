import Layout from "../components/Layout";
import List from "../components/List";
import Course from "../components/Course";

const Home = ({ guitars, course }) => {
  return (
    <Layout page="Inicio">
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        <List guitars={guitars} />
      </main>
      <Course course={course}/>
    </Layout>
  );
};

export async function getServerSideProps() {
  const urlGuitars = `${process.env.API_URL}/guitars`;
  const urlCourse = `${process.env.API_URL}/course`;

  const [resGuitars, resCourse] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlCourse),
  ]);

  const [guitars, course] = await Promise.all([
    resGuitars.json(),
    resCourse.json(),
  ]);

  return {
    props: {
      guitars,
      course,
    },
  };
}

export default Home;
