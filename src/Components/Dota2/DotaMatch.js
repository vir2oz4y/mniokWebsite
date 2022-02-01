import "./DotaElement.scss"

import {H2} from "../H/H2";
import {Button} from "@mui/material";

export const DotaMatch = ({matchSettings}) =>{


    const ratingElementText = () =>{
         switch (matchSettings.rating.ratingType){
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

        }
    }

    const heroesElement = () =>{

        let selectedHeroes = matchSettings.hero.selectedHeroes;

        const length = selectedHeroes.length;
        const countAside = selectedHeroes.length - 10;

        if (length > 10)
            selectedHeroes = [...selectedHeroes.slice(0, 10)]



        switch (matchSettings.hero.heroType){
            case "Any":{
                return <div>
                    Все
                </div>
            }
            case "Definite":{
                return <div
                    style={{display: "flex", alignItems: "center", flexWrap:"wrap"}}
                >
                    {selectedHeroes.map((el,i)=>
                        <img key={i} style={{width: "2.4em", height: "1.4em"}} src={el.imgUrl} alt=""/>)}

                    {countAside > 0 && <div style={{marginLeft: ".3em"}}>
                        и еще {countAside} героев
                    </div>}
                </div>
            }

        }
    }

    return(
        <div className={"dota_element"}>
            <div className={"dota_element__title"}>
                <H2>{matchSettings.userName}</H2>
                <Button variant="contained">
                    Принять участие
                </Button>
            </div>
            <div className="dota_element__content">
                {/*<div className={"dota_element__content__element"}>*/}
                {/*    <div>*/}
                {/*        Тип матча*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        1Х1*/}
                {/*    </div>*/}
                {/*</div>*/}

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
                        {/*<CurrencyRubleIcon/>*/}
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
        </div>
    )
}