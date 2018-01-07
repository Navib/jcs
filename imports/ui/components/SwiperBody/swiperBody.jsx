import React, { Component } from 'react';
import initializeSwiper from './initializeSwiper.js';

import TextBox from '../TextBox/textBox.jsx';

class SwiperBody extends Component {
  constructor(props) {
      super(props);
    }

    componentDidMount() {
      initializeSwiper();
    }
    menuItems() {
    return [
      {_id:1, name:'square'},
      {_id:2, name:'square'},
    ]
  }
  renderSquare() {
    return this.menuItems().map((item) => (
      <div className='square' key={item._id}>
      </div>
    ))
  }
  render(){
    return (
      <div className="actor-profile-wrapper">
        <div className="swiper-container main-swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><img src="/images/ohlala.jpg" className="main-swiper-img"/></div>
            <div className="swiper-slide"><div className=""><img src="/images/face-shot.jpg" className="main-swiper-img"/></div></div>
            <div className="swiper-slide"><img src="/images/jcs-actor.jpg" className="main-swiper-img"/></div>
            <div className="swiper-slide"><img src="/images/behind-the-scenes.png" className="main-swiper-img"/></div>
            <div className="swiper-slide"><img src="/images/on-set-jcs.jpg" className="main-swiper-img"/></div>
          </div>

          <div className="swiper-pagination main-swiper-pagination"></div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>

        </div>
        <TextBox />
      </div>
    )
  }
}

export default SwiperBody;
