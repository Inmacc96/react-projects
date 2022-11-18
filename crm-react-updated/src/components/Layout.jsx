import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="text-4xl font-bold">
      <h1>CRM - React </h1>
      <Outlet />
    </div>
  );
};

export default Layout;
