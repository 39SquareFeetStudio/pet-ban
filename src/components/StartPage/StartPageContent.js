import classes from "./StartPageContent.module.css";
import { ReactComponent as Cat } from "../../assets/cat.svg";
const StartPageContent = () => {
  return (
    <section className={classes.starting}>
      <div className={classes.banner}>
        <div className={classes.content}>
          <div>
            <p className={classes.h1}>
              Pet 伴，
              <br />
              陪伴你的寵物一生
            </p>
            <p className={classes.h2}>毛小孩的就診紀錄整合平台</p>
          </div>
          <Cat />
        </div>
      </div>
    </section>
  );
};

export default StartPageContent;
