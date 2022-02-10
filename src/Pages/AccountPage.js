import {Button, CircularProgress, IconButton, Skeleton} from "@mui/material";
import {DotaMatch} from "../Components/Dota2/DotaMatch";
import {Dota2CreateMatchPopup} from "../Components/Popups/Dota2/Dota2CreateMatchPopup";
import {BasePage} from "./Main/BasePage";
import useAccount from "../Context";
import {Cloud} from "../Components/Cloud/Cloud";
import {SteamAccount} from "../Components/Steam/Steam";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {apiAxios} from "../Axios";
import {UseAxios} from "../Components/UseAxios/UseAxios";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {Loader} from "../Components/Loader/Loader";
import LoadingButton from "@mui/lab/LoadingButton";
//import {IconButton} from "../Components/Buttons/IconButton";

export const AccountPage = () => {

    const [steamInfo, setSteamInfo] = useState(null)

    const {tokenWithoutBasic} = useAccount()

    const {Send: signOut} = UseAxios({method: "get", url: "steam/signout"});

    const {isLoading: isSteamInfoLoading, Send: getSteamInfo}
        = UseAxios({method: "get", url: "steam/info", isLoadingProps:true})

    const {isLoading:isSteamInfoUpdateLoading, Send : updateSteamInfo}
        = UseAxios({method:"get", url:"steam/update"})

    useEffect(()=>{
         getSteamInfo()
            .then(setSteamInfo)
    }, [])



    const UpdateSteamInfo = () =>{
        updateSteamInfo()
            .then(setSteamInfo)
    }


    const SignOut = () =>{
        signOut()
            .then(()=>setSteamInfo(null))
    }

    return (
        <div>
            <BasePage
                title={"Настройки аккаунта"}
            >
                <div>

                    {isSteamInfoLoading ? <Loader/> :
                        <div>
                            <Cloud title={<div>STEAM</div>} rightSlot={steamInfo && <div className={"steam__buttons"}>

                                <IconButton
                                    onClick={UpdateSteamInfo}
                                    color="primary"
                                    aria-labelledby="Обновить информацию"
                                    component="span"
                                >
                                    <ChangeCircleIcon fontSize={"large"}/>
                                </IconButton>


                                <IconButton
                                    onClick={SignOut}
                                    color="primary"
                                    aria-label="upload picture"
                                    component="span"
                                >
                                    <ExitToAppIcon fontSize={"large"}/>
                                </IconButton>

                            </div>}
                            >
                                <div>
                                    {steamInfo ?
                                        <div className={"steam__login_info"}>
                                            <SteamAccount {...steamInfo} />
                                            <div>
                                                Вы авторизированы под этим аккаунтом
                                            </div>
                                        </div>
                                        :

                                        <div style={{display: "flex"}}>
                                            <div>
                                                <p>
                                                    Для дальнейшего взаимодействия с сервисом необходимо авторизовать свой
                                                    учетный аккаунт Steam
                                                </p>
                                                <p>
                                                    После Авторизации вам будут доступны матчи по Dota2
                                                </p>
                                            </div>
                                            <div style={{
                                                marginLeft: "1em",
                                                display: "flex",
                                                justifyContent: "center",
                                                flex: "1",
                                                alignItems: "center"
                                            }}>
                                                <a href={`https://localhost:7041/steam/signin?authToken=${tokenWithoutBasic()}`}>
                                                    <img
                                                        src="https://community.cloudflare.steamstatic.com/public/images/signinthroughsteam/sits_02.png"
                                                        width="109"
                                                        height="66"
                                                        border="0"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    }

                                </div>
                            </Cloud>
                        </div>
                        }


                </div>


            </BasePage>
        </div>
    )
}