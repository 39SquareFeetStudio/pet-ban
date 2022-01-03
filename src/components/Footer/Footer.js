import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footerBody}>
      <div className={classes.footerMain}>
        <button>關於我們</button>
        <button>意見箱</button>
        <button>合作夥伴</button>
      </div>
      <div className={classes.content}>
        <p>Copyright &copy; 2021 GooCat谷科工作室</p>
      </div>
    </div>
  );
};

export default Footer;
