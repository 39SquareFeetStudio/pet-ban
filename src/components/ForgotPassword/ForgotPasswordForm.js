import classes from "./ForgotPasswordForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authUserForgotPassword } from "../../features/auth/auth-Slice";
import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.auth);
  const [emailInput, resetEmailInput] = useInput("");

  const backHandler = () => {
    navigate("/auth");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(authUserForgotPassword(emailInput.value));
    resetEmailInput();
  };

  return (
    <section className={classes.auth}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label>我的信箱</label>
          <input {...emailInput} type={"email"} placeholder={"請輸入信箱"} />
        </div>
        <div className={classes.actions}>
          {loading && <p>loading...</p>}
          {error && <p>{error}</p>}
          {data.messages && <p>{data.messages}</p>}
          <button className={classes.toggle}>{"送出"}</button>
          <button
            type={"button"}
            className={classes.toggle}
            onClick={backHandler}
          >
            {"返回"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ForgotPasswordForm;
