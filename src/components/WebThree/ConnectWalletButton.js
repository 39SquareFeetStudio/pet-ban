import classes from "./ConnectWalletButton.module.css";

const ConnectWalletButton = ({
    onPressLogout,
    onPressConnect,
    loading,
    address,
  }) => {
    return (
      <section className={classes.auth}>
        <div className={classes.title}>
          <button
            className={classes.toggleTitle}
            type={"button"}
            disabled
          >
            {address ? (
              <p className={"border-b-4"}>登入</p>
            ) : (
              <p className={""}>登入</p>
            )}
          </button>
        </div>
        {address && !loading ? (
          <div className={classes.actions}>
            <button onClick={onPressLogout} className={classes.actions}>
              Disconnect
            </button> 
          </div>
        ) : loading ? (
          <button
            disabled
          >
            <p>loading...</p>
          </button>
        ) : (
          <div className={classes.actions}>
            <button onClick={onPressConnect} className={classes.actions}>
              Connect Wallet
            </button>
          </div>
        )}
      </section>
    );
  };
  
  export default ConnectWalletButton;