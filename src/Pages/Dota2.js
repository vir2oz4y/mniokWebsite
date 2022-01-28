import {BasePage} from "./BasePage";
import {Button} from "@mui/material";
import {Dota2CreateMatchPopup} from "../Components/Popups/Dota2/Dota2CreateMatchPopup";
import {useState} from "react";

export const Dota2Page = () => {

    const[createMatchPopup, setCreateMatchPopup] = useState(false)


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

                </div>

                <div>

                    <Dota2CreateMatchPopup opened={createMatchPopup} setOpened={setCreateMatchPopup}/>
                </div>
            </div>


        </BasePage>
    )
}