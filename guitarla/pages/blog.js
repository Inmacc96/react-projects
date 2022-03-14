import Layout from "../components/Layout";
import BlogPost from "../components/BlogPost";

const Blog = ({ blogposts }) => {
  return (
    <Layout page="Blog">
      <main className="contenedor">
        <h2 className="heading">Blog</h2>

        <div>
          {blogposts.map((blogpost) => (
            <BlogPost key={blogpost.id} blogpost={blogpost} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = "http://localhost:1337/blogs";
  const response = await fetch(url);
  const blogposts = await response.json();
  return {
    props: {
      blogposts,
    },
  };
}

export default Blog;
