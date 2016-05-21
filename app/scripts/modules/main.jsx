'use strict';
// import './less/main.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './account/index.jsx';
import About from './account/about.jsx';
import Inbox from './account/inbox.jsx';
import {Router, Route, Link, IndexRoute, Redirect} from 'react-router';
// var src = require('./assets/images/22.jpg');
export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>welcome to index!</h1>
        <img src={'assets/images/22.jpg'} alt="123"/>
      </div>
    );
  }
}
main();
function main() {
  ReactDOM.render((
    <Router>
      <Route path="/" component={Index}>
        <IndexRoute component={Dashboard}/>
        <Route path="about" component={About}/>
        <Route path="inbox" component={Inbox}/>
      </Route>
    </Router>
  ), document.body)
}
