import Input from "../../Input/Input";
import {Popup} from "../../Popup/Popup";
import "./Register.scss"
import {useState} from "react";
import {apiAxios} from "../../../Axios";
import {LoadButton} from "../../Buttons/LoadingButton";
import { AlertPopup, AlertResultInit } from "../Alert/AlertPopup";
import useAccount from "../../../Context";


export const RegisterPopup = ({opened,setOpened}) =>{

    const [registerData, setRegisterData] = useState({ login:"", email:"", password:"", confirmPassword:"" })
    const [isLoading, setIsLoading] = useState(false)
    const [alertResult, setAlertResult] = useState(AlertResultInit)
    const { Login } = useAccount();

    const RegisterUser = async () =>{

        setIsLoading(true)

        await apiAxios.post("user",{
            ...registerData
        })
            .then(res=>{
                Login(res.data.token)
            })
            .finally(()=>setIsLoading(false))
    }

    return(
        <Popup opened={opened} setOpened={setOpened} header={"Регистрация"}>
            <div className={"register_popup"}>
                <div>
                    <div>
                        <Input
                            label="Логин"
                            value={registerData.login}
                            onInput={(val)=>setRegisterData({...registerData, login: val})}
                        />
                    </div>

                    <div>
                        <Input
                            label="Почта"
                            type={"email"}
                            onInput={(val)=>setRegisterData({...registerData, email: val})}
                        />
                    </div>


                    <div>
                        <Input
                            id={"password"}
                            label="Пароль"
                            type={"password"}
                            onInput={(val)=>setRegisterData({...registerData, password: val})}
                        />
                    </div>

                    <div>
                        <Input
                            id={"confirmPassword"}
                            label="Подтверждение пароля"
                            type={"password"}
                            onInput={(val)=>setRegisterData({...registerData, confirmPassword: val})}
                        />
                    </div>

                </div>

                <div style={{display: "flex", justifyContent:"center"}}>
                    <LoadButton
                        loading={isLoading}
                        onClick={RegisterUser}
                    >
                        создать аккаунт
                    </LoadButton>

                </div>

                <AlertPopup alertResult={alertResult} setAlertResult={setAlertResult}/>
            </div>

        </Popup>
    )
}