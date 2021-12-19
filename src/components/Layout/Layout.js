import { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const collectionShow = useSelector((state) => state.mainNav.collectionShow);

  const navShow = collectionShow ? "md:mt-0 mt-12" : "";

  return (
    <Fragment>
      <MainNavigation />
      {/*避免遮蔽導覽列*/}
      <main className={navShow}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
