import React, {Component} from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

class Contact extends Component {
  constructor(props) {
      super(props);
    }

  componentDidMount() {
    let contactWrapper = $('.jcs-contact-wrapper');
    $('.contact-btn').on('click', function(e){
      TweenMax.to(contactWrapper, .6, {
        height: "350px",
        ease: Quart.easeInOut
      });
      $('.flex-contact').css({height:'100%'});
      setTimeout(function() {
        $('.flex-50').css({visibility:'visible', opacity:1});
      },300)
    });
    $('.exit-contact-btn').on('click', function(e){
      TweenMax.to(contactWrapper, .6, {
        height: "0",
        ease: Quart.easeInOut
      });
      setTimeout(function() {
        $('.flex-contact').css({height:'auto'});
        $('.flex-50').css({visibility:'hidden', opacity:0});
      },300);
    });
  }
  render(){
    return (
      <div className="jcs-contact-wrapper ">
        <div className="exit-contact-wrapper"><a href="#" className="exit-contact-btn x"></a></div>
        <div className="flex-contact">
          <div className="flex-50">
            <h3>For Inquries see contact information below</h3>
            <div className="flex-name flex-item">Justin C. Schilling</div>
            <div className="flex-email flex-item"><a href="demoEmail@email.com">demoEmail@email.com</a></div>
            <div className="flex-number flex-item"><a href="demoEmail@email.com">Click To Call</a></div>
            <div className="flex-social flex-item"></div>
          </div>
          <div className="flex-50 map-contact">
            <iframe width="100%" height="100%" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=nyc&key=AIzaSyDGPID6ndaD1JRk0EpGqyvqBg-KDqFCVrA" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
