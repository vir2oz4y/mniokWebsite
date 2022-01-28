import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {DotaIcon} from "../Icons/DotaIcon";
import { useNavigate, useLocation } from "react-router-dom";
import classNames from "classnames";

export const NavbarElement = ({Icon, Title, url, onClick}) => {

    const location = useLocation();
    const navigate = useNavigate();

    const onClickElement = () =>{
        url && navigate(url);
        onClick?.()
    }

    return (
        <div className={classNames("nav_element", {selected:url && location.pathname.includes(url)})}  onClick={onClickElement}>
            <div>
                {Icon}
            </div>
            <div>
                <span>{Title.toUpperCase()}</span>
            </div>
        </div>
    )
}