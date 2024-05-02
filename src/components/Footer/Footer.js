import classes from "./Footer.module.css";

const Footer = () => {


  return (
    <div className={classes.footerBody}>
      <div className={classes.footerMain}>
        <a href={"https://www.tasker.com.tw/workroom/11WXE7"}
            target={"_blank"}
            rel="noreferrer">
          <button>關於我們</button>
        </a>
        <a>
          <button>提案</button>
        </a>
        <a href={"https://wilddonkeyworks.myportfolio.com/"}
            target={"_blank"}
            rel="noreferrer">
          <button>合作夥伴</button>
        </a>
      </div>
      <div className={classes.content}>
        <p>Copyright &copy; 2021 山石久平工作室</p>
      </div>
    </div>
  );
};

export default Footer;
