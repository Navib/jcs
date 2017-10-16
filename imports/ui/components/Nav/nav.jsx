import React, { Component } from 'react';
//import {TweenMax, Power2, TimelineLite} from "gsap";

class Nav extends Component {
  componentDidMount() {
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
