import {CircularProgress} from "@mui/material";

export const Loader = () =>{

    return(
        <div style={{display:"flex", justifyContent:"center", flex:"1"}}>
            <CircularProgress/>
        </div>
    )
}
