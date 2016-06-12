import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import special from '../reducers/special'
import SpecialPage from '../containers/special'
let store = createStore(special)
render(
  <Provider store={store}>
    <SpecialPage />
  </Provider>
  ,
  document.getElementById('root')
)
