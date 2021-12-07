import classes from "./ForgotPasswordForm.module.css";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authUserForgotPassword } from "../../features/auth/authSlice";

const ForgotPasswordForm = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((s) => s.auth);
  const emailInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    dispatch(authUserForgotPassword(enteredEmail));
  };

  return (
    <section className={classes.auth}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label>我的信箱</label>
          <input
            type={"email"}
            placeholder={"請輸入信箱"}
            ref={emailInputRef}
          />
        </div>
        <div className={classes.actions}>
          {loading && <p>loading...</p>}
          {error && <p>{error}</p>}
          {data.messages && <p>{data.messages}</p>}
          <button className={classes.toggle}>{"送出"}</button>
        </div>
      </form>
    </section>
  );
};

export default ForgotPasswordForm;
