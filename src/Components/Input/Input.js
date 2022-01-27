import TextField from "@material-ui/core/TextField";
import {withStyles} from "@mui/styles";

const styles = {
    input: {
        color: "#ffffff",
        marginBottom:"1.3em"
    }
};


const Input = (props) => {

    const { classes, onInput } = props

    return <TextField
        {...props}
        autoComplete={"off"}
        InputProps={{
            className: classes.input
        }}
        onInput={(e)=>onInput?.(e.target.value)}
        fullWidth
        color={"primary"}
        variant="standard"
    />
}

export default withStyles(styles)(Input);
