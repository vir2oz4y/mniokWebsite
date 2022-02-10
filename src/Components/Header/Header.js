import "./Header.scss"
import {Avatar} from "@mui/material";
import {AvatarLogo} from "../Avatar/Avatar";
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import useAccount from "../../Context";

export const Header = () => {
    const {accountInfo} = useAccount();
    console.log(accountInfo)
    return (
        <header>
            <div>
                <div className={"header__balance"}>
                    <div>
                        <CurrencyRubleIcon/>
                    </div>

                    <div>
                        {accountInfo.balance.toFixed(2)}
                    </div>
                </div>

                <div>
                    <div>
                        {accountInfo.login}
                    </div>
                </div>

                <div>
                    <AvatarLogo nickname={accountInfo.login}/>
                </div>

            </div>
        </header>
    )
}