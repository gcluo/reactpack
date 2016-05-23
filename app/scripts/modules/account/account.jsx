'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index.jsx';
import About from './about.jsx';
import Inbox from './inbox.jsx';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  Redirect,
  hashHistory
} from 'react-router';
import '../../../css/main.css';
export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>welcome to account!</h1>
        <img src={'../assets/images/22.jpg'} alt="123"/>
      </div>
    );
  }
}
main();
function main() {
  ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={Index}>
        <IndexRoute component={Dashboard}/>
        <Route path="about" component={About}/>
        <Route path="inbox" component={Inbox}/>
      </Route>
    </Router>
  ), document.getElementById('root'))
}
