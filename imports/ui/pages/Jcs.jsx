import React, {Component} from 'react';

import Nav from '../../ui/components/nav/Nav.jsx';
import NavWrapper from '../../ui/components/nav/NavWrapper.jsx';
import Video from '../../ui/components/video/Video';
import Contact from '../../ui/components/Contact/contact';
import Preloader from '../../ui/components/Preloader/preloader';
import PortBody from '../../ui/components/Portfolio/portBody';

// This component - represents a single page
export const Jcs = () => <div>
  <div className="jcs-person " id="desktop-sites">
    <Nav />
    <NavWrapper />

    <PortBody />
    <Contact/>
  </div>
  <div className="ShowPreloader"><Preloader/></div>
</div>
