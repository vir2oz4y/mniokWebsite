import {Popup} from "../../Popup/Popup";
import "./Dota2CreateMatchPopup.scss";
import {Button, FormControlLabel, InputAdornment, Radio, RadioGroup} from "@mui/material";
import Input from "../../Input/Input";
import {SelectDota2HeroPopup} from "./SelectDota2HeroPopup";
import {useState} from "react";
import {SetStateObject} from "../../Helper/SetStateObject";



export const Dota2CreateMatchPopup = ({opened, setOpened}) =>{

    const [selectHeroPopup, setSelectHeroPopup] = useState(false)
    const [matchSettings, setMatchSettings] = useState({
        payment:0,
        matchType:"1x1",
        rating: {
            ratingType:"without",
            fromTo:{
                 from:0,
                 to:7000,
            }
        },
        hero:{
            heroType:"any",
            selectedHeroes:[]
        }
    })


    return(
        <Popup opened={opened} setOpened={setOpened} header={"Создание матча"}>
            <div className={"dota2_create_match"}>

                <Input
                    required
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    label="Стоимость участия"
                    value={matchSettings.payment}
                    onInput={(val)=>SetStateObject(val , setMatchSettings, "payment")}
                />


                <div className={"dota2_create_match__element"}>
                    <div className={"dota2_create_match__element__title"}>
                        Тип матча:
                    </div>
                    <div className={"dota2_create_match__element__form"}>
                        <RadioGroup
                            value={matchSettings.matchType}
                            onChange={(e)=>SetStateObject(e.target.value , setMatchSettings, "matchType")}
                        >
                            <FormControlLabel value="1x1" control={<Radio />} label="1x1" />
                            {/*<FormControlLabel value="5x5" control={<Radio />} label="5x5" />*/}
                        </RadioGroup>
                    </div>
                </div>


                <div className={"dota2_create_match__element"}>
                    <div className={"dota2_create_match__element__title"}>
                        Рейтинг:
                    </div>
                    <div className={"dota2_create_match__element__form"}>
                        <RadioGroup
                            defaultValue="without"
                            value={matchSettings.rating.ratingType}
                            onChange={(e)=>SetStateObject(e.target.value , setMatchSettings, "ratingType")}
                        >

                            <div>
                                <FormControlLabel value="without" control={<Radio />} label="Без ограничений" />

                                {matchSettings.rating.ratingType === "without" && <div className={"description"}>
                                    <p>Ограничений по рейтингу не будет.</p>
                                </div>}
                            </div>

                            <div>
                                <FormControlLabel value="to" control={<Radio />} label="До" />

                                {matchSettings.rating.ratingType === "to" && <div className={"description"}>
                                    <p>Будет применено ограниние по рейтингу при подборе соперников </p>
                                    <p>Ограничение от 0 до X</p>

                                    <Input
                                        required
                                        label="До"
                                    />
                                </div>}

                            </div>

                            <div>
                                <FormControlLabel value="fromTo" control={<Radio />} label="От - До" />

                                {matchSettings.rating.ratingType === "fromTo" && <div className={"description"}>
                                    <p>Будет применено ограниние по рейтингу при подборе соперников </p>

                                    <Input
                                        required
                                        label="От"
                                    />

                                    <Input
                                        required
                                        label="До"
                                    />
                                </div>}
                            </div>

                        </RadioGroup>
                    </div>
                </div>


                <div className={"dota2_create_match__element"}>
                    <div className={"dota2_create_match__element__title"}>
                        Герой:
                    </div>
                    <div className={"dota2_create_match__element__form"}>
                        <RadioGroup
                            defaultValue="any"
                            value={matchSettings.hero.heroType}
                            onChange={(e)=>SetStateObject(e.target.value , setMatchSettings, "heroType")}
                        >
                            <div>
                                <FormControlLabel value="any" control={<Radio />} label="Без ограничений" />

                                {matchSettings.hero.heroType === "any" && <div className={"description"}>
                                    <p>Вы можете играть на любом герое против любого героя.</p>
                                    <p>Ограничений по выбору героев НЕТ.</p>
                                </div>}
                            </div>

                            <div>
                                <FormControlLabel value="definite" control={<Radio />} label="Определенный герой" />

                                {matchSettings.hero.heroType === "definite" && <div className={"description"}>
                                    <p>Вы можете выбрать определенный пул героев на которых будет проведен матч</p>
                                    <p>Если вы веберете нескольких героев, то вы и соперник сможете играть только на тех героях, которых вы выбралии</p>
                                    <p>Если вы выберете только одного героя, то вы и соперник будуте играть только на нем</p>

                                    {matchSettings.hero.selectedHeroes.length > 0 && <div>
                                        <div style={{marginBottom:".5em"}}>
                                            Выбратнные герои:
                                        </div>
                                        <div style={{display: 'flex', flexWrap:"wrap"}}>
                                            {matchSettings.hero.selectedHeroes.map((el,i)=>
                                                <div style={{marginRight:"5px"}}>
                                                    <img src={el.imgUrl} alt="" style={{width:"40px", height:"20px"}}/>
                                                </div>)}
                                        </div>

                                    </div>}

                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                        <Button
                                            variant="contained"
                                            onClick={()=>setSelectHeroPopup(true)}
                                        >
                                            Выбрать героя
                                        </Button>
                                    </div>


                                </div>}
                            </div>

                        </RadioGroup>
                    </div>
                </div>


                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button
                        variant="contained"
                        onClick={()=>setSelectHeroPopup(true)}
                    >
                        Создать
                    </Button>
                </div>


                {selectHeroPopup && <SelectDota2HeroPopup
                    opened={selectHeroPopup}
                    setOpened={setSelectHeroPopup}
                    onHeroSelect={(heroes)=>SetStateObject(heroes , setMatchSettings, "selectedHeroes")}
                    selectedHeroesProp={matchSettings.hero.selectedHeroes}
                />}
            </div>

        </Popup>
    )
}