import React, { Component } from 'react';
import initializeSwiper from './initializeSwiper.js';

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
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide"><img src="http://via.placeholder.com/400x600" /></div>
            <div className="swiper-slide"><img src="http://via.placeholder.com/400x600" /></div>
            <div className="swiper-slide"><img src="http://via.placeholder.com/400x600" /></div>
            <div className="swiper-slide"><img src="http://via.placeholder.com/400x600" /></div>
            <div className="swiper-slide"><img src="http://via.placeholder.com/400x600" /></div>
          </div>

          <div className="swiper-pagination"></div>

        </div>
      </div>
    )
  }
}

export default SwiperBody;
