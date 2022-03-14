import Link from "next/link";
import Image from "next/image";
import { formatDate } from "../helpers"; // Al llamarse el archivo index.js, solo es suficiente con el nombre de la carpeta
import styles from "../styles/BlogPost.module.css";

const BlogPost = ({ blogpost }) => {
  const { title, summary, image, published_at, id } = blogpost;
  return (
    <article>
      <Image
        layout="responsive"
        width={800}
        height={600}
        src={image.url}
        alt={`imagen blog${title}`}
      />
      <div className={styles.container}>
        <h3>{title}</h3>
        <p className={styles.date}>{formatDate(published_at)}</p>
        <p className={styles.summary}>{summary}</p>
        <Link href={`/blog/${id}`}>
            <a className={styles.link}>Leer Entrada</a>
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;
