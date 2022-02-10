import React from 'react';
import {Alert, Button} from "@mui/material";
import Modal from "@mui/material/Modal";

const Confirmation = ({opened, setOpened, onSuccessClick, message}) => {
    return (
        <Modal
            open={opened}
            onClose={()=>setOpened(false)}
        >
            <div className={"alert_popup"}>
                <div style={{marginBottom:"1em"}}>
                    {message}
                </div>

                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <Button variant="outlined" onClick={()=>{
                        onSuccessClick?.()
                        setOpened(false)
                    }}>
                        Да
                    </Button>
                    <Button variant="outlined" onClick={()=>setOpened(false)}>
                        Нет
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default Confirmation;