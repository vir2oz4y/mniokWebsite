import "./LoadingButton.scss"
import LoadingButton  from "@mui/lab/LoadingButton";

export const LoadButton = ({loading, onClick, children}) =>{

    return(
        <LoadingButton
            loading={loading}
            variant="contained"
            onClick={onClick}
        >
            {children}
        </LoadingButton>
    )
}