import React from 'react'
import s from './App.module.css'
import {Outlet} from "react-router-dom";
import SelectLanguage from './components/SelectLanquage/SelectLanguage';


function App() {

    return (

        <div className={s.App}>
            <div className={s.wrapper}>
                <SelectLanguage/>
            </div>

            <Outlet/>
        </div>
    )
}

export default App
