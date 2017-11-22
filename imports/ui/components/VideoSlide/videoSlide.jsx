import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

class VideoSlide extends Component {
  constructor(props) {
      super(props);
  }
  componentDidMount(){
    this.exitSlide();
  }
  exitSlide(){
    $('.exit-video-slide').on('click', function(){
      setTimeout(function(){
        let vidSlideWraper = $('.video-slide-wrapper');
        TweenMax.to(vidSlideWraper, .6, {
          width: "0%",
          ease: Quart.easeIn,
        });
      },800)
      $('.exit-video-slide').css({});
      $('.video-container').css({});

      TweenMax.staggerTo(".jcs-media-item", .3, {opacity:0, ease: Quart.easeInOut}, 0.4);
    });
  }
  ytVids() {
  return [
    {_id:1, src:'https://www.youtube.com/embed/nz73OSS9h1I?modestbranding=1&autohide=1&showinfo=0&controls=0'},
    {_id:2, src:'https://www.youtube.com/embed/e1GSwjLoieM?modestbranding=1&autohide=1&showinfo=0&controls=0'},
    {_id:3, src:'https://www.youtube.com/embed/OPqSt51kimA?modestbranding=1&autohide=1&showinfo=0&controls=0'},
    {_id:4, src:'https://www.youtube.com/embed/feufY7NFbPo?modestbranding=1&autohide=1&showinfo=0&controls=0'},
  ]
}
renderVids() {
  return this.ytVids().map((item) => (
    <div className="jcs-media-item" key={item._id}>
      <div className="test">INFO TEXT</div>
        <iframe className="cs-iframe" src={item.src} allowTransparency="true" style={{background: '#ffffff' }}></iframe>
    </div>
  ))
}

  render(){
    return (
      <div className="video-slide-wrapper">
        <div className="exit-video-slide">EXIT</div>
        <div className="video-container">
          <div className="video-wrapper">
          {this.renderVids()}
          </div>
        </div>
      </div>
    )
  }
}

export default VideoSlide;
