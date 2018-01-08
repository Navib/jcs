import {TweenMax, Power2, TimelineLite} from "gsap";

function videoWrapperClose() {
  $('.exit-video-slide').on('click', function(e) {
      let speed = 1.0;
      e.preventDefault();
      let preloaderWrapper = $('.ShowPreloader');
      TweenMax.to(preloaderWrapper, speed, {
        top: "0",
        visibility: 'visible',
        ease: Quart.easeInOut
      });
      setTimeout(function() {
        TweenMax.to(preloaderWrapper, speed, {
          top: "-100%",
          ease: Quart.easeInOut
        });
      },3000);
      setTimeout(function() {
        TweenMax.to(preloaderWrapper, speed, {
          visibility: "hidden",
          ease: Quart.easeInOut
        });
      },3600);
      setTimeout(function() {
        FlowRouter.go('/');
      },4000);
    });
}

module.exports = videoWrapperClose;
