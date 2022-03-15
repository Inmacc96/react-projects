import Link from "next/link";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <div>
      <div className={styles.not_found}>
        <h1 className="heading">Página no encontrada</h1>
        <Link href="/">Volver al Inicio</Link>
      </div>
    </div>
  );
};

export default NotFound;
