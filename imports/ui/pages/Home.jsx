import React, {Component} from 'react';

import SwiperBody from '../../ui/components/SwiperBody/swiperBody';
import Contact from '../../ui/components/Contact/contact';
import Preloader from '../../ui/components/Preloader/preloader';


// This component - represents a single page
export const Home = () => <div>
    <div className="jcs-home" id="desktop-sites">
      <SwiperBody />
      <Contact />
    </div>
    <div className="ShowPreloader"><Preloader /></div>
</div>
