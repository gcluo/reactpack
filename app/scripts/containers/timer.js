import React from 'react'
import { connect } from 'react-redux'
import Timer from '../components/special/timer'
const mapStateToProps = (state) => {
  return {
    messages: [{
      'time': '2015-5-26',
      'message': '百度称已兑现承诺搜索整改承诺',
      'from': '来源：财新TMT'
    },{
      'time': '2015-5-26',
      'message': '百度罪与罚',
      'from': '来源：第一财经周刊'
    },{
      'time': '2015-5-26',
      'message': '百度的原罪搜索引擎还有怎样盈利',
      'from': '商学院'
    }]
  };
}

let Time = connect(mapStateToProps)(Timer)
export default Time
