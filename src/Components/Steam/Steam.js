import "./Steam.scss"

export const SteamAccount = ({nickname, imgHash}) =>{
    return(
        <div className={"steam_account"}>
            <div className={"steam_account__image_block"}>
                <div
                    className={"steam_account__image_block__img"}
                    style={{backgroundImage:`url(https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/7d/${imgHash}_full.jpg`}}
                >

                </div>
            </div>

            <div>
                {nickname}
            </div>

        </div>
    )
}