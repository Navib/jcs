//HOMEPAGE SLIDER
import Swiper from 'swiper/dist/js/swiper.min.js';
import React from 'react';

function initializeSwiper(){
  initializeSwiperMain = new Swiper ('.swiper-container', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      },
      mousewheel: {
      invert: true,
    },

  });

  return initializeSwiperMain;

}



module.exports = initializeSwiper;
