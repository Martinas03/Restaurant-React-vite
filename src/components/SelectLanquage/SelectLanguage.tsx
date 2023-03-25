import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {GrLanguage} from 'react-icons/gr'
import s from './SelectLanguage.module.css'

const SelectLanguage = () => {
    const [value, setValue] = useState('ru')
    const {i18n} = useTranslation()
    return (<div className={s.wrapper}>
            <i>
                <GrLanguage/>
            </i>

            <select className={s.select} value={value} onChange={(e) => {
                setValue(e.currentTarget.value)
                i18n.changeLanguage(e.currentTarget.value)
            }}>
                <option value="ru">ru</option>
                <option value="kz">kz</option>
                <option value="en">en</option>
            </select>
        </div>

    );
};

export default SelectLanguage;