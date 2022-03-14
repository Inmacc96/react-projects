import Image from "next/image";
import Layout from "../../components/Layout";
import { formatDate } from "../../helpers";

const BlogPost = ({ blogpost }) => {
  const { Content, image, published_at, title } = blogpost;
  console.log(blogpost);
  return (
    <Layout page={`${title}`}>
      <main className="contenedor">
        <h1 className="heading">{title}</h1>
        <article>
          <Image
            layout="responsive"
            width={800}
            height={600}
            src={image.url}
            alt={`Entrada ${title}`}
          />

          <div>
            <p>{formatDate(published_at)}</p>
            <p>{Content}</p>
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
    params: { id: blogpost.id },
  }));

  return {
    paths,
    fallback: false,
    //false: Te construye todas las rutas
    //true: Te las construye a medida de que el usuario vaya solicitando
  };
}

export async function getStaticProps({ params: { id } }) {
  // Esta funcion es la que se va a traer la información y la va a colocar dentro de todos los enlaces
  // Identifica cada entrada
  const url = `${process.env.API_URL}/blogs/${id}`;
  const response = await fetch(url);
  const blogpost = await response.json();
  return {
    props: { blogpost },
  };
}

export default BlogPost;
