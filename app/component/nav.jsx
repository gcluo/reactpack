'use strict';
import React from 'react';
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router';
import { createHistory, createHashHistory, useBasename } from 'history';

export default class Nav extends React.Component{
  render(){
    return  (
      <ul className="nav-menu-line">
        <li className="active"><Link to="/">Index</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/inbox">Inbox</Link></li>
      </ul>
  );
  }
}
