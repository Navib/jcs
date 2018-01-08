import React, {Component} from 'react';

import VideoSlide from '../../ui/components/VideoSlide/videoSlide';
import Preloader from '../../ui/components/Preloader/preloader';

// This component - represents a single page
export const VideoPage = () => <div>
    <div className="jcs-person " id="desktop-sites">
      <VideoSlide />
    </div>
    <div className="ShowPreloader"><Preloader /></div>
</div>
