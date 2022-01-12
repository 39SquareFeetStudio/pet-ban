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
    <form onSubmit={onSubmitHandler}>
      <h1>新增</h1>
      <div className={"control"}>
        <label>使用晶片號碼帶入寵物資訊</label>
        <input placeholder={"請輸入寵物註冊的晶片號碼"} />
      </div>
      <div className={"action"}>
        <button type={"submit"}>確定送出</button>
      </div>
      <div className={"action"}>
        <button type={"button"} onClick={petProfileFormHandler}>
          未註冊寵物晶片
        </button>
      </div>
    </form>
  );
};

export default AddPetByChipIdForm;
