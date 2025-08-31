import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <div className="error-message">
          <h1>ページが見つかりません</h1>
          <p>申し訳ございません。お探しのページは存在しないか、移動された可能性があります。</p>
        </div>
        <div className="certificate-icon">🏆</div>
        <div className="action-buttons">
          <Link to="/" className="home-button">
            🏠 ホームに戻る
          </Link>
        </div>
        <div className="suggestions">
          <h3>こちらはいかがでしょうか？</h3>
          <ul>
            <li>URLを確認してください</li>
            <li>ブラウザの戻るボタンで前のページに戻る</li>
            <li>ホームページから改めて目的のページを探す</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NotFound