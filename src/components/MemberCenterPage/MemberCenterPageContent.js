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
      <h2>管理你的Pet伴 帳戶</h2>
      <p>您好 XXX 歡迎使用</p>
      <div className={classes.actions}>
        <button type={"button"} onClick={editPersonalProfileClickHandler}>
          {"個人資料"}
        </button>
        <button type={"button"} onClick={editPasswordClickHandler}>
          {"修改密碼"}
        </button>
      </div>
    </section>
  );
};

export default MemberCenterPageContent;
