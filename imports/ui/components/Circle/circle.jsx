import React, { Component } from 'react';

class Circle extends Component {
  componentDidMount(){
    $('.jcs-cta-left').mouseover(function(){
      $('.opacity-image-screen-1').css({
        opacity:1,
        transform:'scale(1)',
      });
    });
    $('.jcs-cta-left').mouseleave(function(){
      $('.opacity-image-screen-1').css({
        opacity:'0',
        transform:'scale(1.1)',
      });
    });
    $('.jcs-cta-right').mouseover(function(){
      $('.opacity-image-screen-2').css({
        opacity:1,
        transform:'scale(1)',
      });
    });
    $('.jcs-cta-right').mouseleave(function(){
      $('.opacity-image-screen-2').css({
        opacity:'0',
        transform:'scale(1.1)',
      });
    });
  }

  render(){
    return(
      <div className="jcs-circle-wrapper">
        <div className="opacity-image-screen-1">
          <div className="black-overlay-2"></div>
        </div>
        <div className="opacity-image-screen-2">
          <div className="black-overlay"></div>
        </div>
        <div className="jcs-semi-circle" id="jcs-left-circle">
          <a href="#" className="jcs-cta-left ">
            <div className="no-box jcs-flex-center">Whats This!</div>
            <div className="has-box jcs-flex-center">Resume</div>
          </a>
        </div>
        <div className="jcs-semi-circle" id="jcs-right-circle">
          <a href="#" className="jcs-cta-right ">
            <div className="no-box jcs-flex-center">Whats This!</div>
            <div className="has-box jcs-flex-center">Scroll Down</div>
          </a>
        </div>
      </div>
    )
  }
}

export default Circle;
