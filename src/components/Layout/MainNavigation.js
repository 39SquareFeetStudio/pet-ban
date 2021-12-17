import classes from "./MainNavigation.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";

const MainNavigation = () => {
  const navigate = useNavigate();

  const homeClickHandler = () => {
    navigate("/");
  };

  const loginClickHandler = () => {
    navigate("auth");
  };

  const aboutClickHandler = () => {
    navigate("about");
  };

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className="px-2">
          <div className="flex w-full justify-between ">
            <div className="flex space-x-4">
              <div>
                <button onClick={homeClickHandler} className={classes.appLogo}>
                  <Logo className="w-32 mr-2" alt="logo" />
                </button>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <button className={classes.btn} onClick={aboutClickHandler}>
                About us
              </button>
              <button className={classes.btn} onClick={loginClickHandler}>
                Log in
              </button>
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
