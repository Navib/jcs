import React, {Component} from 'react';

import HeaderBox from '../../ui/components/PortComp/header';
import NormalBox from '../../ui/components/PortComp/normalBox';
import InverseBox from '../../ui/components/PortComp/inverseBox';

import Video from '../../ui/components/video/Video';
import Contact from '../../ui/components/Contact/contact';

// This component - represents a single page
export const Jcs = () => <div>
    <div className="jcs-person " id="desktop-sites">
      <Video />
      <Contact />
    </div>
</div>
