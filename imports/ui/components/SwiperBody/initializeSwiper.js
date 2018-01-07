//HOMEPAGE SLIDER
import Swiper from 'swiper/dist/js/swiper.min.js';
import React from 'react';

function initializeSwiper(){
  initializeSwiperMain = new Swiper ('.main-swiper-container', {
    direction: 'vertical',
    pagination: {
      el: '.main-swiper-pagination',
      type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      mousewheel: {
      invert: true,
      },
  });

  return initializeSwiperMain;

}



module.exports = initializeSwiper;
