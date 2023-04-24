import { FC, memo } from 'react'

const WelcomePageWithRegistrationSection: FC = memo(() => (
  <section>
    <h2 className="text-theme-green">WITH REGISTRATION</h2>
    <ul className="mt-2">
      <li className="mt-2">・テイスティングシートの記録・管理</li>
      <li className="mt-2">・記録したテイスティングシートの検索</li>
      <li className="mt-2">・テイスティングしたワインの登録</li>
    </ul>
  </section>
))

export default WelcomePageWithRegistrationSection
