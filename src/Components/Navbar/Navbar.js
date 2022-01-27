import "./Navbar.scss"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {NavbarElement} from "./NavbarElement";

export const Navbar = () => {

    return(
        <div className={"navbar"}>
            <div className={"navbar__logo"}>
                <span>MNIOK</span>
            </div>

            <div className={"navbar__elements"}>

                {/*<NavbarElement Icon={<ExitToAppIcon color={"primary"} fontSize={"medium"}/>} Title={"выход"}/>*/}


            </div>
        </div>
    )
}