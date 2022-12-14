import { FC } from 'react'
import logo from '../../assets/images/demo_logo.jpg'
import { TastingStartButton } from '../atoms'
import { OnlyFooterLayout } from '../templates'

const WelcomePage: FC = () => (
  <OnlyFooterLayout>
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
          color: '#fff'
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
        <TastingStartButton />
        <button type="button">Googleでログイン</button>
      </div>
    </div>
  </OnlyFooterLayout>
)

export default WelcomePage
