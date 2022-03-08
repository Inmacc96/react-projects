import Head from "next/head";

const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {page}</title>
        <meta name="description" content="Sitio Web de venta de guitarras" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
