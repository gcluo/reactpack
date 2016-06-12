import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/special/header'
import Search from '../components/special/search'
import Time from './timer'
import '../../css/docs.css'

let SpecialPage = () => (
  <div>
    <Header/>
    <Search/>
    <Time/>
  </div>
)
SpecialPage = connect()(SpecialPage)

export default SpecialPage
