import { FC } from 'react'
import logo from '../../assets/images/demo_logo.jpg'

const WelcomePage: FC = () => (
  <div className="main-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div className="service-logo" style={{ display: 'flex', alignItems: 'center' }}>
      <img style={{ width: '120px', height: '120px' }} src={logo} alt="logo" />
      <div>
        <h1>Tasting Note</h1>
        <p>テイスティングを記録してソムリエに</p>
      </div>
    </div>
    <div className="explanation-section">
      <h2>ABOUT</h2>
      <p>
        TastingNoteは
        <br />
        J.S.Aソムリエ故障資格認定試験
        <br />
        2次試験対策用のアプリです。
      </p>
      <p>
        本番同様のテイスティングシートを使って
        <br />
        ワインテイスティングの記録が行えます。
      </p>
    </div>
    <div
      className="demo-image"
      style={{
        width: '400px',
        height: '400px',
        background: 'gray',
        color: '#fff',
      }}
    >
      サービスのデモ画像配置予定
    </div>
    <div className="explanation-section">
      <h2>WITH REGISTRATION</h2>
      <ul>
        <li>テイスティングシートの記録・管理</li>
        <li>記録したテイスティングシートの検索</li>
        <li>テイスティングしたワインの登録</li>
      </ul>
    </div>
    <div className="buttons">
      <button type="button">すぐに始める</button>
      <button type="button">Googleでログイン</button>
    </div>
    <hr style={{ width: '50%', margin: '16px auto' }} />
    <footer>
      <div style={{ display: 'flex' }}>
        <img src={logo} alt="Footer Logo" style={{ width: '50px', height: '50px' }} />
        <p>Tasting Note</p>
      </div>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li style={{ marginRight: '16px' }}>利用規約</li>
        <li>プライバシーポリシー</li>
      </ul>
      <p>&copy; 2022 yuma-matsui</p>
    </footer>
  </div>
)

export default WelcomePage
