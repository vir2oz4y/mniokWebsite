import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {Main} from "../Main";
import {Login} from "../Login";
import {Dota2Page} from "../Dota2";

export const Router = () =>{

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Main />}>
                    <Route index element={<div>Kek v1</div>} />
                    <Route path="dota2" element={<Dota2Page/>}>
{/*                        <Route path=":teamId" element={<Team />} />
                        <Route path="new" element={<NewTeamForm />} />
                        <Route index element={<LeagueStandings />} />*/}
                    </Route>

                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Login/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}