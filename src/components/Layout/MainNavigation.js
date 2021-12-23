import classes from "./MainNavigation.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  collectionHide,
  collectionToggle,
} from "../../features/mainNav/mainNav-Slice";
import { useDispatch, useSelector } from "react-redux";

const MainNavigation = () => {
  const collectionShow = useSelector((state) => state.mainNav.collectionShow);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const homeClickHandler = () => {
    navigate("/");
    dispatch(collectionHide());
  };

  const loginClickHandler = () => {
    navigate("auth");
    dispatch(collectionHide());
  };

  const aboutClickHandler = () => {
    navigate("about");
    dispatch(collectionHide());
  };

  const meowClickHandler = () => {
    dispatch(collectionToggle());
  };

  const NavCollection = () => {
    return (
      <div id="NavCollection" className="md:hidden">
        <button className={classes.btn} onClick={aboutClickHandler}>
          About us
        </button>
        <button className={classes.btn} onClick={loginClickHandler}>
          Log in
        </button>
      </div>
    );
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
              <button className={classes.btn} onClick={meowClickHandler}>
                喵喵喵
              </button>
            </div>
          </div>
        </div>
        {collectionShow && <NavCollection />}
      </nav>
    </header>
  );
};

export default MainNavigation;
