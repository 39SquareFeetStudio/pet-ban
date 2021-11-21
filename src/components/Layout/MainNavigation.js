import classes from "./MainNavigation.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.gray}>
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <a href={() => {}} className={classes.appLogo}>
                  <Logo className="w-32 mr-2" alt="logo" />
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <Link className={classes.btn} to="/" />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <button className={classes.btn}>Login</button>
              <button className={classes.btn}>HomePage</button>
            </div>
            <div className="md:hidden flex items-center">
              <button className={classes.btn}>你點看看</button>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <Link className={classes.btn} to="/">
            HomePage
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
