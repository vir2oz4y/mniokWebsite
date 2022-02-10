import {createContext, useContext, useEffect, useLayoutEffect, useState} from "react";
import {apiAxios} from "./Axios";
import {useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom";

export const defaultValue = {
    token:"",
};

export const AccountContext = createContext(defaultValue);

/**
 * Здесь вся логика получения и хранения глобальных данных
 * для личного кабинета
 */
const useProvideAccount = () => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [accountInfo, setAccountInfo] = useState({balance:0, login:"", email:""})
    const navigate = useNavigate()

    const ChangeUserOnline = (state) =>{
        apiAxios.post("user/online", {isOnline:state})
    }

    useEffect(()=>{
        if (token){
            ChangeUserOnline(true)
            // Подписались на событие close window and change user online state
            window.addEventListener("beforeunload", ()=>ChangeUserOnline(false));

            return(()=>window.removeEventListener("beforeunload", ()=>ChangeUserOnline(false)))
        }
    }, [])


    useLayoutEffect(()=>{

        if (token){
            localStorage.setItem("token", token);
            apiAxios.defaults.headers = {
                'authorization': token }
        }
        else{
            localStorage.removeItem("token")
            apiAxios.defaults.headers = { 'authorization': "" }
            navigate("/login")
        }

    },[token])

    const UpdateAccountInfo = () =>{
        apiAxios.get("user")
            .then((res)=>{
                setAccountInfo(res.data)
            })
    }

    useLayoutEffect(()=>{
        if (token){
            UpdateAccountInfo()
        }
    },[token])

    const Login = (token) =>{
        setToken(`Basic ${token}`);
    }

    const Logout = () => {
        ChangeUserOnline(false)
        setToken(undefined)
    }

    const tokenWithoutBasic = () => token.replaceAll("Basic ", "")

    return {
        token,
        Login,
        Logout,
        accountInfo,
        setAccountInfo,
        tokenWithoutBasic,
        UpdateAccountInfo
    };
};

export const AccountProvider = ({children}) => {

    const [params, setParams] = useSearchParams();

    useEffect(()=>{
        if(params.get("steamAuth")){
            const steamAuth = params.get("steamAuth")

            params.delete("steamAuth")
            setParams(params)
            console.log(steamAuth)
        }

    },[params])


    const value = useProvideAccount();
    return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>;
};

const useAccount = () => useContext(AccountContext);

export default useAccount;
