import {createContext, useContext, useEffect, useState} from "react";
import {apiAxios} from "./Axios";


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

    useEffect(()=>{

        if (token){
            localStorage.setItem("token", token);
            apiAxios.defaults.headers = { 'authorization': token }
        }
        else{
            localStorage.removeItem("token")
            apiAxios.defaults.headers = { 'authorization': "" }
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
    };
};

export const AccountProvider = ({children}) => {
    const value = useProvideAccount();
    return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>;
};

const useAccount = () => useContext(AccountContext);

export default useAccount;
