//VIDEO PAGE SLIDER
import Swiper from 'swiper/dist/js/swiper.min.js';
import React from 'react';

function initializeSwiper3d(){
  var swiper3d = new Swiper('.swiper-3d-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : false,
    },
    pagination: {
      el: '.swiper-3d-pagination',
    },
    loop:false,
  });

  return swiper3d;

}



module.exports = initializeSwiper3d;
