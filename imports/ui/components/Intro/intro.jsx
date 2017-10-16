import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

class Intro extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="jcs-slide" id="intro-slide">
        <div className="container" id="signature-bg">
        </div>
        <div className="moving-shapess"></div>
      </div>
    )
  }
}

export default Intro;
