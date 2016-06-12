import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import article from '../reducers/article'
import ArticlePage from '../containers/article'
let store = createStore(article)
render(
  <Provider store={store}>
    <ArticlePage />
  </Provider>
  ,
  document.getElementById('root')
)
