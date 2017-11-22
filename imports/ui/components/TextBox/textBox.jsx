import React, {Component} from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

class TextBox extends Component {
  constructor(props) {
      super(props);
    }

  componentDidMount() {
    //Open Slide
    $('.video-btn').on('click', function(){
      let vidSlideWraper = $('.video-slide-wrapper');
      TweenMax.to(vidSlideWraper, .6, {
        width: "100%",
        ease: Quart.easeIn,
      });
      $('.exit-video-slide').css({display:'block'});
      $('.video-container').css({display:'block'});
      setTimeout(function(){
        $('.exit-video-slide').css({opacity:1});
        $('.video-container').css({opacity:1});
        setTimeout(function() {
          TweenMax.staggerTo(".jcs-media-item", .3, {opacity:1, ease: Quart.easeInOut}, 0.4);
        }, 300);
      },1400)
    });
  }
  render(){
    return (
      <div className="jcs-text-box basis">
        <div className="jcs-content">
          <div className="jcs-bx-header">Justin C. Schilling</div>
          <div className="jcs-bx-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </div>
          <div className="jcs-bx-social">
            <ul className="actor-sites">
              <li className="social-bg"></li>
              <li className="social-bg"></li>
            </ul>
          </div>
          <div className="jcs-menu-icon">
            <ul className="social-list">
              <li><i className="icon ion-ios-film video-btn" aria-hidden="true"></i></li>
              <li><i className="icon ion-film-marker" aria-hidden="true"></i></li>
              <li><i className="icon ion-social-vimeo" aria-hidden="true"></i></li>
              <li><i className="icon ion-android-textsms" aria-hidden="true"></i></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TextBox;
