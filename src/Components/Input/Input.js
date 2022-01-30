import TextField from "@material-ui/core/TextField";
import {withStyles} from "@mui/styles";
import "./Input.scss"

const Input = (props) => {

    const { classes, onInput } = props

    return <TextField
        {...props}
        autoComplete={"off"}
        onInput={(e)=>onInput?.(e.target.value)}
        fullWidth
        color={"primary"}
        variant="standard"
    />
}

export default Input;
