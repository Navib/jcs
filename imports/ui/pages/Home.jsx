import React, {Component} from 'react';

import Nav from '../../ui/components/Nav/nav';
import NavOverlay from '../../ui/components/Nav/navOverlay';
import Intro from '../../ui/components/Intro/intro';
import Circle from '../../ui/components/Circle/circle';


// This component - represents a single page
export const Home = () => <div>
    <div className="jcs-home" id="desktop-sites">
      <NavOverlay />
      <Nav />
      <Intro />
      <Circle />
    </div>
</div>
