'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, Redirect} from 'react-router';
import NavBar from '../component/navbar.jsx'
import '../../css/main.css'
main();
function main() {
  ReactDOM.render(
    <NavBar/>, document.getElementById('root'))
}
