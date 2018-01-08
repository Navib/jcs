import React, { Component } from 'react';
import videoWrapperClose from './videoWrapperClose.js';
import loadYtVideos from './loadVideos.js';
import initializeSwiper3d from './swiper3d.js';

class VideoSlide extends Component {
  constructor(props) {
      super(props);
  }
  componentDidMount(){
    videoWrapperClose();
    initializeSwiper3d();
  }



  render(){
    return (
      <div className="video-slide-wrapper">
        <div className="exit-video-slide"><i className="fa fa-home" aria-hidden="true"></i></div>
        <h1 className="video-title">Media Gallery</h1>
        <div className="video-container">
          <div className="video-wrapper">
            <div className="swiper-container swiper-3d-container">
              <div className="swiper-wrapper">
                {loadYtVideos()}
              </div>
               <div className="swiper-pagination swiper-3d-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoSlide;
