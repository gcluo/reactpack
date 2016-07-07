import React from 'react'

const Li= ({time, message, from}) => {
  return (
    <li onClick={e => {
      e.preventDefault()
      window.location.href="article.html"
    }}>
      <ul className="time-info">
        <li>{time}</li>
        <li>{message}</li>
        <li>{from}</li>
      </ul>
    </li>
  )
}
export default Li
