import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.footerContent}`}>
          <nav className={styles.nav}>
            <Link href="/">Inicio</Link>
            <Link href="/aboutus">Nosotros</Link>
            <Link href="/courses">Cursos</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/store">Tienda</Link>
          </nav>

          <p className={styles.copyright}>&copy; Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
