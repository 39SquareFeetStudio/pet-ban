import classes from "./MemberCenterPageContent.module.css";
import { useNavigate } from "react-router-dom";

const MemberCenterPageContent = () => {
  const navigate = useNavigate();

  function editPersonalProfileClickHandler() {
    navigate("/profile");
  }

  function editPasswordClickHandler() {
    navigate("/changePassword");
  }

  return (
    <section className={classes.member}>
      <h1>管理你的Pet伴 帳戶</h1>
      <p>Rick 歡迎使用</p>
      <div className={classes.actions}>
        <button
          className={classes.toggle}
          type={"button"}
          onClick={editPersonalProfileClickHandler}
        >
          {"修改個人資料"}
        </button>
        <button
          className={classes.toggle}
          type={"button"}
          onClick={editPasswordClickHandler}
        >
          {"修改密碼"}
        </button>
      </div>
    </section>
  );
};

export default MemberCenterPageContent;
