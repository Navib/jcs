import React from 'react';

//Load YT VideoSlide

function loadYtVideos() {
  let ytVids = [
    {
      _id: 1,
      src: 'https://www.youtube.com/embed/nz73OSS9h1I?modestbranding=1&autohide=1&showinfo=0&controls=0'
    }, {
      _id: 2,
      src: 'https://www.youtube.com/embed/e1GSwjLoieM?modestbranding=1&autohide=1&showinfo=0&controls=0'
    }, {
      _id: 3,
      src: 'https://www.youtube.com/embed/OPqSt51kimA?modestbranding=1&autohide=1&showinfo=0&controls=0'
    }, {
      _id: 4,
      src: 'https://www.youtube.com/embed/feufY7NFbPo?modestbranding=1&autohide=1&showinfo=0&controls=0'
    }
  ];

  let jcsVideos = ytVids.map((item) => (
    <div className="jcs-media-item swiper-slide video-3d-slide" key={item._id}>
      <div className="iframe-title ">INFO TEXT</div>
      <iframe className="cs-iframe" src={item.src} allowTransparency="true" style={{
        background: '#ffffff'
      }}></iframe>
    </div>
  ))

  return jcsVideos;
}

module.exports = loadYtVideos;
