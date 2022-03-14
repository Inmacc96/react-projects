import Link from "next/link";
import Image from "next/image";
import { formatDate } from "../helpers"; // Al llamarse el archivo index.js, solo es suficiente con el nombre de la carpeta

const BlogPost = ({ blogpost }) => {
  const { title, summary, image, published_at, id } = blogpost;
  return (
    <article>
        <Image layout='responsive' width={800} height={600} src={image.url} alt={`imagen blog${title}`}/>
      <div>
        <h1>{title}</h1>
        <p>{formatDate(published_at)}</p>
        <p>{summary}</p>
        <Link href={`/blog/${id}`}>Leer Entrada</Link>
      </div>
    </article>
  );
};

export default BlogPost;
