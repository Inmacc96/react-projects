import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

const Header = ({ guitar }) => {
  const router = useRouter();
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
            <Link href="/cart">
              <a>
                <Image
                  layout="fixed"
                  width={30}
                  height={25}
                  src={"/img/carrito.png"}
                  alt="image cart"
                />
              </a>
            </Link>
          </nav>
        </div>
        {guitar && (
          <div className={styles.model}>
            <h2>Modelo {guitar.name}</h2>
            <p>{guitar.description}</p>
            <p className={styles.price}>${guitar.price}</p>
            <Link href={`/guitars/${guitar.url}`}>
              <a className={styles.link}>Ver Producto</a>
            </Link>
          </div>
        )}
      </div>

      {router.pathname == "/" && (
        <div className={styles.guitar}>
          <Image
            layout="fixed"
            width={500}
            height={1200}
            src="/img/header_guitarra.png"
            alt="imagen header guitarra"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
