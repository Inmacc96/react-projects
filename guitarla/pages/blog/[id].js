const BlogPost = ({ blogpost }) => {
  return (
    <div>
      <h1>Desde Entrada blog</h1>
    </div>
  );
};

/* export async function getServerSideProps({ query: {id} }) {
    const url = `http://localhost:1337/blogs/${id}`;
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
  const url = "http://localhost:1337/blogs";
  const response = await fetch(url);
  const blogposts = await response.json();

  const paths = blogposts.map((blogpost) => ({
    params: { id: blogpost.id },
  }));

  return {
    paths,
    fallback: false
    //false: Te construye todas las rutas
    //true: Te las construye a medida de que el usuario vaya solicitando
  };
}

export async function getStaticProps({ params: { id } }) {
  // Esta funcion es la que se va a traer la información y la va a colocar dentro de todos los enlaces
  // Identifica cada entrada
  const url = `http://localhost:1337/blogs/${id}`;
  const response = await fetch(url);
  const blogpost = await response.json();
  return {
    props: { blogpost },
  };
}

export default BlogPost;
