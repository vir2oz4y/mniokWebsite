import "./Cloud.scss";
import {H2} from "../H/H2";


export const Cloud = ({children, title, rightSlot}) => {


    return (
        <div className={"cloud"}>
            {(title || rightSlot) && <div className={"cloud__title"}>

                <div>
                    {title && <H2>{title}</H2>}
                </div>


                {
                    rightSlot && <div>
                        {rightSlot}
                    </div>
                }

            </div>}

            <div className={"cloud__content"}>

                {children}
            </div>
        </div>
    )
}