import React, {Component} from 'react';
import videoWrapperOpen from './videoWrapperOpen.js';


class TextBox extends Component {
  constructor(props) {
      super(props);
    }

  componentDidMount() {
    //Go to Personal Page
    $('.jcs-btn').on('click', function(e) {
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
        FlowRouter.go('/jcs');
      },4000);
    });
    //Go to Personal Page
    $('.video-page-btn').on('click', function(e) {
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
        FlowRouter.go('/videos');
      },4000);
    });
  }
  render(){
    return (
      <div className="jcs-text-box basis">
        <div className="jcs-content">
          <div className="jcs-bx-header">Justin C. Schilling</div>
          <div className="jcs-bx-social">
            <ul className="actor-sites">
              <li>Actor</li>
              <li>MC</li>
              <li>Improv</li>
            </ul>
          </div>
          <div className="jcs-bx-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </div>
          <div className="jcs-menu-icon">
            <ul className="social-list">
              <li><a href="#" className="txtBdy-btn video-page-btn" data-balloon="Video Gallery" data-balloon-pos="up"><i className="icon ion-ios-film video-btn" aria-hidden="true"></i></a></li>
              <li><a href="#" className="txtBdy-btn jcs-btn" data-balloon="Biography" data-balloon-pos="up"><i className="icon ion-film-marker " aria-hidden="true" ></i></a></li>
              <li><a href="#" className="txtBdy-btn contact-btn" data-balloon="Contact Me" data-balloon-pos="up"><i className="icon ion-android-textsms" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TextBox;
