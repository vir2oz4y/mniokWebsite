import {Popup} from "../../Popup/Popup";
import "./Dota2CreateMatchPopup.scss";
import {Button, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import Input from "../../Input/Input";
import {SelectDota2HeroPopup} from "./SelectDota2HeroPopup";
import {useState} from "react";

export const Dota2CreateMatchPopup = ({opened, setOpened}) =>{

    const [selectHeroPopup, setSelectHeroPopup] = useState(false)

    return(
        <Popup opened={opened} setOpened={setOpened} header={"Создание матча"}>
            <div className={"dota2_create_match"}>

                <Input
                    required
                    label="Стоимость участия"
                />

                <Button
                    variant="contained"
                    onClick={()=>setSelectHeroPopup(true)}
                >
                    Выбрать героя
                </Button>

                <div className={"dota2_create_match__element"}>
                    <div className={"dota2_create_match__element__title"}>
                        Тип матча:
                    </div>
                    <div className={"dota2_create_match__element__form"}>
                        <RadioGroup
                            defaultValue="1x1"
                        >
                            <FormControlLabel value="1x1" control={<Radio />} label="1x1" />
                            <FormControlLabel value="5x5" control={<Radio />} label="5x5" />
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
                        >
                            <FormControlLabel value="without" control={<Radio />} label="Без ограничений" />
                            <FormControlLabel value="fromTo" control={<Radio />} label="От - До" />
                            <FormControlLabel value="to" control={<Radio />} label="До" />
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
                        >
                            <FormControlLabel value="any" control={<Radio />} label="Без ограничений" />
                            <FormControlLabel value="definite" control={<Radio />} label="Определенный герой" />
                        </RadioGroup>
                    </div>
                </div>




                {selectHeroPopup && <SelectDota2HeroPopup opened={selectHeroPopup} setOpened={setSelectHeroPopup}/>}
            </div>

        </Popup>
    )
}