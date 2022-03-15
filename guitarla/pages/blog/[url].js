import Image from "next/image";
import Layout from "../../components/Layout";
import { formatDate } from "../../helpers";
import styles from "../../styles/BlogPost.module.css";

const BlogPost = ({ blogpost }) => {
  const { Content, image, published_at, title } = blogpost[0];
  console.log(blogpost);
  return (
    <Layout page={title}>
      <main className="contenedor">
        <h1 className="heading">{title}</h1>
        <article className={styles.blogpost}>
          <Image
            layout="responsive"
            width={800}
            height={600}
            src={image.url}
            alt={`Entrada ${title}`}
          />

          <div className={styles.container}>
            <p className={styles.date}>{formatDate(published_at)}</p>
            <p className={styles.text}>{Content}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

/* export async function getServerSideProps({ query: {id} }) {
    const url = `${process.env.API_URL}/blogs/${id}`;
    const response = await fetch(url);
    const blogpost = await response.json();
  return {
    props: {blogpost},
  };
} */

export async function getStaticPaths() {
  //Esta función va a identificar que páginas va a construir y va a identificar
  // y construir los enlaces.
  //Identifica todas la entradas
  const url = `${process.env.API_URL}/blogs`;
  const response = await fetch(url);
  const blogposts = await response.json();

  const paths = blogposts.map((blogpost) => ({
    params: { url: blogpost.url },
  }));

  return {
    paths,
    fallback: false,
    //false: Te construye todas las rutas
    //true: Te las construye a medida de que el usuario vaya solicitando
  };
}

export async function getStaticProps({ params: { url } }) {
  // Esta funcion es la que se va a traer la información y la va a colocar dentro de todos los enlaces
  // Identifica cada entrada
  const urlBlog = `${process.env.API_URL}/blogs?url=${url}`;
  const response = await fetch(urlBlog);
  const blogpost = await response.json();
  return {
    props: { blogpost },
  };
}

export default BlogPost;
