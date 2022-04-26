import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { formatDate } from "../helpers";
import styles from "../styles/CoursesTypes.module.css";

const CoursesTypes = ({ course, addToCart }) => {
  const { title, description, image, start_date, end_date, price, id } = course;

  const addCourseToCart = () => {
    const courseSelected = {
      id,
      name: title,
      price,
      image: image.url,
      amount: 1,
      start_date,
      end_date
    };

    addToCart(courseSelected);
    toast.success("Agregado Correctamente");
  };

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
        <p className={styles.price}>$ {price}</p>
        <Link href="#">
          <a className={styles.link} onClick={addCourseToCart}>
            Comprar Ahora
          </a>
        </Link>
      </div>
    </article>
  );
};

export default CoursesTypes;
