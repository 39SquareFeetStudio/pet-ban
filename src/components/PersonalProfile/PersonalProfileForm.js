import classes from "./PersonalProfileForm.module.css";

const PersonalProfileForm = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
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
        <input placeholder={"生日"} />
      </div>
      <div className={classes.control}>
        <label>信箱:</label>
        <input placeholder={"信箱"} />
      </div>
      <div className={classes.control}>
        <label>電話:</label>
        <input placeholder={"電話"} />
      </div>
      <button type={"submit"}>修改</button>
      <button type={"button"}>返回</button>
    </form>
  );
};

export default PersonalProfileForm;
