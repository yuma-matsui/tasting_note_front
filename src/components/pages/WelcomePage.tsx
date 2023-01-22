import { FC } from 'react'
import logo from '../../assets/images/demo_logo.jpg'
import { StartTastingButton } from '../atoms'
import { OnlyFooterLayout } from '../templates'

const WelcomePage: FC = () => (
  <OnlyFooterLayout>
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <img className="w-24 h-24" src={logo} alt="logo" />
        <div>
          <h1>Tasting Note</h1>
          <p>テイスティングを記録してソムリエに</p>
        </div>
      </div>

      <div>
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

      <div className="w-96 h-96 bg-gray-500 text-slate-50">サービスのデモ画像配置予定</div>

      <div>
        <h2>WITH REGISTRATION</h2>
        <ul>
          <li>テイスティングシートの記録・管理</li>
          <li>記録したテイスティングシートの検索</li>
          <li>テイスティングしたワインの登録</li>
        </ul>
      </div>

      <div>
        <StartTastingButton />
        <button type="button">Googleでログイン</button>
      </div>
    </div>
  </OnlyFooterLayout>
)

export default WelcomePage
