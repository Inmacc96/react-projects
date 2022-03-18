import Layout from "../components/Layout";

const Courses = ({courses}) => {
  return (
    <Layout page="Cursos de guitarras">
      <main className="contenedor">
        <h1 className="heading">Cursos</h1>
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/courses-guitars`;
    const response = await fetch(url);
    const courses = await response.json();
    return {
      props: {
        courses,
      },
    };
  }

export default Courses;
