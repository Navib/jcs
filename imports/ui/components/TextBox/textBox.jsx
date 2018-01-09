import React, {Component} from 'react';
import videoWrapperOpen from './videoWrapperOpen.js';
import PerWrapperOpen from './jcsPerOpen.js';

class TextBox extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

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
                <a href="#" className="txtBdy-btn" data-balloon="Facebook" data-balloon-pos="up">
                  <i className="icon ion-social-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" className="txtBdy-btn" data-balloon="Instagram" data-balloon-pos="up">
                  <i className="icon ion-social-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" className="txtBdy-btn" data-balloon="Snapchat" data-balloon-pos="up">
                  <i className="icon ion-social-snapchat" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#" className="txtBdy-btn" data-balloon="Vimeo" data-balloon-pos="up">
                  <i className="icon ion-social-vimeo" aria-hidden="true"></i>
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
