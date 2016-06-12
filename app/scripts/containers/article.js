import React from 'react'
import { connect } from 'react-redux'
import Article from '../components/article/article'
import '../../css/docs.css'
let ArticlePage = () => (
  <div>
    <Article/>
  </div>
)
ArticlePage = connect()(ArticlePage)

export default ArticlePage
