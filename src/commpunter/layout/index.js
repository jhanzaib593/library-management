import { Outlet } from "react-router-dom";
import Header from "../Header/";
import Navbarheader from "../Navbar/";
import "./index.css";
import { useSelector } from "react-redux";
const Layout = () => {
  const user = useSelector((s)=>s.user);
  return (
    <div>
      <Header />
      <div className="layout_wapper">
        {user ? <Navbarheader /> : null}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
