import React, { Component } from 'react';

import videoWrapperOpen from './videoWrapperOpen.js';
import PerWrapperOpen from './jcsPerOpen.js';


// Nav component
export default class NavWrapper extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    let d = new Date();
    let currYear = d.getFullYear();
    $('#year').html(currYear);

    PerWrapperOpen();
    videoWrapperOpen();

    //Go to Personal Page
    $('.exit-per-page').on('click', function(e) {
      let speed = 1.0;
      e.preventDefault();
      let preloaderWrapper = $('.ShowPreloader');
      TweenMax.to(preloaderWrapper, speed, {
        top: "0",
        visibility: 'visible',
        ease: Quart.easeInOut
      });
      setTimeout(function() {
        TweenMax.to(preloaderWrapper, speed, {
          top: "-100%",
          ease: Quart.easeInOut
        });
      }, 3000);
      setTimeout(function() {
        TweenMax.to(preloaderWrapper, speed, {
          visibility: "hidden",
          ease: Quart.easeInOut
        });
      }, 3600);
      setTimeout(function() {
        FlowRouter.go('/');
      }, 4000);
    });
  }
  menuItems() {
    return [
      {_id:1, name:'Home', src:'/', btn:' menu-link exit-per-page'},
      {_id:2, name:'Biography', src:'/about', btn:'menu-link jcs-btn'},
      {_id:3, name:'Videos', src:'/videos', btn:'menu-link video-page-btn'},
    ]
  }
  renderMenu() {
    return this.menuItems().map((item) => (
      <li className='menu-list-item' key={item._id}>
        <a href="#" className={item.btn}>{item.name}</a>
      </li>
    ))
  }


  render() {
    return (
        <nav className="nav-wrapper">
          <div className="col-md-12 col-sm-12">
            <ul className="menu-list">
              {this.renderMenu()}
            </ul>
          </div>
          <div id="copyright">
            <p>© Copyright <span id="year"></span> Justin C Schilling. All Rights Reserved</p>
          </div>
        </nav>
    );
  }
}
