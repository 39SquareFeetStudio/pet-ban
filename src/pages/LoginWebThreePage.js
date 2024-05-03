import Web3 from "web3";
import { useState } from "react";
import ConnectWalletButton from "../components/WebThree/ConnectWalletButton";

const LoginWebThreePage = () => {
    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState("");

    const onPressLogoutWallet = () => setAddress("");

    const onPressConnectWallet = async () => {
        setLoading(true);

        try {
            if (window?.ethereum?.isMetaMask) {
            // Desktop browser
            const accounts = await window?.ethereum.request({
                method: "eth_requestAccounts",
            });

            const account = Web3.utils.toChecksumAddress(accounts[0]);
            setAddress(account);
            }
        } catch (error) {
            console.log(error);
        }

        setLoading(false);
    };

    return <ConnectWalletButton  
        onPressConnect={onPressConnectWallet}
        onPressLogout={onPressLogoutWallet}
        loading={loading}
        address={address}
    />;
  };
  
  export default LoginWebThreePage;