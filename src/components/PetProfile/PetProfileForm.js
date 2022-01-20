import classes from "./PetProfileForm.module.css";
import { ReactComponent as ImgNoFound } from "../../assets/imgNoFound.svg";
import { useNavigate } from "react-router-dom";

const PetProfileForm = () => {
  const navigate = useNavigate();
  const PreviousPage = () => {
    navigate("/pet");
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.petProfileForm}>
      <h1>寵愛卡</h1>
      <div className={classes.actions}>
        <a href={"/pet"}>
          <ImgNoFound />
          <svg
            className="group-hover:text-blue-500 mb-1 text-gray-400"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
          </svg>
          新增圖片
        </a>
      </div>
      <div className={classes.control}>
        <div className={classes.selectBlock}>
          <div className={"m-2.5"}>
            <label>動物別</label>
            <select name="type">
              <option value="cat">貓</option>
              <option value="dog">狗</option>
            </select>
          </div>
          <div className={"m-2.5"}>
            <label>性別</label>
            <select name="sex">
              <option value="male">公</option>
              <option value="female">母</option>
              <option value="unknown">不詳</option>
            </select>
          </div>
          <div className={"m-2.5"}>
            <label>絕育結紮</label>
            <select name="neutered">
              <option value="true">已結紮</option>
              <option value="false">未結紮</option>
            </select>
          </div>
        </div>
      </div>
      <div className={classes.control}>
        <label>品種</label>
        <input placeholder={"請輸入品種"} />
      </div>
      <div className={classes.control}>
        <label>毛色</label>
        <input placeholder={"請輸入毛色"} />
      </div>
      <div className={classes.control}>
        <label>名字</label>
        <input placeholder={"請輸入名字"} />
      </div>
      <div className={classes.control}>
        <label>生日</label>
        <input type={"date"} />
      </div>
      <div className={classes.actions}>
        <button type={"submit"}>建立</button>
      </div>
      <div className={classes.toggle}>
        <button type={"button"} onClick={PreviousPage}>
          返回
        </button>
      </div>
    </form>
  );
};

export default PetProfileForm;
