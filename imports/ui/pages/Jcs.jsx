import React, {Component} from 'react';

import HeaderBox from '../../ui/components/PortComp/header';
import NormalBox from '../../ui/components/PortComp/normalBox';
import InverseBox from '../../ui/components/PortComp/inverseBox';

import Video from '../../ui/components/video/Video';
import Contact from '../../ui/components/Contact/contact';
import Preloader from '../../ui/components/Preloader/preloader';

// This component - represents a single page
export const Jcs = () => <div>
    <div className="jcs-person " id="desktop-sites">
      <div className="exit-per-page"><i className="fa fa-home" aria-hidden="true"></i></div>
      <Video />
      <Contact />
    </div>
    <div className="ShowPreloader"><Preloader /></div>
</div>
