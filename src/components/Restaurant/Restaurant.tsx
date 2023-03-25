import React, {useEffect, useState} from 'react';
import s from "../../App.module.css";
import {Table} from "../Table";
import {Slider} from "../Slider/Slider";
import {useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";


export type OrderType = {
    id: number
    key: string
    is_ready: boolean
}

const Restaurant = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [orders, setOrders] = useState<OrderType[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const interval = setInterval(() => {
            fetch(`https://online-kezek-test-production-5624.up.railway.app/api/restaurants/${params.id}/orders/`)
                .then(response => response.json())
                .then((data: any) => {
                    setOrders(data.orders)
                    setLoading(false)
                })
                .catch(error => console.log(error))
        }, 3000)

        return () => {
            clearInterval(interval)
        }
    }, [])


    const images = [
        {
            img_url: 'https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            description: 'Picture for marketing'
        },
        {
            img_url: 'https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg',
            description: 'Picture for marketing'
        },
        {
            img_url: 'https://news.climate.columbia.edu/wp-content/uploads/2021/04/mark-koch-KiRlN3jjVNU-unsplash-637x425.jpeg',
            description: 'Picture for marketing'
        },

    ]

    const inProgessOrders = orders.filter(o => !o.is_ready)
    const readyOrders = orders.filter(o => o.is_ready)

    const OnItemClick = (id: number, is_ready: boolean) => {
        fetch(`https://online-kezek-test-production-5624.up.railway.app/api/orders/${id}`, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                is_ready
            })
        })
    }

    const {t} = useTranslation()
    return (
        <div className={s.App}>
            <button onClick={()=> {
                navigate(-1)
            }}>{t('BACK')}</button>
            <Table orders={inProgessOrders} title={t('GETTING_READY')} status={'not_ready'} isLoading={loading} onClick={OnItemClick} />
            <Table orders={readyOrders} title={t('READY')} status={'ready'} isLoading={loading}  onClick={OnItemClick}/>
            <Slider slides={images}/>
        </div>
    )
}

export default Restaurant;