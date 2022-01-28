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

  const memberClickHandler = () => {
    navigate("member");
    dispatch(collectionHide());
  };

  const petClickHandler = () => {
    navigate("pet");
    dispatch(collectionHide());
  };

  const meowClickHandler = () => {
    dispatch(collectionToggle());
  };

  const NavCollection = () => {
    return (
      <div>
        <div className={classes.backdrop} onClick={meowClickHandler} />
        <div id="NavCollection" className={classes.navCollection}>
          <button className={classes.colBtn} onClick={aboutClickHandler}>
            About us
          </button>
          <button className={classes.colBtn} onClick={memberClickHandler}>
            Member
          </button>
          <button className={classes.colBtn} onClick={petClickHandler}>
            Pet
          </button>
          <button className={classes.colBtn} onClick={loginClickHandler}>
            Log in
          </button>
        </div>
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
              <button className={classes.btn} onClick={memberClickHandler}>
                Member
              </button>
              <button className={classes.btn} onClick={petClickHandler}>
                Pet
              </button>
              <button className={classes.btn} onClick={loginClickHandler}>
                Log in
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button className={classes.btn} onClick={meowClickHandler}>
                功能列
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
