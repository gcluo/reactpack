'use strict';
import './less/main.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './modules/index.jsx';
import About from './modules/about.jsx';
import Inbox from './modules/inbox.jsx';
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router';
main();

function main() {
  React.render((
    <Router>
      <Route path="/" component={Index}/>
      <Route path="about" component={About}/>
      <Route path="inbox" component={Inbox}/>
    </Router>
  ), document.body)
}
