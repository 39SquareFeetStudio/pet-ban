import classes from "./AuthForm.module.css";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authUserLogin } from "../../features/auth/authSlice";

const AuthForm = () => {
  const { loading, error, data } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const accountInputRef = useRef();
  const passwordInputRef = useRef();

  const [submitCounter, setSubmitCounter] = useState(0);
  const [isLogin, setIsLogin] = useState(true); //true 登入 false註冊mod

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSubmitCounter(submitCounter + 1);
    const enteredAccount = accountInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    dispatch(
      authUserLogin({ account: enteredAccount, password: enteredPassword })
    );
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "登入" : "註冊"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="account">我的帳號</label>
          <input type={"text"} ref={accountInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">我的密碼</label>
          <input type={"password"} ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          {!loading && (
            <button className={classes.actions}>
              {isLogin ? "登入" : "註冊"}
            </button>
          )}
          {loading && <p>處理中...</p>}
          {data.messages !== "" && <p>訊息:{data.messages}</p>}
          {error !== null && <p>發生錯誤</p>}
          {submitCounter !== 0 &&
            (data.isLoggedIn ? <p>登入成功</p> : <p>登入失敗</p>)}
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
