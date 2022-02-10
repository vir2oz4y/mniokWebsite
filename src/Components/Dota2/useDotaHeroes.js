import React, {useEffect, useState} from 'react';
import {UseAxios} from "../UseAxios/UseAxios";

const useDotaHeroes = () => {

    const {isLoading:heroesIsLoading, error, Send:getHeroes} = UseAxios({method: "get", url: "dota/heroes", isLoadingProps:true})

    const [heroes, setHeroes] = useState([])

    useEffect(()=>{
        getHeroes()
            .then(data=>setHeroes(data.dotaHeroes))
    },[])

    const agility = heroes.filter(el => el.type === "Ловкость")
    const strength = heroes.filter(el => el.type === "Сила")
    const intellect = heroes.filter(el => el.type === "Интеллект")

    return{
        agility,
        strength,
        intellect,
        heroesIsLoading
    }
};

export default useDotaHeroes;