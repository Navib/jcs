import React, {Component} from 'react';

import VideoSlide from '../../ui/components/VideoSlide/videoSlide';
import Preloader from '../../ui/components/Preloader/preloader';
import Nav from '../../ui/components/nav/Nav.jsx';
import NavWrapper from '../../ui/components/nav/NavWrapper.jsx';

// This component - represents a single page
export const VideoPage = () => <div>
  <div className="jcs-person " id="desktop-sites">
    <Nav />
    <NavWrapper />
    <VideoSlide/>
  </div>
  <div className="ShowPreloader"><Preloader/></div>
</div>
