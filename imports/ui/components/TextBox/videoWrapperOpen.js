import {TweenMax, Power2, TimelineLite} from "gsap";
import {FlowRouter} from 'meteor/kadira:flow-router';

function videoWrapperLogic() {
  //Open Slide
  $('.video-btn').on('click', function(e) {
    e.preventDefault();
    let vidSlideWraper = $('.video-slide-wrapper');
    TweenMax.to(vidSlideWraper, .6, {
      width: "100%",
      ease: Quart.easeInOut
    });
    $('.exit-video-slide').css({display: 'block'});
    $('.video-container').css({display: 'block'});
    setTimeout(function() {
      $('.exit-video-slide, .video-title').css({opacity: 1});
      $('.video-container').css({opacity: 1});

//Media Item On Open
      setTimeout(function() {
        TweenMax.staggerTo(".jcs-media-item", .8, {
          opacity: 1,
          ease: Quart.easeInOut
        }, 0.4);
      }, 1000);
    }, 1400)
  });

}

module.exports = videoWrapperLogic;
