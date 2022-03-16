import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = ({ guitar }) => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.headerContent}>
          <Link href="/">
            <a>
              <Image
                width={400}
                height={100}
                src="/img/logo.svg"
                alt="Imagen logo"
              />
            </a>
          </Link>

          <nav className={styles.nav}>
            <Link href="/">Inicio</Link>
            <Link href="/aboutus">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/store">Tienda</Link>
          </nav>
        </div>
        {guitar && (
          <div>
            <h1>Modelo {guitar.name}</h1>
            <p>{guitar.description}</p>
            <p>${guitar.price}</p>
            <Link href={`/guitars/${guitar.url}`}>
              <a>Ver Producto</a>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
