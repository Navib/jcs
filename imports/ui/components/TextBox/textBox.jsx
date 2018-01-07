import React, {Component} from 'react';
import videoWrapperOpen from './videoWrapperOpen.js';


class TextBox extends Component {
  constructor(props) {
      super(props);
    }

  componentDidMount() {
    videoWrapperOpen();
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
              <li><a href="#" className="txtBdy-btn"><i className="icon ion-ios-film video-btn" aria-hidden="true"></i></a></li>
              <li><a href="/jcs" className="txtBdy-btn jcs-btn"><i className="icon ion-film-marker " aria-hidden="true"></i></a></li>
              <li><a href="#" className="txtBdy-btn"><i className="icon ion-social-vimeo" aria-hidden="true"></i></a></li>
              <li><a href="#" className="txtBdy-btn contact-btn"><i className="icon ion-android-textsms" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TextBox;
