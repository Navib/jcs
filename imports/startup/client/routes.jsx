import {FlowRouter} from 'meteor/kadira:flow-router';
import React from 'react';
import {mount} from 'react-mounter';

//Layouts and Pages
import {App} from '../../ui/layouts/App.jsx'
import {Home} from '../../ui/pages/Home.jsx'
import {Jcs} from '../../ui/pages/Jcs.jsx'
import {VideoPage} from '../../ui/pages/VideoPage.jsx'

FlowRouter.route('/', {
  action() {
    mount(App, {content: <Home/>});
  }
});
FlowRouter.route('/jcs', {
  action() {
    mount(App, {content: <Jcs/>});
  }
});
FlowRouter.route('/videos', {
  action() {
    mount(App, {content: <VideoPage/>});
  }
});
