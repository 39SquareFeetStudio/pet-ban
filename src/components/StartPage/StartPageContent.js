import classes from "./StartPageContent.module.css";
import { ReactComponent as Cat } from "../../assets/cat.svg";
const StartPageContent = () => {
  return (
    <section className={classes.body}>
      <div className={classes.banner}>
        <div className={classes.content}>
          <div className={classes.subject}>
            <h1>
              Pet 伴
              <br />
              陪伴你的寵物一生
              <br />
            </h1>
            <div className={classes.cosH2}>毛小孩醫療資訊整合平台</div>
          </div>
          <Cat />
        </div>
      </div>
      <div className={classes.mainContent}>
        <h1>我們提供的服務</h1>
        <div className={classes.span}>飼主</div>
        <p>
          提供醫療紀錄
          <br />
          醫院預約及查詢掛號狀態
        </p>
        <button className={classes.control}>成為會員</button>
        <div>.........</div>
        <div className={classes.span}>
          動物之家
          <br />
          中途
        </div>
        <p>
          追蹤送養寵物就診及預防針施打
          <br />
          可以於平台上媒合飼養者
        </p>
        <button className={classes.control}>成為會員</button>
      </div>
      <div className={classes.businessPartners}>
        <h1>我們合作的動物醫院</h1>
      </div>
    </section>
  );
};

export default StartPageContent;
