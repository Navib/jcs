//HOMEPAGE SLIDER
import Swiper from 'swiper/dist/js/swiper.min.js';
import React from 'react';

function initializeSwiper(){
  var initializeSwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'custom',
      renderCustom: function (swiper, current, total) {

        var names = [
             {id:1 ,name:'Justin-1',src:'http://via.placeholder.com/100x100?text=Justin-1'},
             {id:2 ,name:'Justin-2',src:'http://via.placeholder.com/100x100?text=Justin-2'},
             {id:3 ,name:'Justin-3',src:'http://via.placeholder.com/100x100?text=Justin-3'},
             {id:4 ,name:'Justin-4',src:'http://via.placeholder.com/100x100?text=Justin-4'},
             {id:5 ,name:'Justin-5',src:'http://via.placeholder.com/100x100?text=Justin-5'},
          ];

       var text = "<span class='cs-picker' style='background-color:black;padding:20px;'>";
         $.each(names, function( key, value ) {
            console.log(value.src);
             if (current == key) {
               text += "<span style='border-top:1px solid green;margin-right:4px;color:green;padding:10px;'><img src="+value.src+" /></span>";
             } else {
               text += "<span style='border-top:1px solid white;margin-right:4px;color:white;padding:10px;'><img src="+value.src+" /></span>";
             }
         });
         text += "</span>";
         return text;
       }
      },
      mousewheel: {
      invert: true,
    },
  });
}
module.exports = initializeSwiper;
