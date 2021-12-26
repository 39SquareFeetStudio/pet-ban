import classes from "./PersonalProfileForm.module.css";

const PersonalProfileForm = () => {
  return (
    <section>
      <div>
        <h1>個人資訊</h1>
        <label>姓名</label>
        <input placeholder={"rick"} />
        <label>生日</label>
        <input placeholder={"1994-10-29"} />
        <label>信箱</label>
        <input placeholder={"edcrfvlily5@gmail.com"} />
        <label>電話</label>
        <input placeholder={"0927-XXX-XXX"} />
        <button>修改</button>
      </div>
    </section>
  );
};

export default PersonalProfileForm;
