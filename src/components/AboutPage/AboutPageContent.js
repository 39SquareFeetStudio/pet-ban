import classes from "./AboutPageContent.module.css";
import { ReactComponent as AboutTitle } from "../../assets/aboutTitle.svg";
import { ReactComponent as ImgNoFound } from "../../assets/imgNoFound.svg";

const AboutPageContent = () => {
  return (
    <section className={classes.contentBody}>
      <div className={classes.title}>
        <AboutTitle />
        <div className={classes.summary}>
          <div className={classes.summaryImg}>
            <ImgNoFound />
          </div>
          <p>
            動物零棄養這是條漫長的路,許多人都在同條道路上努力許久，可能無法要求每個人不棄養，但我們希望至少有個平台提供動物轉移，不會流落街頭
          </p>
        </div>
      </div>
      <div className={classes.title}>
        <h2>PetBan創意工作室：</h2>
        <p>
          致力於開發有引響力的網站，提供的服務有
          <br />
          RWD網頁設計、後端Api服務開發、介接後端、軟體開發. <br />
          technology-stack:
          React、ASP.NET、Laravel、WPF...等目前企業及新創主流開發技術.
        </p>
        <p>
          負責人Rick Lo：
          <br />
          專案經歷:
          <br />
          中研院民族所藏品管理系統後端服務開發及介接前端
          <br />
          台中知名遊戲網站重構及介接後端
          <br />
          CRM管理系統維護修改
          <br />
          台灣知名食品代送系統
          <br />
          陸軍兵工整備發展中心系統重構維護
          <br />
          國軍某單位補給總庫 => 智慧倉儲客製化系統
          <br />
          台灣知名鞋業股份有限公司 => 智慧倉儲客製化系統
          <br />
          德國知名亞洲區單車零配件廠 => 智慧倉儲客製化系統
          <br />
          台灣知名CNC切削工具機製造廠 => 智慧倉儲客製化系統
          <br />
          大學智能管理籃球櫃
        </p>
      </div>
    </section>
  );
};

export default AboutPageContent;
