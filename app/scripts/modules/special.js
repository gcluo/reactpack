import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import special from '../reducers/special'
import SpecialPage from '../containers/special'
import thunk from 'redux-thunk'
// import fetch from 'isomorphic-fetch'
let store = createStore(special, applyMiddleware(thunk))

function normal(messages){
  return {
    type: 'TIME',
    messages
  };
}

function make(){
  return function(dispatch){
    return fetch('http://localhost:3000/message').then(response => {
      return response.json();
    }).then(json => dispatch(normal(json)))
  }
}


store.dispatch(make())
render(
  <Provider store={store}>
    <SpecialPage />
  </Provider>
  ,
  document.getElementById('root')
)
