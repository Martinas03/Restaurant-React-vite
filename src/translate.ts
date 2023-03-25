import React from "react";
export const lanquage = 'kz'
import en from './assets/i18n/en.json'
import ru from './assets/i18n/ru.json'
import kz from './assets/i18n/kz.json'
import {initReactI18next} from "react-i18next";
import i18n from "i18next";


const resources = {
    en: {
        translation: en
    },
        ru: {
        translation: ru
    },
            kz: {
        translation: kz
    },

}

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        resources,
        detection: {
            order: ['htmlTag', 'localStorage', 'cookie', 'path', 'subdomain'],
            caches: ['localStorage'],
        },
        react: {useSuspense: false},
        interpolation: {
            escapeValue: false
        },
    });
// document.addEventListener('DOMContentLoaded', ()=> {
//     setTimeout(() => {
//         const tags = document.querySelectorAll('[data-translate]')
//         tags.forEach((el)=> {
//             // @ts-ignore
//             el.innerText = texts[lanquage][el.dataset.translate]
//         })
//     }, 1000)
// })