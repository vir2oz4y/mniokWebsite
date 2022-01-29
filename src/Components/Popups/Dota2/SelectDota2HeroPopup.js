import {Popup} from "../../Popup/Popup";
import {useEffect, useState} from "react";
import {UseAxios} from "../../UseAxios/UseAxios";
import "./SelectDota2HeroPopup.scss"
import {Button, Skeleton} from "@mui/material";
import classNames from "classnames";

export const SelectDota2HeroPopup = ({opened, setOpened, onHeroSelect, selectedHeroesProp}) => {

    const {isLoading, error, Send} = UseAxios({method: "get", url: "dota/heroes"})

    const [selectedHeroes, setSelectedHeroes] = useState(selectedHeroesProp)

    const [heroes, setHeroes] = useState([])

    const agility = heroes.filter(el => el.type === "Ловкость")
    const strength = heroes.filter(el => el.type === "Сила")
    const intellect = heroes.filter(el => el.type === "Интеллект")

    useEffect(() => {
        Send()
            .then((data) => {
                setHeroes(data.dotaHeroes)
            })
    }, [])

    const SelectHero = (hero) =>{
        if (selectedHeroes.some(el=>el.key === hero.key)){
            setSelectedHeroes([...selectedHeroes.filter(el=>el.key !== hero.key)])
        }
        else setSelectedHeroes([...selectedHeroes, hero])
    }

    const SelectHeroImg = (heroes) => {

        const images = heroes.map((el, i) =>
            <div key={i}
                 className={classNames({selected: selectedHeroes.some(e=>e.name === el.name)})}
                 style={{padding: "5px"}}
                 onClick={()=>SelectHero(el)}
            >
                <div>
                    <img src={el.imgUrl} alt="" />
                </div>

            </div>)

        return (
            <div>
                {images}
            </div>
        )
    }


    return (
        <Popup opened={opened} setOpened={setOpened} header={"Выбор героя"}>
            <div className={"select_hero_popup"}>

                <div>
                    <div>
                        <div>
                            Сила
                        </div>

                        {isLoading && <Skeleton variant="rectangular" width={375} height={368} />}

                        {SelectHeroImg(strength)}

                    </div>

                    <div>
                        <div>

                            Ловкость
                        </div>

                        {isLoading && <Skeleton variant="rectangular" width={375} height={368} />}

                        {SelectHeroImg(agility)}

                    </div>


                    <div>
                        <div>
                            Интеллект
                        </div>

                        {isLoading && <Skeleton variant="rectangular" width={375} height={368} />}

                        {SelectHeroImg(intellect)}
                    </div>
                </div>

                <div>
                    <Button
                        variant="contained"
                        onClick={()=>{
                            onHeroSelect?.(selectedHeroes)
                            setOpened(false)
                        }}
                    >
                        Выбрать
                    </Button>
                </div>
            </div>
        </Popup>
    )
}