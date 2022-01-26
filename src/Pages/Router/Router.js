import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {Main} from "../Main";

export const Router = () =>{

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<div>Kek v1</div>} />
                    <Route path="dota" element={<div>Kek v2</div>}>
{/*                        <Route path=":teamId" element={<Team />} />
                        <Route path="new" element={<NewTeamForm />} />
                        <Route index element={<LeagueStandings />} />*/}
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}