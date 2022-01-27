import Modal from '@mui/material/Modal';
import "./Popup.scss"
import CancelIcon from '@mui/icons-material/Cancel';


export const Popup = ({opened,setOpened, header, children}) =>{

    return(
        <Modal
            open={opened}
            onClose={()=>setOpened(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={"popup"}>

                <div className={"popup__header"}>
                    <div>
                        <div>
                            {header}
                        </div>
                        <div onClick={()=>setOpened(false)}>
                            <CancelIcon/>
                        </div>
                    </div>

                </div>
                <div>
                    {children}
                </div>
            </div>
        </Modal>
    )
}