import React, {useEffect, useState} from 'react';
import {BasePage} from "./Main/BasePage";
import {Button, Switch} from "@mui/material";
import Switcher from "../Components/Switcher/Switcher";
import {apiAxios} from "../Axios";
import {data} from "browserslist";
import {UseAxios} from "../Components/UseAxios/UseAxios";
import {DotaMatch} from "../Components/Dota2/DotaMatch";
import DotaMatchForSettings from "../Components/Dota2/DotaMatchForSettings";
import {Loader} from "../Components/Loader/Loader";

const AccountDotaMatches = () => {

    const [isActiveMatches, setIsActiveMatches] = useState(true)
    const [dotaMatches, setDotaMatches] = useState([])
    const {isLoading:matchesIsLoading, Send:getMatches} = UseAxios({method:"post",url:"dota/matches/byUser", data:{isActiveMatches}})

    const GetMatches = () =>{
        getMatches()
            .then(data=>setDotaMatches(data.matches))
    }

    useEffect(()=>{
        GetMatches()
    },[isActiveMatches])

    return (
        <BasePage
            title={"Созданные вами матчи"}
            buttons={
                <div>
                    <div>
                        <Switcher
                            leftText={"История"}
                            rightText={"Активные"}
                            value={isActiveMatches}
                            onChange={(val)=>setIsActiveMatches(val)}
                        />
                    </div>
                </div>
            }
        >
            <div>
                {matchesIsLoading ? <Loader/> :
                    <div>
                        {dotaMatches.map((el, i) => <DotaMatchForSettings isActiveMatches={isActiveMatches} onChange={GetMatches} matchSettings={el} key={i}/>)}
                    </div>
                }
            </div>
        </BasePage>
    );
};

export default AccountDotaMatches;