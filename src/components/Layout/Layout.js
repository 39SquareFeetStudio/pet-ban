import { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Layout = (props) => {
  const { pathname } = useLocation();
  const collectionShow = useSelector((state) => state.mainNav.collectionShow);

  const navShow = collectionShow ? "md:mt-0 mt-12" : "";

  return (
    <Fragment>
      <MainNavigation />
      {/*避免遮蔽導覽列*/}
      <main className={navShow}>{props.children}</main>
      {pathname === "/" && <Footer />}
    </Fragment>
  );
};

export default Layout;
