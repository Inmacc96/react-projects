import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div>
          <Link href="/">
            <Image
              width={400}
              height={100}
              src="/img/logo.svg"
              alt="Imagen logo"
            />
          </Link>
        </div>

        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/aboutus">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/store">Tienda</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
