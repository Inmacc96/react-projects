import Layout from "../components/Layout";
import List from "../components/List";
import Course from "../components/Course";
import BlogList from "../components/BlogList";

const Home = ({ guitars, course, blogposts }) => {
  return (
    <Layout page="Inicio" guitar={guitars[3]}>
      <main className="contenedor">
        <List guitars={guitars} />
      </main>
      <Course course={course} />
      <section className="contenedor">
        <BlogList blogposts={blogposts} />
      </section>
    </Layout>
  );
};

export async function getServerSideProps() {
  const urlGuitars = `${process.env.API_URL}/guitars`;
  const urlCourse = `${process.env.API_URL}/course`;
  const urlBlogPosts = `${process.env.API_URL}/blogs/?_limit=3&_sort=createdAt:desc`;

  const [resGuitars, resCourse, resBlogPosts] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlCourse),
    fetch(urlBlogPosts),
  ]);

  const [guitars, course, blogposts] = await Promise.all([
    resGuitars.json(),
    resCourse.json(),
    resBlogPosts.json(),
  ]);

  return {
    props: {
      guitars,
      course,
      blogposts,
    },
  };
}

export default Home;
