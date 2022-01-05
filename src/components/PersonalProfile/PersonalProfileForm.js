import classes from "./PersonalProfileForm.module.css";
import { useNavigate } from "react-router-dom";
import Calendar from "../Calendar/Calendar";

const PersonalProfileForm = () => {
  const navigate = useNavigate();
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  const homeClickHandler = () => {
    navigate("/member");
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.personalProfileForm}>
      <h1>個人資訊</h1>
      <div className={classes.control}>
        <label>姓名:</label>
        <input placeholder={"姓名"} />
      </div>
      <div className={classes.control}>
        <label>生日:</label>
        {/*<input placeholder={"生日"} />*/}
        <Calendar />
      </div>
      <div className={classes.control}>
        <label>信箱:</label>
        <input placeholder={"信箱"} />
      </div>
      <div className={classes.control}>
        <label>電話:</label>
        <input placeholder={"電話"} />
      </div>
      <div className={classes.actions}>
        <button type={"submit"}>修改</button>
        <button type={"button"} onClick={homeClickHandler}>
          返回
        </button>
      </div>
    </form>
  );
};

export default PersonalProfileForm;
