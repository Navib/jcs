import React , { Component } from 'react';


import NavList from './navList.jsx';
class NavOverlay extends Component {
  componentDidMount(){
  }

  render() {
    return(
      <div className="jcs-nav-overlay-wrapper">
        <div className="jcs-nav-third">
          <NavList />
        </div>
        <div className="jcs-nav-two-third"></div>
      </div>
    )
  }
}

export default NavOverlay;
