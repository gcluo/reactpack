'use strict';
import './less/main.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './modules/index.jsx';
import About from './modules/about.jsx';
import Inbox from './modules/inbox.jsx';
import {Router, Route, Link, IndexRoute, Redirect} from 'react-router';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>welcome to index!</h1>
      </div>
    );
  }
}
main();
function main() {
  React.render((
    <Router>
      <Route path="/" component={Index}>
        <IndexRoute component={Dashboard}/>
        <Route path="about" component={About}/>
        <Route path="inbox" component={Inbox}/>
      </Route>
    </Router>
  ), document.body)
}
