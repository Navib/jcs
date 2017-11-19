import Swiper from 'swiper/dist/js/swiper.min.js';
import React from 'react';
import initializeSwiper, { initializeSwiper } from './initializeSwiper';

function slideToSlide() {
  initializeSwiper().slideTo(getSlideIndexByClass('my-class'));

  function getSlideIndexByClass(className) {
    var index = 0;
    $.each($('.cs-picker').children(), function(i, item) {
      if ($(item)) {
        index = i;
        return false;
      }
    });
    return index;
  }
}

module.exports = slideToSlide;
