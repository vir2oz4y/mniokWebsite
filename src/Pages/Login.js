import {Button, TextField} from "@mui/material";
import Input from "../Components/Input/Input";
import { H1 } from "../Components/H1/H1";

import { useNavigate } from "react-router-dom";
import {useState} from "react";
import {Popup} from "../Components/Popup/Popup";
import {RegisterPopup} from "../Components/Popups/Register/RegisterPopup";
import {apiAxios} from "../Axios";
import {string} from "bfj/src/events";
import useAccount from "../Context";
import {UseAxios} from "../Components/UseAxios/UseAxios";
import {AlertPopup} from "../Components/Popups/Alert/AlertPopup";
import {LoadButton} from "../Components/Buttons/LoadingButton";


export const Login = () => {

    const [showRegisterPopup, setShowRegisterPopup] = useState(false);

    const [auth, setAuth] = useState({login:"", password:""})

    const { isLoading, error, setError, Send } = UseAxios({method:"post", url:"user/login", data:auth})

    const navigate = useNavigate()
    const { Login } = useAccount();

    const DoLogIn = async () =>{
        await Send()
            .then((responseData) =>{
                Login(responseData.token)
                navigate("/")
            })
    }

    return(
        <div className={"login__container"}>
            <div className={"login__container__form"}>
                <div>
                    <H1>Авторизация</H1>
                </div>
                <div>
                    <div>
                        <Input
                            required
                            label="Логин"
                            onInput={(val)=>setAuth({...auth, login:val})}
                        />
                    </div>

                    <div>
                        <Input
                            required
                            label="Пароль"
                            type={"password"}
                            onInput={(val)=>setAuth({...auth, password:val})}
                        />
                    </div>

                    <div style={{display: "flex", justifyContent:"space-between"}}>

                        <LoadButton
                            loading={isLoading}
                            onClick={DoLogIn}
                        >
                            Войти
                        </LoadButton>


                        <Button
                            variant="contained"
                            onClick={()=>setShowRegisterPopup(true)}
                        >
                            РЕГИСТРАЦИЯ
                        </Button>
                    </div>
                </div>
            </div>

            <AlertPopup alertResult={error} setAlertResult={setError}/>

            <RegisterPopup opened={showRegisterPopup} setOpened={setShowRegisterPopup}/>
        </div>
    )
}