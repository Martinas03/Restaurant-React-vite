import React from 'react';
import {Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.css';
import s from './Slider.module.css'
import 'swiper/css/autoplay'

type SliderPropsType = {
    slides: any
}

export const Slider = (props: SliderPropsType) => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Autoplay]}
            style={{width: '500px'}}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{delay: 1000}}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {props.slides.map((slide: any) => {
               return <SwiperSlide >
                    <img className={s.img} src={slide.img_url} alt={slide.description}/>
                </SwiperSlide>
            })}
        </Swiper>
    );
};

