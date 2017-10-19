import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

import NavOverlay from './navOverlay';

class Nav extends Component {
  launchNav() {
    let showNav = false;
    $('.launch-menu, #exit-nav').on('click', function() {
      showNav = !showNav;

      if(showNav) {
        $('.jcs-nav-overlay-wrapper').css({
          'z-index':10,
        });
        $('.jcs-nav-third').css({
          visibility: 'visible',
          opacity: 1,
          width: '25%',
          'z-index': '1'
        });
        $('.jcs-nav-two-third').css({
          visibility: 'visible',
          opacity: 1,
          width: '100%',
          'z-index': '0'
        });
        $('.jcs-menu').css({
          left:'20%',
        });
        $('.jcs-nav-third').one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
          $('#exit-nav').css({
            opacity:1,
            transform:'scale(1)',
            visibility: 'visible',
          });
          $('.nav-list').css({
            opacity:1,
            visibility:'visible',
          });
          TweenMax.staggerTo(".menu-list-item", .3, {opacity:1, top:0, ease: Quart.easeInOut}, 0.4);
         });
      }else {
        $('.jcs-nav-two-third').one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
          $('.jcs-nav-overlay-wrapper').css({
            'z-index':0,
          });
          $('#exit-nav').css({
            transform:'scale(0)',
            visibility: 'hidden',
            opacity:0,
          });
        });
        
        $('.nav-list').css({
          opacity:0,
          visibility:'hidden',
        });
        TweenMax.staggerTo(".menu-list-item", .1, {opacity:0, top:'2em', ease: Quart.easeInOut}, 0.1);

        $('.jcs-nav-third').css({
          visibility: 'hidden',
          opacity: 1,
          width: '0%',
          'z-index': '1'
        });
        $('.jcs-nav-two-third').css({
          visibility: 'hidden',
          opacity: 0,
          width: '100%',
          'z-index': '0'
        });
        $('.jcs-menu').css({
          left:0,
        });
      }
    });
  }
  componentDidMount() {
    this.launchNav();
  }

  render() {
    return (
      <nav className="jcs-nav">
        <div className="jcs-menu-box">
          <div className="container jcs-menu jcs-flex-end">
            <a href="#" className="launch-menu">Menu</a>
            <i className="icon ion-minus-circled" id="exit-nav" aria-hidden="true"></i>
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
