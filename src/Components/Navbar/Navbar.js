import "./Navbar.scss"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {NavbarElement} from "./NavbarElement";
import {DotaIcon} from "../Icons/DotaIcon";
import useAccount from "../../Context";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Button} from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export const Navbar = () => {

    const {Logout, token} = useAccount();

    return (
        <div className={"navbar"}>
            <div className={"navbar__logo"}>
                <span>MNIOK</span>
            </div>

            <div>
                {token && <div className={"navbar__elements"}>

                    <div>
                        <div>
                            <div className={"navbar__elements__title"}>
                                НАСТРОЙКИ
                            </div>

                            <NavbarElement Icon={<AccountCircleIcon/>} Title={"Аккаунт"} url={"/account/settings"}/>
                            <NavbarElement Icon={<FormatListBulletedIcon/>} Title={"Матчи"} url={"/account/dota/matches"}/>
                        </div>

                        <div>
                            <div className={"navbar__elements__title"}>
                                ИГРЫ
                            </div>

                            <NavbarElement Icon={<DotaIcon/>} Title={"dota2"} url={"/dota2"}/>
                        </div>
                    </div>
                    <div >
                        <div>

                            <Button variant="outlined" onClick={Logout} startIcon={<ExitToAppIcon/>}>
                                Выход
                            </Button>
                            {/*<NavbarElement Icon={<ExitToAppIcon/>} Title={"Выход"} onClick={Logout}/>*/}
                        </div>
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

        </div>
    )
}