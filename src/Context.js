import {createContext, useContext, useEffect, useLayoutEffect, useState} from "react";
import {apiAxios} from "./Axios";
import { useNavigate } from "react-router-dom";

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



    useEffect(()=>{
        if (token){
            apiAxios.get("user")
                .then((res)=>{
                    setAccountInfo(res.data)
                })
        }
    },[token])

    const Login = (token) =>{
        setToken(`Basic ${token}`);
    }

    const Logout = () => {
        setToken(undefined)
    }

    return {
        token,
        Login,
        Logout,
        accountInfo
    };
};

export const AccountProvider = ({children}) => {
    const value = useProvideAccount();
    return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>;
};

const useAccount = () => useContext(AccountContext);

export default useAccount;
