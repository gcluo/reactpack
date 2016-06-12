import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/common/header'
import News from '../components/homepage/news'
import '../../css/docs.css'
let IndexPage = () => (
  <div>
    <Header/>
    <News/>
  </div>
)
IndexPage = connect()(IndexPage)

export default IndexPage
