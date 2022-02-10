import {Button} from "@mui/material";

export const BasePage = ({title, buttons, children}) => {
    return(
        <div className={"page"}>
            <div className={"page__header"}>
                <div className={"page__header__title"}>
                    <span>{title}</span>
                </div>
                {buttons}
            </div>

            <div>
                {children}
            </div>
        </div>
    )
}