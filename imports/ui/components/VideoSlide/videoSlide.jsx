import React, { Component } from 'react';
import videoWrapperClose from './videoWrapperClose.js';
import loadYtVideos from './loadVideos.js';

class VideoSlide extends Component {
  constructor(props) {
      super(props);
  }
  componentDidMount(){
    videoWrapperClose();

  }



  render(){
    return (
      <div className="video-slide-wrapper">
        <div className="exit-video-slide">EXIT</div>
        <div className="video-container">
          <div className="video-wrapper">
          {loadYtVideos()}
          </div>
        </div>
      </div>
    )
  }
}

export default VideoSlide;
