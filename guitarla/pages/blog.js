import Layout from "../components/Layout";
import BlogList from "../components/BlogList";

const Blog = ({ blogposts }) => {
  return (
    <Layout page="Blog">
      <main className="contenedor">
        <BlogList blogposts={blogposts} />
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/blogs/?_sort=createdAt:desc`;
  const response = await fetch(url);
  const blogposts = await response.json();
  return {
    props: {
      blogposts,
    },
  };
}

export default Blog;
