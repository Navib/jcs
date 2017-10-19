import React, { Component } from 'react';

class NavList extends Component {
  componentDidMount(){
  }
  menuItems() {
  return [
    {_id:1, name:'Home', src:'/', page_id:'page-1'},
    {_id:2, name:'Resume', src:'/', page_id:'page-2'},
    {_id:3, name:'Actor Profile 1', src:'/', page_id:'page-3'},
    {_id:4, name:'Actor Profile 2', src:'/', page_id:'page-4'},
  ]
}
renderMenu() {
  return this.menuItems().map((item) => (
    <li className='menu-list-item' key={item._id}>
      <a href="" className="menu-link" id={item.page_id}>{item.name}</a>
    </li>
  ))
}

  render(){
    return (
      <div className="nav-list-wrapper">
        <ul className="nav-list">
          { this.renderMenu() }
        </ul>
        <div className="rotating-wrapper">
          <img src="https://daks2k3a4ib2z.cloudfront.net/58dd653da9a745c70d7ceafa/58e2e9e5715fa880084b9bb5_Formulaire-Cercle-Caps_1.svg" className="rotate-img rotating" />
        </div>
      </div>
    )
  }
}

export default NavList;
