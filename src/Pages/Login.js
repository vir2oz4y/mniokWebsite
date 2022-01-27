import {Button, TextField} from "@mui/material";
import Input from "../Components/Input/Input";
import { H1 } from "../Components/H1/H1";

import { useNavigate } from "react-router-dom";
import {useState} from "react";
import {Popup} from "../Components/Popup/Popup";
import {RegisterPopup} from "../Components/Popups/Register/RegisterPopup";
import {apiAxios} from "../Axios";
import {string} from "bfj/src/events";

export const Login = () => {

    const [showRegisterPopup, setShowRegisterPopup] = useState(false);

    const [auth, setAuth] = useState({login:"", password:""})

    const Login = () =>{

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
                            label="Логин"
                            onInput={(val)=>setAuth({...auth, login:val})}
                        />
                    </div>

                    <div>
                        <Input
                            label="Пароль"
                            type={"password"}
                            onInput={(val)=>setAuth({...auth, password:val})}
                        />
                    </div>

                    <div style={{display: "flex", justifyContent:"space-between"}}>
                        <Button
                            variant="contained"
                        >
                            ВОЙТИ
                        </Button>

                        <Button
                            variant="contained"
                            onClick={()=>setShowRegisterPopup(true)}
                        >
                            РЕГИСТРАЦИЯ
                        </Button>
                    </div>
                </div>
            </div>

            <RegisterPopup opened={showRegisterPopup} setOpened={setShowRegisterPopup}/>
        </div>
    )
}