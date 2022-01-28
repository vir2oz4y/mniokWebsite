import "./Header.scss"
import {Avatar} from "@mui/material";
import {AvatarLogo} from "../Avatar/Avatar";
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import useAccount from "../../Context";

export const Header = () => {
    const {accountInfo} = useAccount();

    return (
        <header>
            <div>
                <div>
                    <div>
                        <CurrencyRubleIcon/>
                    </div>

                    <div>
                        {accountInfo.balance.toFixed(2)}
                    </div>
                </div>
                <AvatarLogo nickname={accountInfo.login}/>
            </div>
        </header>
    )
}