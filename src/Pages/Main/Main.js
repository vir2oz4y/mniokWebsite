import {Outlet} from "react-router-dom";
import {Navbar} from "../../Components/Navbar/Navbar";
import "../../Css/Main.scss"
import {Header} from "../../Components/Header/Header";
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@material-ui/core/styles";
import {AccountProvider} from "../../Context";

const Theme = createTheme({
    palette: {
        primary: {
            main: "#cbe0ff"
        },
    },
    overrides: {
        MuiInputBase: {
            root: {
                color: "#fff",
            }

        },
        MuiLoadingButton: {
            loadingIndicator: {
                color: "#fff",
                backgroundColor: "#ccc"
            }
        },
        MuiOutlinedInput: {
            root: {
                position: "relative",
                "& $notchedOutline": {
                    borderColor: "#ffffff"
                },
                "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
                    borderColor: "#cbe0ff",
                    // Reset on touch devices, it doesn't add specificity
                    "@media (hover: none)": {
                        borderColor: "#ffffff"
                    }
                },
                "&$focused $notchedOutline": {
                    borderColor: "#ffffff",
                    borderWidth: 1
                }
            }
        },
        MuiFormLabel: {
            root: {
                // "&$focused": {
                color: "#cbe0ff"
                // }
            }
        }
    }
});

export const Main = () => {


    return (
        <ThemeProvider theme={Theme}>
            <AccountProvider>
                <div className={"main"}>
                    <Navbar/>
                    <div>
                        <Header/>
                        <div className={"content"}>
                            <div>
                                <Outlet/>
                            </div>
                        </div>
                    </div>
                </div>
            </AccountProvider>
        </ThemeProvider>
    )
}