import {Popup} from "../../Popup/Popup";
import {useEffect, useState} from "react";
import {UseAxios} from "../../UseAxios/UseAxios";
import "./SelectDota2HeroPopup.scss"
import {Button} from "@mui/material";

export const SelectDota2HeroPopup = ({opened, setOpened}) =>{

    const { isLoading, error, Send } = UseAxios({method:"get", url:"dota/heroes"})
    const [heroes, setHeroes] = useState([])

    const agility = heroes.filter(el=>el.type === "Ловкость")
    const strength = heroes.filter(el=>el.type === "Сила")
    const intellect = heroes.filter(el=>el.type === "Интеллект")

    useEffect(()=>{
        Send()
            .then((data)=>{
                setHeroes(data.dotaHeroes)
            })
    },[])

    return(
        <Popup opened={opened} setOpened={setOpened} header={"Выбор героя"}>
            <div className={"select_hero_popup"}>

                <div>
                    <div>
                        <div>
                            Сила
                        </div>
                        <div>
                            {strength.map((el, i)=><div key={i}>
                                <div style={{margin:"5px"}}>
                                    <img src={el.imgUrl} alt="" style={{height:"25px", width:"50px"}}/>
                                </div>

                            </div>)}
                        </div>

                    </div>

                    <div>
                        <div>

                            Ловкость
                        </div>
                        <div>
                            {agility.map((el, i)=><div key={i}>
                                <div style={{margin:"5px"}}>
                                    <img src={el.imgUrl} alt="" style={{height:"25px", width:"50px"}}/>
                                </div>

                            </div>)}
                        </div>
                    </div>


                    <div>
                        <div>
                            Интеллект
                        </div>
                        <div>
                            {intellect.map((el, i)=><div key={i}>
                                <div style={{margin:"5px"}}>
                                    <img src={el.imgUrl} alt="" style={{height:"25px", width:"50px"}}/>
                                </div>

                            </div>)}
                        </div>
                    </div>
                </div>

                <div>
                    <Button
                        variant="contained"

                    >
                        Выбрать
                    </Button>
                </div>
            </div>
        </Popup>
    )
}