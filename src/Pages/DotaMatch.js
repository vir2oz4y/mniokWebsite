import React, {useEffect, useState} from 'react';
import {Button, Skeleton} from "@mui/material";
import {Dota2CreateMatchPopup} from "../Components/Popups/Dota2/Dota2CreateMatchPopup";
import {BasePage} from "./Main/BasePage";
import {useParams} from "react-router-dom";
import {Cloud} from "../Components/Cloud/Cloud";
import {UseAxios} from "../Components/UseAxios/UseAxios";
import {apiAxios} from "../Axios";
import {Loader} from "../Components/Loader/Loader";
import classNames from "classnames";
import useDotaHeroes from "../Components/Dota2/useDotaHeroes";
import useAccount from "../Context";

const DotaMatch = () => {

    const {matchId} = useParams()
    const [match, setMatch] = useState({})
    const {UpdateAccountInfo} = useAccount()
    const {isLoading: matchIsLoading, Send} =
        UseAxios({method: "get", url: `dota/match/${matchId}`, isLoadingProps:true})

    const {isLoading: takeParticipationLoading, alert, Send: takeParticipation} =
        UseAxios({method: "post", url: "dota/match/takeParticipation", data: {matchId}})


    const {heroesIsLoading, agility, intellect, strength} = useDotaHeroes()

    // Достали информацию о матче
    useEffect(() => {
        Send()
            .then((data) => setMatch(data.match))
    }, [])

    const TakeParticipation = () => {
        takeParticipation()
            .then(UpdateAccountInfo)
    }


    const ratingElementText = (matchSettings) =>{
        if(!matchSettings)
            return <div>

            </div>

        switch (matchSettings?.rating.ratingType){
            case "Without":{
                return <div>
                    Любой
                </div>
            }
            case "FromTo":{
                return <div>
                    От {matchSettings.rating.fromTo.from} до {matchSettings.rating.fromTo.to} рейтинга
                </div>
            }
            case "To":{
                return <div>
                    До {matchSettings.rating.fromTo.to} рейтинга
                </div>
            }
            default:{
                return <div>

                </div>
            }

        }
    }

    const SelectHeroImg = (heroes) => {
        const allSelected =  match?.hero?.heroType === "Any"

        return (
            <div>
                {heroes.map((hero, i) =>
                    <div key={i} className={classNames({selected: allSelected || match?.hero?.selectedHeroes?.some(el=>el.key === hero.key)})}>
                        <div>
                            <img src={hero.imgUrl} alt="" />
                        </div>

                    </div>)}
            </div>
        )
    }

    return (
        <BasePage
            title={"DOTA2"}
        >
            <div>

                {matchIsLoading ? <Loader/>
                    :
                    <Cloud>
                        <div>
                            <div>
                                match {matchId}
                            </div>


                            <div>
                                На данной странице написана информация о матче, к которому вы проявили интерес
                            </div>

                            <div>
                                <div>
                                    Стоимость участия:{match.payment}
                                </div>

                                <div>
                                    Сумма выигрыша: {match.payment * 2}
                                </div>

                                <div>
                                    Ограничение входа:
                                </div>

                                <div>
                                    Ограничение по героям
                                    <div>
                                        <div className={"dota_heroes"}>

                                            <div>
                                                <div>
                                                    <div>
                                                        Сила
                                                    </div>

                                                    {heroesIsLoading && <Skeleton variant="rectangular" width={375} height={368} />}

                                                    {SelectHeroImg(strength)}

                                                </div>

                                                <div>
                                                    <div>

                                                        Ловкость
                                                    </div>

                                                    {heroesIsLoading && <Skeleton variant="rectangular" width={375} height={368} />}

                                                    {SelectHeroImg(agility)}

                                                </div>


                                                <div>
                                                    <div>
                                                        Интеллект
                                                    </div>

                                                    {heroesIsLoading && <Skeleton variant="rectangular" width={375} height={368} />}

                                                    {SelectHeroImg(intellect)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    После того, как вы нажмете кнопку принять участие,
                                    с вашего счета будет списана плата в размере N руб.
                                    После этого в DOTA2 вам придет приглашение в закрытое лобби. Вам нужно его принять.
                                    После принятия приглашения вы будете перемещены в лобби.
                                    В чате лобби начнется отчет до начала матча.
                                    После окончания отчета матч будет запущен.
                                    Если в настройках данного матча есть огранчиние по героям, то вы и ваш соперник
                                    обязаны взять героя, который есть в этом списке. Если вы или ваш соперник взяли
                                    героя,
                                    которого нет в списке, то этому участнику засчитывается поражение
                                    (Если оба игрока взяли недоступных героев, то проигравшими числются оба игрока).

                                    После того, как матч будет завершен и будет выявлен победитель,
                                    личный счет участника пополнится на сумму выигрываша.
                                </div>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={TakeParticipation}
                                    >
                                        Принять участие
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Cloud>
                }

            </div>

            {alert}
        </BasePage>
    );
};

export default DotaMatch;