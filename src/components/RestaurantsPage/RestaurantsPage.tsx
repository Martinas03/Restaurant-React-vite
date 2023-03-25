import React, {useEffect, useState} from 'react';
import s from "./RestaurantsPage.module.css";
import {useNavigate} from "react-router-dom";

import {Table} from "../Table";
import {Slider} from "../Slider/Slider";
import {useTranslation} from "react-i18next";

export type RestaurantTypeType = {
    id: number
    title: string
    img: string
    url: boolean
}
export const RestaurantsPage = () => {
    const [restaurants, setRestaurants] = useState<RestaurantTypeType[]>([])
    const navigate = useNavigate()

    useEffect(() => {


        fetch(`https://online-kezek-test-production-5624.up.railway.app/api/restaurants/`)
            .then(response => response.json())
            .then((data: any) => {
                setRestaurants(data)
            })
            .catch(error => console.log(error))
    }, [])

const {t} = useTranslation()
    return (
        <div className={s.wrapper}>
            {

                restaurants.map(r => {
                    return <div key={r.id}>
                        <div className={s.item}>
                            <h1>{r.title}</h1>
                            <img src={r.img} style={{width: '350px', height: '200px', objectFit: 'cover'}}/>
                 <button data-translate={'go_to_restaurants'} onClick={() => {navigate(`${r.id}`)}}>
                     {t('GO_TO_RESTAURANTS')}
                 </button>
                        </div>
                    </div>
                })
            }

        </div>
    )
}

