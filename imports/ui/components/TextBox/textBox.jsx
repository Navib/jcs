import React, {Component} from 'react';

class TextBox extends Component {
  constructor(props) {
      super(props);
    }

  componentDidMount() {

  }
  render(){
    return (
      <div className="jcs-text-box basis">
        <div className="jcs-content">
          <div className="jcs-bx-header">Justin C. Schilling</div>
          <div className="jcs-bx-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </div>
          <div className="jcs-bx-social">
            <ul className="actor-sites">
              <li className="social-bg"></li>
              <li className="social-bg"></li>
            </ul>
          </div>
          <div className="jcs-menu-icon">
            <ul className="social-list">
              <li><i className="icon ion-ios-film" aria-hidden="true"></i></li>
              <li><i className="icon ion-film-marker" aria-hidden="true"></i></li>
              <li><i className="icon ion-social-vimeo" aria-hidden="true"></i></li>
              <li><i className="ion-ios-email-outline" aria-hidden="true"></i></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TextBox;
