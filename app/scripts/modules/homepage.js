import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import homepage from '../reducers/homepage'
import IndexPage from '../containers/homepage'
let store = createStore(homepage)
render(
  <Provider store={store}>
    <IndexPage />
  </Provider>
  ,
  document.getElementById('root')
)
