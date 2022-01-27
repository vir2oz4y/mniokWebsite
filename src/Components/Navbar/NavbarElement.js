import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export const NavbarElement = ({Icon, Title}) => {

    return (
        <div className="nav_element">
            <div>
                {Icon}
            </div>
            <div>
                <span>{Title.toUpperCase()}</span>
            </div>
        </div>
    )
}