import { Outlet, Link, useLocation, NavLink } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const { pathname } = location;

  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Customers
        </h2>

        <nav className="mt-10">
          <Link
            to="/"
            className={`${
              pathname === "/" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-300`}
          >
            Customers
          </Link>
          <Link
            to="/customer/new"
            className={`${
              pathname === "/customer/new" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-300`}
          >
            New Customer
          </Link>
        </nav>
      </aside>

      <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
