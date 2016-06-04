'use strict';
import React from 'react';
import Nav from '../../containers/account';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import select from '../../reducers/account'
let store = createStore(select)
export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the test App for react</h1>
        <Provider store={store}>
          <Nav/>
        </Provider>
        {this.props.children}
      </div>
    );
  }
}
