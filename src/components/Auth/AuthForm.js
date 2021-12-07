import classes from "./AuthForm.module.css";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  authUserLoginOrSignUp,
  authActions,
} from "../../features/auth/authSlice";

const AuthForm = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((s) => s.auth);

  const accountInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true); //true 登入 false註冊mod
  const [submitCounter, setSubmitCounter] = useState(0);
  const [confirmStr, setConfirmStr] = useState("");

  const restoreHandler = () => {
    setSubmitCounter(0);
    setConfirmStr("");
  };

  const switchAuthModeHandler = () => {
    dispatch(authActions.logOut(null));
    restoreHandler();
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSubmitCounter(submitCounter + 1);
    let check = false;
    const enteredAccount = accountInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (!isLogin) {
      check = enteredPassword === confirmPasswordInputRef.current.value;
    } else {
      check = true;
    }

    if (check === false) {
      setConfirmStr("密碼不一致");
      return;
    }

    restoreHandler();
    dispatch(
      authUserLoginOrSignUp({
        isLogin: isLogin,
        account: enteredAccount,
        password: enteredPassword,
      })
    );
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "登入" : "註冊"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label>我的帳號</label>
          <input
            type={"email"}
            placeholder={"請輸入信箱"}
            ref={accountInputRef}
          />
        </div>
        <div className={classes.control}>
          <label>我的密碼</label>
          <input type={"password"} ref={passwordInputRef} />
        </div>
        {!isLogin && (
          <div className={classes.control}>
            <label>確認密碼</label>
            <input type={"password"} ref={confirmPasswordInputRef} />
          </div>
        )}
        <div className={classes.actions}>
          {!loading && (
            <button className={classes.actions}>
              {isLogin ? "登入" : "註冊"}
            </button>
          )}
          {loading && <p>loading...</p>}
          {error && <p>{error}</p>}
          {data.messages && <p>{data.messages}</p>}
          {confirmStr && <p>{confirmStr}</p>}
          <button
            className={classes.toggle}
            type={"button"}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "我要註冊" : "我要登入"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
