import Input from "../../Input/Input";
import {Popup} from "../../Popup/Popup";
import "./Register.scss"
import {useState} from "react";
import {apiAxios} from "../../../Axios";
import {LoadButton} from "../../Buttons/LoadingButton";
import { AlertPopup, AlertResultInit } from "../Alert/AlertPopup";
import useAccount from "../../../Context";
import {UseAxios} from "../../UseAxios/UseAxios";
import { useNavigate } from "react-router-dom";

export const RegisterPopup = ({opened,setOpened}) =>{

    const [registerData, setRegisterData] = useState({ login:"", email:"", password:"", confirmPassword:"" })

    const [confirmCode, setConfirmCode] = useState({code:""})

    const [isConfirm, setIsConfirm] = useState(false);

    const [alertResult, setAlertResult] = useState(AlertResultInit);

    const {isLoading: registerIsLoading, Send : SendRegister}
        = UseAxios({method:"post", url:"user", data:registerData, setErrorResult:setAlertResult});

    const {isLoading: confirmIsLoading, Send : SendConfirm}
        = UseAxios({method:"post", url:"user/confirm", data:confirmCode, setErrorResult:setAlertResult});


    const navigate = useNavigate()
    const { Login } = useAccount();

    const RegisterUser = async () =>{
        await SendRegister()
            .then(res=>{
                Login(res.token)
                setIsConfirm(true)
            })
    }

    const ConfirmUserAccount =  async () =>{
        await SendConfirm()
            .then(()=>{
                navigate("/")
            })
    }

    const RegisterForm = <div>
        <div>
            <div>
                <Input
                    required
                    label="Логин"
                    value={registerData.login}
                    onInput={(val)=>setRegisterData({...registerData, login: val})}
                />
            </div>

            <div>
                <Input
                    required
                    label="Почта"
                    type={"email"}
                    onInput={(val)=>setRegisterData({...registerData, email: val})}
                />
            </div>


            <div>
                <Input
                    required
                    id={"password"}
                    label="Пароль"
                    type={"password"}
                    onInput={(val)=>setRegisterData({...registerData, password: val})}
                />
            </div>

            <div>
                <Input
                    required
                    id={"confirmPassword"}
                    label="Подтверждение пароля"
                    type={"password"}
                    onInput={(val)=>setRegisterData({...registerData, confirmPassword: val})}
                />
            </div>

        </div>

        <div style={{display: "flex", justifyContent:"center"}}>
            <LoadButton
                loading={registerIsLoading}
                onClick={RegisterUser}
            >
                создать аккаунт
            </LoadButton>

        </div>
    </div>

    const ConfirmUserForm = <div>
        <div>
            <div>
                <div>
                    <div style={{textAlign: "center"}}>
                        <p>На вашу почту, указанную в предыдущем шаге, было отправлено письмо с кодом подтверждения.</p>
                        <p>Для завершения регистрации необходимо ввести этот код в поле ниже</p>
                    </div>
                </div>
                <Input
                    required
                    label="Код подтверждения"
                    value={confirmCode.code}
                    onInput={(val)=>setConfirmCode({...confirmCode, code: val})}
                />
            </div>

        </div>

        <div style={{display: "flex", justifyContent:"center"}}>
            <LoadButton
                loading={confirmIsLoading}
                onClick={ConfirmUserAccount}
            >
                Подтвердить аккаунт
            </LoadButton>

        </div>
    </div>


    return(
        <Popup opened={opened} setOpened={setOpened} header={"Регистрация"}>
            <div className={"register_popup"}>

                { isConfirm ? ConfirmUserForm : RegisterForm }

                <AlertPopup alertResult={alertResult} setAlertResult={setAlertResult}/>
            </div>

        </Popup>
    )
}