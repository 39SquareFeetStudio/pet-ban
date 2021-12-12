import classes from "./AuthForm.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  authUserLoginOrSignUp,
  authActions,
} from "../../features/auth/authSlice";
import { useInput } from "../../hooks/useInput";
import { validatePassword } from "../../helper/validate";

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, data } = useSelector((s) => s.auth);

  const [accountInput, resetAccountInput] = useInput("");
  const [passwordInput, resetPasswordInput] = useInput("");
  const [confirmPasswordInput, restConfirmPasswordInput] = useInput("");

  const [isLogin, setIsLogin] = useState(true); //true 登入 false註冊mod
  const [submitCounter, setSubmitCounter] = useState(0);
  const [confirmStr, setConfirmStr] = useState("");

  const restoreHandler = () => {
    setSubmitCounter(0);
    setConfirmStr("");
    resetAccountInput();
    resetPasswordInput();
    restConfirmPasswordInput();
  };

  const switchAuthModeHandler = () => {
    dispatch(authActions.logOut(null));
    restoreHandler();
    setIsLogin((prevState) => !prevState);
  };

  const forgotClickHandler = () => {
    navigate("/forgot");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSubmitCounter(submitCounter + 1);
    let check = false;

    if (!isLogin) {
      check =
        !!passwordInput.value.match(validatePassword()) &&
        passwordInput.value === confirmPasswordInput.value;
    } else {
      check = !!passwordInput.value.match(validatePassword());
    }

    if (check === false) {
      setConfirmStr("密碼：至少八個字符，至少一個字母和一個數字 或 密碼不一致");
      return;
    }

    dispatch(
      authUserLoginOrSignUp({
        isLogin: isLogin,
        account: accountInput.value,
        password: passwordInput.value,
      })
    );
    restoreHandler();
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "登入" : "註冊"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label>我的帳號</label>
          <input {...accountInput} type={"email"} placeholder={"請輸入信箱"} />
        </div>
        <div className={classes.control}>
          <label>我的密碼</label>
          <input {...passwordInput} type={"password"} />
        </div>
        {!isLogin && (
          <div className={classes.control}>
            <label>確認密碼</label>
            <input {...confirmPasswordInput} type={"password"} />
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
          <button
            className={classes.toggle}
            type={"button"}
            onClick={forgotClickHandler}
          >
            {"忘記密碼"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
