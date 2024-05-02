import classes from "./StartPageContent.module.css";
import { ReactComponent as Cat } from "../../assets/cat.svg";
import wildDonkeyImg from "../../assets/wilddonkeyworks2020.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { collectionHide } from "../../features/mainNav/mainNav-Slice";

const StartPageContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginClickHandler = () => {
    navigate("auth");
    dispatch(collectionHide());
  };

  return (
    <section className={classes.startBody}>
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
          <Cat className={classes.logo} />
        </div>
      </div>
      <div className={classes.mainBody}>
        <div className={classes.mainContent}>
          <h2>我們正在做的事</h2>
          <ul>
            <li>提升流浪動物領養率</li>
            <li>提升寵物醫療便利性</li>
          </ul>
        </div>
      </div>
      <div className={classes.mainBody}>
        <div className={classes.mainContent}>
          <h2>我們的路線圖</h2>
          <div className={classes.mainItem}>
            <div className={classes.span}>飼主</div>
            <p>
              提供醫療紀錄
              <br />
              醫院預約及查詢掛號狀態
            </p>
            <div className={classes.actions}>
              <button onClick={loginClickHandler}>支持</button>
            </div>
          </div>
          <div className={classes.mainItem}>
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
            <div className={classes.actions}>
              <button onClick={loginClickHandler}>支持</button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.partnerBody}>
        <div className={classes.partnerContent}>
          <h2>我們的合作夥伴</h2>
          <a
            href={"https://wilddonkeyworks.myportfolio.com/"}
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={wildDonkeyImg} alt={"Wild Donkey Works"} />
          </a>
          <p>
            感謝您看到這裡
            <br />
            誠摯邀請您與我們共同創造
            <br />
            cathy830409@gmal.com
            <br />
            山石久平工作室
          </p>
        </div>
      </div>
    </section>
  );
};

export default StartPageContent;
