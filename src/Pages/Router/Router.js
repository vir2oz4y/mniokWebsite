import {
    BrowserRouter,
    Routes,
    Route, Outlet
} from "react-router-dom";
import {Main} from "../Main/Main";
import {LoginPage} from "../LoginPage";
import {Dota2Page} from "../Dota2Page";
import {AccountPage} from "../AccountPage";
import DotaMatch from "../DotaMatch";
import AccountDotaMatches from "../AccountDotaMatches";

export const Router = () =>{

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Main />}>
                    <Route index element={<div>Kek v1</div>} />

                    <Route path="dota2" element={<Dota2Page/>}/>

                    <Route path={"dota2/match/:matchId"} element={<DotaMatch/>}/>


                    <Route path="account/settings" element={<AccountPage/>}/>
                    <Route path={"account/dota/matches"} element={<AccountDotaMatches/>} />


                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="register" element={<LoginPage/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}