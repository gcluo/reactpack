import React from 'react'

const Article = () => {
  return (
    <main className="article-main">
      <aside className="article-author">
        <div className="avatar"></div>
        <div className="description">作者简介</div>
      </aside>
      <article className="article-content">
        <h2>百度称已承诺搜索整改承诺</h2>
        <div>
          <span className="time">2015-5-26</span>
          <span className="share">分享</span>
        </div>
        <div className="read">
          <span>导<br/>读</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <footer className="footer">
        <p>声明</p>
        <p>本文来自XX平台。</p>
        <p>文章内容纯属于个人观点，不代表平台观点。</p>
        <p>关注BB微信，每日阅读精选文章。</p>
        </footer>
      </article>
    </main>
  )
}
export default Article
