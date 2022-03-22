import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, page, guitar }) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {page}</title>
        <meta name="description" content="Sitio Web de venta de guitarras" />
      </Head>

      <Header guitar={guitar}/>
      {children}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  guitar: null
}

export default Layout;
