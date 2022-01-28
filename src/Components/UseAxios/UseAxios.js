import {useState} from "react";
import {apiAxios} from "../../Axios";
import {AlertResultInit, ShowErrorAlert} from "../Popups/Alert/AlertPopup";

export const UseAxios = ({method, url, data, setErrorResult}) =>{

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(AlertResultInit)

    const Send = async () =>{
        setIsLoading(true)

        return apiAxios({
            method: method,
            url: url,
            data
        })
            .then((res)=>res.data)
            .catch((er)=>{
                setError(ShowErrorAlert(er.response.data.message))
                setErrorResult?.(ShowErrorAlert(er.response.data.message))
            })
            .finally(()=>setIsLoading(false));
    }


    return {
        isLoading,
        setError,
        error,
        Send
    }
}