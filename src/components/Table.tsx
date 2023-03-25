import React from 'react';
import s from './Table.module.css'

import Lottie from "lottie-react";
import loading from '/src/assets/97952-loading-animation-blue.json'
import notFound from "/src/assets/93134-not-found.json";
import {OrderType} from "./Restaurant/Restaurant";

type TablePropsType = {
    orders: OrderType[]
    status: 'ready' | 'not_ready'
    title: string
    isLoading: boolean
    onClick: (id: number, is_ready: boolean) => void
}

export const Table = (props: TablePropsType) => {
    const tableStyle = {
        ready: {
            border: '1px solid green'
        },
        not_ready: {
            border: '1px solid orange'
        },
    }
    const orders = props.orders.length ? (
        props.orders.map((order) =>
            <div key={order.id} className={s.item}>
                <button style={tableStyle[props.status]} onClick={()=>props.onClick(order.id, !order.is_ready)}>{order.key}</button>
            </div>
        )
    ) : (
        <Lottie animationData={notFound}/>
    )

    return (
        <div className={s.table}>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div className={props.isLoading || !props.orders.length ? s.flex : s.grid} style={tableStyle[props.status]}>
                {
                    props.isLoading ? <Lottie animationData={loading}/> : orders
                }
            </div>

        </div>
    );
};

