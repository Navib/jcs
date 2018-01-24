import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

import Testimonial from './testimonial.jsx';

class PortBody extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
  }

  render() {
    return (
      <div className="p-body">
        <div className="container-wrapper b">
          <Testimonial />
        </div>
      </div>
    )
  }
}

export default PortBody;
