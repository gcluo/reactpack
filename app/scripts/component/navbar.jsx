'use strict';
import React from 'react';
import {Link} from 'react-router';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'index'
    };
  }
  click(e) {
    let link = e.target.text;
    switch (link) {
      case 'About':
        this.setState({selected: 'about'});
        break;
      case 'Inbox':
        this.setState({selected: 'inbox'});
        break;
      default:
        this.setState({selected: 'index'});
        break;
    }
  }
  render() {
    return (
      <ul className="nav-bar">
        <li className="active">
          <a href="">首页</a>
        </li>
        <li>
          <a href="">我要XX</a>
        </li>
        <li>
          <a href="">我要XX</a>
        </li>
        <li>
          <a href="">关于我的XX</a>
        </li>
        <li>
          <a href="">我的社区</a>
        </li>
        <li>
          <a href="account.html">我的账户</a>
        </li>
      </ul>
    );
  }
}
