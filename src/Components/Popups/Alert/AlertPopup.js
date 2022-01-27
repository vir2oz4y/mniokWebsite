import Input from "../../Input/Input";
import {LoadButton} from "../../Buttons/LoadingButton";
import {Popup} from "../../Popup/Popup";
import {Alert, AlertTitle} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import Modal from "@mui/material/Modal";
import "./AlertPopup.scss"

export const AlertResultInit = {
    show:false,
    severity:"success",
    message:""
}

export const ShowSuccessAlert = (message) =>{
    return {show:true,severity:"success", message}
}

export const ShowErrorAlert = (message) =>{
    return {show:true,severity:"error", message}
}

export const AlertPopup = ({alertResult, setAlertResult}) =>{


    return(

        <Modal
            open={alertResult.show}
            onClose={()=>setAlertResult({...alertResult, show:false})}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={"alert_popup"}>
                <div>
                    <Alert
                        severity={alertResult.severity}
                        onClose={()=>setAlertResult({...alertResult, show:false})}
                    >
                        {alertResult.message}
                    </Alert>
                </div>
            </div>
        </Modal>

    )
}