import React, { Component } from 'react';

class Circle extends Component {
  componentDidMount(){
    $('.jcs-cta-left').mouseover(function(){
      $('.jcs-circle-wrapper').css({
        background:'yellow',
      });
    });
    $('.jcs-cta-left').mouseleave(function(){
      $('.jcs-circle-wrapper').css({
        background:'none',
      });
    });
    $('.jcs-cta-right').mouseover(function(){
      $('.jcs-circle-wrapper').css({
        background:'red',
      });
    });
    $('.jcs-cta-right').mouseleave(function(){
      $('.jcs-circle-wrapper').css({
        background:'none',
      });
    });
  }

  render(){
    return(
      <div class="jcs-circle-wrapper">
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
