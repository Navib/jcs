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
        height: "400px",
        ease: Quart.easeInOut
      });
    });
    $('.exit-contact-btn').on('click', function(e){
      TweenMax.to(contactWrapper, .6, {
        height: "0",
        ease: Quart.easeInOut
      });
    });
  }
  render(){
    return (
      <div className="jcs-contact-wrapper ">
        <div className="exit-contact-wrapper"><a href="#" className="exit-contact-btn">Exit</a></div>
      </div>
    )
  }
}

export default Contact;
