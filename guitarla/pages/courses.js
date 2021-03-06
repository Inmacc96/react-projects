import Layout from "../components/Layout";
import CoursesList from "../components/CoursesList";

const Courses = ({ courses, addToCart }) => {
  return (
    <Layout page="Cursos de guitarras">
      <main className="contenedor">
        <CoursesList courses={courses} addToCart={addToCart} />
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
