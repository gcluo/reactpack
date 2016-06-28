import React from 'react'
import { connect } from 'react-redux'
import Timer from '../components/special/timer'
const mapStateToProps = (state) => {
  console.log(state);
  return {
    messages: state
  };
}

let Time = connect(mapStateToProps)(Timer)
export default Time
