import {BasePage} from "./Main/BasePage";
import {Button} from "@mui/material";
import {Dota2CreateMatchPopup} from "../Components/Popups/Dota2/Dota2CreateMatchPopup";
import {useEffect, useState} from "react";
import {UseAxios} from "../Components/UseAxios/UseAxios";
import {DotaMatch} from "../Components/Dota2/DotaMatch";
import useAccount from "../Context";

export const Dota2Page = () => {

    const[createMatchPopup, setCreateMatchPopup] = useState(false)

    const { isLoading, alert, Send } = UseAxios({method:"get", url:"dota/matches"})
    const { token, tokenWithoutBasic } = useAccount()
    const [dotaMatches, setDotaMatches] = useState([])

    const LoadDotaMatches = () =>{
        Send()
            .then((data)=>{
          setDotaMatches(data.matches)
        })
    }

    useEffect(()=>{
       LoadDotaMatches()
    },[token])



    return (
        <BasePage
            title={"DOTA2"}
            buttons={
                <div>
                    <div>
                        <Button
                            variant="contained"
                            onClick={()=>setCreateMatchPopup(true)}
                        >
                            Создать матч
                        </Button>
                    </div>
                </div>
            }
        >
            <div>

                <div>
                    {dotaMatches.map((el,i)=><DotaMatch matchSettings={el} key={i}/>)}
                </div>

                <div>

                    <Dota2CreateMatchPopup opened={createMatchPopup} setOpened={setCreateMatchPopup}/>
                </div>
            </div>


        </BasePage>
    )
}