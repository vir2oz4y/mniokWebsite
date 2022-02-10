import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {H2} from "../H/H2";
import {Button, IconButton} from "@mui/material";
import {Cloud} from "../Cloud/Cloud";
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import {UseAxios} from "../UseAxios/UseAxios";
import Confirmation from "../Confirmation/Confirmation";


const DotaMatchForSettings = ({matchSettings, onChange, isActiveMatches}) => {

    const [confirmOpened, setConfirmOpened] = useState(false)

    const ratingElementText = () => {
        switch (matchSettings.rating.ratingType) {
            case "Without": {
                return <div>
                    Любой
                </div>
            }
            case "FromTo": {
                return <div>
                    От {matchSettings.rating.fromTo.from} до {matchSettings.rating.fromTo.to} рейтинга
                </div>
            }
            case "To": {
                return <div>
                    До {matchSettings.rating.fromTo.to} рейтинга
                </div>
            }

        }
    }

    const heroesElement = () => {

        let selectedHeroes = matchSettings.hero.selectedHeroes;

        const length = selectedHeroes.length;
        const countAside = selectedHeroes.length - 10;

        if (length > 10)
            selectedHeroes = [...selectedHeroes.slice(0, 10)]

        switch (matchSettings.hero.heroType) {
            case "Any": {
                return <div>
                    Все
                </div>
            }
            case "Definite": {
                return <div
                    style={{display: "flex", alignItems: "center", flexWrap: "wrap"}}
                >
                    {selectedHeroes.map((el, i) =>
                        <img key={i} style={{width: "2.4em", height: "1.4em"}} src={el.imgUrl} alt=""/>)}

                    {countAside > 0 && <div style={{marginLeft: ".3em"}}>
                        и еще {countAside} героев
                    </div>}
                </div>
            }

        }
    }

    const getMatchStatus = () =>{
        switch (matchSettings?.dotaMatchStatus){
            case 0:
                return "Ожидает соперников"
            case 1:
                return "Ожидает приглашения в лобби"
            case 2:
                return "Ожидает начало матча"
            case 3:
                return "Матч закончен"
            case 4:
                return "Отменен вручную"
        }
    }

    const {isLoading: isDeleteLoading, Send: deleteMatch} = UseAxios({method:"delete", url:`dota/match/${matchSettings.matchId}`})

    const DeleteMatch = () =>{
        deleteMatch()
            .then(()=>onChange?.())
    }

    console.log(matchSettings)


    return (
        <Cloud rightSlot={
            isActiveMatches && <div style={{display:"flex"}}>
                {/*<div>*/}
                {/*    <IconButton*/}
                {/*        color="primary"*/}
                {/*        aria-labelledby="Изменить"*/}
                {/*        component="span"*/}
                {/*    >*/}
                {/*        <SettingsIcon fontSize={"large"}/>*/}
                {/*    </IconButton>*/}
                {/*</div>*/}

                <div>
                    <IconButton
                        onClick={()=>setConfirmOpened(true)}
                        color="primary"
                        aria-labelledby="Удалить"
                        component="span"
                    >
                        <DeleteIcon fontSize={"large"}/>
                    </IconButton>
                </div>
            </div>
        }>
            <div className="dota_element__content">

                <div className={"dota_element__content__element"}>
                    <div>
                        Статус
                    </div>
                    <div>
                        {getMatchStatus()}
                    </div>
                </div>

                <div className={"dota_element__content__element"}>
                    <div>
                        Рейтинг
                    </div>
                    <div>
                        {ratingElementText()}
                    </div>
                </div>

                <div className={"dota_element__content__element"}>
                    <div>
                        Стоимость участия
                    </div>
                    <div>
                        {matchSettings.payment}
                    </div>
                </div>

                <div className={"dota_element__content__element"}>
                    <div>
                        Доступные герои
                    </div>
                    <div>
                        {heroesElement()}
                    </div>
                </div>
            </div>

            <Confirmation
                opened={confirmOpened}
                setOpened={setConfirmOpened}
                message={"Сделать матч не активным?"}
                onSuccessClick={DeleteMatch}
            />
        </Cloud>
    )
};

export default DotaMatchForSettings;