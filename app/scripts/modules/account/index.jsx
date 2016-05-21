'use strict';
import React from 'react';
import Nav from '../../component/nav.jsx';
export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the test App for react</h1>
        <Nav/> {this.props.children}
      </div>
    );
  }
}
