import React, {Component} from 'react';
import videoWrapperOpen from './videoWrapperOpen.js';
import PerWrapperOpen from './jcsPerOpen.js';

class TextBox extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    PerWrapperOpen();
    videoWrapperOpen();
  }
  render() {
    return (
      <div className="jcs-text-box basis">
        <div className="jcs-content">
          <div className="jcs-bx-header">Justin C. Schilling</div>
          <div className="jcs-bx-social">
            <ul className="actor-sites">
              <li>Actor</li>
              <li>MC</li>
              <li>Improv</li>
            </ul>
          </div>
          <div className="jcs-bx-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          </div>
          <div className="jcs-menu-icon">
            <ul className="social-list">
              <li>
                <a href="#" className="txtBdy-btn video-page-btn" data-balloon="Video Gallery" data-balloon-pos="up">
                  <i className="icon ion-ios-film video-btn" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" className="txtBdy-btn jcs-btn" data-balloon="Biography" data-balloon-pos="up">
                  <i className="icon ion-film-marker " aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" className="txtBdy-btn contact-btn" data-balloon="Contact Me" data-balloon-pos="up">
                  <i className="icon ion-android-textsms" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TextBox;
