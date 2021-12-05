import { useState, useRef } from "react";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const accountInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true); //true登入/false註冊 狀態
  const [isLoading, setIsLoading] = useState(false); //等待

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    //提交請求登入或註冊請求
    setIsLoading(false);
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
          {!isLoading && (
            <button className={classes.actions}>
              {isLogin ? "登入" : "註冊"}
            </button>
          )}
          {isLoading && <p>處理中...</p>}
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
