import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css'

import shoe from '../../../imgage/shoe.png'

import nike6 from '../../../imgage/Banner/Nike6'
import nike7 from '../../../imgage/Banner/Nike7.jpg'
import nike8 from '../../../imgage/Banner/Nike8.jpg'
import nike9 from '../../../imgage/Banner/Nike9.webp'
import nike10 from '../../../imgage/Banner/Nike10.jpg'
import nike11 from '../../../imgage/Banner/Nike11.jpg'
import nike12 from '../../../imgage/Banner/quancao.png'
import bi from '../../../imgage/bi.png'
import {Carousel} from 'antd'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,Autoplay } from "swiper";
Banner.propTypes = {
    
};

function Banner(props) {
    const dataSlider=[
        {
            imgNike:nike6
        },
        {
            imgNike:nike11
        },
        {
            imgNike:nike12
        }
        ,
        {
            imgNike:nike10
        }
        ,
    ]
   
    return (
  
    <>
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay,Pagination, Navigation]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
    }}
      className="mySwiper"
    >

      {dataSlider&&dataSlider.map((imgSlider,index)=>(
        
        <SwiperSlide className='SwiperSlideContent' key={index}><img src={imgSlider.imgNike}/></SwiperSlide>
      ))}  
    </Swiper>
    {
    
    
   
   }
  </>
     
    );
}

export default Banner;