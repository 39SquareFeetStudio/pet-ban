import classes from "./AddPetByChipIdForm.module.css";
import { useNavigate } from "react-router-dom";

const AddPetByChipIdForm = () => {
  const navigate = useNavigate();

  const petProfileFormHandler = () => {
    navigate("/pet/profile");
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.addPetByChipIdForm}>
      <h1>寵愛卡</h1>
      <div className={classes.control}>
        <label>寵物晶片號碼</label>
        <input placeholder={"請輸入寵物註冊的晶片號碼"} />
      </div>
      <div className={classes.actions}>
        <button type={"submit"}>建立</button>
      </div>
      <div className={classes.toggle}>
        <button type={"button"} onClick={petProfileFormHandler}>
          未註冊寵物晶片
        </button>
      </div>
    </form>
  );
};

export default AddPetByChipIdForm;
