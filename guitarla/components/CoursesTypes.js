import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../helpers";
import styles from "../styles/CoursesTypes.module.css";

const CoursesTypes = ({ course }) => {
  const { title, description, image, start_date, end_date, price } = course;
  return (
    <article>
      <Image
        layout="responsive"
        width={800}
        height={600}
        src={image.url}
        alt={`imagen course ${title}`}
      />
      <div className={styles.container}>
        <h3>{title}</h3>
        <p className={styles.date}>
          Fecha de inicio: <span>{formatDate(start_date)}</span>
        </p>
        <p className={styles.date}>
          Fecha final: <span>{formatDate(end_date)}</span>
        </p>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>
         $ {price}
        </p>
        <Link href="#">
          <a className={styles.link}>Comprar Ahora</a>
        </Link>
      </div>
    </article>
  );
};

export default CoursesTypes;
