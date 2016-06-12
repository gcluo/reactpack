import React from 'react'

const Li= ({time, message, from}) => {
  console.log(message);
  return (
    <li>
      <ul className="time-info">
        <li>{time}</li>
        <li>{message}</li>
        <li>{from}</li>
      </ul>
    </li>
  )
}
export default Li
