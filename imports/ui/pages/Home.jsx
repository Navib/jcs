import React, {Component} from 'react';

import SwiperBody from '../../ui/components/SwiperBody/swiperBody';
import Contact from '../../ui/components/Contact/contact';
import Preloader from '../../ui/components/Preloader/preloader';
import Nav from '../../ui/components/nav/Nav.jsx';
import NavWrapper from '../../ui/components/nav/NavWrapper.jsx';
import TextBox from '../../ui/components/TextBox/textBox.jsx';

// This component - represents a single page
export const Home = () => <div>
  <div className="jcs-home" id="desktop-sites">
    <Nav />
    <NavWrapper />
    <SwiperBody/>
    <Contact/>
  </div>
  <div className="jcs-home" id="mobile-sites">
    <Nav />
    <NavWrapper />
    <TextBox />
    <TextBox />
    <TextBox />
  </div>
  <div className="ShowPreloader"><Preloader/></div>
</div>
