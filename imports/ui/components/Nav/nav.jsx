import React, { Component } from 'react';
//import {TweenMax, Power2, TimelineLite} from "gsap";

import NavOverlay from './navOverlay';

class Nav extends Component {
  launchNav() {
    let showNav = false;
    $('.launch-menu').on('click', function() {
      showNav = !showNav;

      if(showNav) {
        $('.jcs-nav-overlay-wrapper').css({
          visibility: 'visible',
          opacity: 1,
          'z-index': '1'
        });
        $('.jcs-nav-third').css({
          visibility: 'visible',
          opacity: 1,
          width: '33%',
          'z-index': '1'
        });
        $('.jcs-nav-two-third').css({
          visibility: 'visible',
          opacity: 1,
          width: '67%',
          'z-index': '1'
        });
      }else {
        $('.jcs-nav-overlay-wrapper').css({
          visibility: 'hidden',
          opacity: 0,
          'z-index':'-1'
        });
        $('.jcs-nav-third').css({
          visibility: 'hidden',
          opacity: 1,
          width: '0%',
          'z-index': '-1'
        });
        $('.jcs-nav-two-third').css({
          visibility: 'hidden',
          opacity: 0,
          width: '67%',
          'z-index': '-1'
        });
      }
    });
  }
  componentDidMount() {
    this.launchNav();
  }
  menuItems() {
  return [
    {_id:1, name:'Home', src:'/', page_id:'page-1'},
    {_id:2, name:'Mission', src:'/mission', page_id:'page-2'},
    {_id:3, name:'Portfolio', src:'/portfolio', page_id:'page-3'},
    {_id:4, name:'Contact', src:'/ockupy', page_id:'page-4'},
  ]
}
renderMenu() {
  return this.menuItems().map((item) => (
    <li className='menu-list-item' key={item._id}>
      <a href="" className="menu-link" id={item.page_id}>{item.name}</a>
    </li>
  ))
}
  render() {
    return (
      <nav className="jcs-nav">
        <div className="jcs-menu-box">
          <div className="container jcs-menu jcs-flex-end">
            <a href="#" className="launch-menu">Menu</a>
          </div>
        </div>
        <div className="jcs-menu-box">
          <div className="container jcs-contact jcs-flex-start">
            <a href="#" className="launch-contact">Contact</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;
