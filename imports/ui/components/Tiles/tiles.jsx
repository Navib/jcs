import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";


class Tiles extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  menuItems() {
  return [
    {_id:1, name:'square'},
    {_id:2, name:'square'},
    {_id:3, name:'square'},
    {_id:4, name:'square'},
    {_id:5, name:'square'},
    {_id:6, name:'square'},
    {_id:7, name:'square'},
    {_id:8, name:'square'},
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
      <div className="tiles-container">
        <div className="square-wrapper">
          {this.renderSquare()}
        </div>
        <div className="square-wrapper">
          {this.renderSquare()}
        </div>
        <div className="square-wrapper">
          {this.renderSquare()}
        </div>
        <div className="square-wrapper">
          {this.renderSquare()}
        </div>
      </div>
    )
  }
}

export default Tiles;
