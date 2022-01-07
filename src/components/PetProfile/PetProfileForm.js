import classes from "./PetProfileForm.module.css";

const PetProfileForm = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.petProfileForm}>
      <h1>寵愛卡</h1>
      <div className={classes.control}>
        <label>品種</label>
        <input placeholder={"品種"} />
      </div>
      <div className={classes.control}>
        <label>Id.</label>
        <input placeholder={"Id."} />
      </div>
      <div className={classes.control}>
        <label>名字</label>
        <input placeholder={"名字"} />
      </div>
      <div className={classes.control}>
        <label>性別</label>
        <input placeholder={"性別"} />
      </div>
      <div className={classes.control}>
        <label>年齡</label>
        <input placeholder={"年齡"} />
      </div>
      <div className={classes.control}>
        <label>結紮</label>
        <input placeholder={"結紮"} />
      </div>
      <div className={classes.actions}>
        <a href="/">
          <svg
            className="group-hover:text-blue-500 mb-1 text-gray-400"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
          </svg>
          新增照片
        </a>
      </div>
    </form>
  );
};

export default PetProfileForm;
