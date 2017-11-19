import React, { Component } from 'react';
import initializeSwiper from './initializeSwiper.js';

class SwiperBody extends Component {
  constructor(props) {
      super(props);
    }

    componentDidMount() {
      initializeSwiper();
      this.goThere()

    }

     goThere() {
         var goTo;
         $('.cs-picker span').on('click', function() {
           goTo = $(this).data("key")
           initializeSwiperMain.slideTo(goTo, 1000, false);
           console.log('WHY!!!!: ', goTo);
         })
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
            <div className="swiper-slide"><img src="/images/face-shot.jpg" className="main-swiper-img"/></div>
            <div className="swiper-slide"><img src="/images/jcs-actor.jpg" className="main-swiper-img"/></div>
            <div className="swiper-slide"><img src="/images/behind-the-scenes.png" className="main-swiper-img"/></div>
            <div className="swiper-slide"><img src="/images/on-set-jcs.jpg" className="main-swiper-img"/></div>
            <div className="swiper-slide"><img src="/images/intro-bg.png" className="main-swiper-img"/></div>
          </div>

          <div className="swiper-pagination"></div>

        </div>
      </div>
    )
  }
}

export default SwiperBody;
