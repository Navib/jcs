//HOMEPAGE SLIDER
import Swiper from 'swiper/dist/js/swiper.min.js';
import React from 'react';

function initializeSwiperTestimonial() {
  initializeSwiperTestimonial = new Swiper('.swiper-testimonial', {
      scrollbar: {
        el: '.swiper-scrollbar-testimonial',
        hide: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });


  return initializeSwiperTestimonial;

}

module.exports = initializeSwiperTestimonial;
