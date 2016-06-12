import React from 'react'
import Li from './list'
const Timer= ({messages}) => (
  <div>
    <ul className="special-timer">
      <li className="time">按时间排序</li>
      {messages.map(message =>{
        return <Li {...message}/>
      }
      )}
    </ul>
  </div>
)
export default Timer
