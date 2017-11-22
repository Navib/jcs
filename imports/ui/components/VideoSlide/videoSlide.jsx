import React, { Component } from 'react';

class VideoSlide extends Component {
  constructor(props) {
      super(props);
  }
  componentDidMount(){
    this.exitSlide();
  }
  exitSlide(){
    $('.exit-video-slide').on('click', function(){
      $('.video-slide-wrapper').css({width:'0%'})
      $('.exit-video-slide').css({display:'none'});
      $('.video-container').css({display:'none'});
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
