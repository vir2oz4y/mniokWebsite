import "./Navbar.scss"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {NavbarElement} from "./NavbarElement";
import {DotaIcon} from "../Icons/DotaIcon";
import useAccount from "../../Context";

export const Navbar = () => {

    const {Logout, token} = useAccount();

    return (
        <div className={"navbar"}>
            <div className={"navbar__logo"}>
                <span>MNIOK</span>
            </div>

            {token && <div className={"navbar__elements"}>

                <div>
                    <div className={"navbar__elements__title"}>
                        ИГРЫ
                    </div>

                    <NavbarElement Icon={<DotaIcon/>} Title={"dota2"} url={"/dota2"}/>
                </div>


                <div>
                    <NavbarElement Icon={<ExitToAppIcon/>} Title={"Выход"} onClick={Logout}/>
                </div>
                {/*<NavbarElement Icon={<DotaIcon/>} Title={"dota2"} url={"/dota3"}/>*/}
                {/*<NavbarElement Icon={<DotaIcon/>} Title={"dota2"} url={"/dota4"}/>*/}
                {/*<NavbarElement Icon={<DotaIcon/>} Title={"dota2"} url={"/dota5"}/>*/}
                {/*<NavbarElement Icon={<DotaIcon/>} Title={"dota2"} url={"/dota6"}/>*/}

                {/*<div className={"navbar__elements__title"}>*/}
                {/*    Настройки*/}
                {/*</div>*/}
            </div>}
        </div>
    )
}