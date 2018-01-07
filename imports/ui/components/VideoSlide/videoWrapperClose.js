import {TweenMax, Power2, TimelineLite} from "gsap";

function videoWrapperClose() {
  $('.exit-video-slide').on('click', function() {
    setTimeout(function() {
      let vidSlideWraper = $('.video-slide-wrapper');
      TweenMax.to(vidSlideWraper, .6, {
        width: "0%",
        ease: Quart.easeInOut
      });
    }, 800)
    $('.exit-video-slide').css({});
    $('.video-container').css({});

//Media Item on Close
    TweenMax.staggerTo(".jcs-media-item", .3, {
      opacity: 0,
      ease: Quart.easeInOut
    }, 0.4);
  });

}

module.exports = videoWrapperClose;
