import React, {Component} from 'react';

import SwiperBody from '../../ui/components/SwiperBody/swiperBody';
import VideoSlide from '../../ui/components/VideoSlide/videoSlide';
import Contact from '../../ui/components/Contact/contact';


// This component - represents a single page
export const Home = () => <div>
    <div className="jcs-home" id="desktop-sites">
      <SwiperBody />
      <VideoSlide />
      <Contact />
    </div>
</div>
