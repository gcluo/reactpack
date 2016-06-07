import React from 'react'

const Header = () => (
  <header className="header-top">
    <div className="header">
      <span className="header-link">BB,专业的新闻聚合平台</span>
      <form className="header-search-form">
        <span className="header-search-button"></span>
        <input type="text" className="header-search"/>
      </form>
      <ul className="header-menu">
        <li><a href="">首页</a></li>
        <li><a href="">热点</a></li>
      </ul>
      <div className="header-profile">
        <span>your</span>
        <img className="avatar" src="http://dummyimage.com/25x25/000/fff"/>
      </div>
    </div>
  </header>
)
export default Header
