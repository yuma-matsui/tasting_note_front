import { FC, memo } from 'react'

const WelcomePageWithRegistrationSection: FC = memo(() => (
  <section className="my-5">
    <h2 className="top-page-section-heading">With Registration</h2>
    <ul className="mt-2">
      <li className="mt-2">・テイスティングシートの記録・管理</li>
      <li className="mt-2">・記録したテイスティングシートの検索</li>
      <li className="mt-2">・テイスティングしたワインの登録</li>
    </ul>
  </section>
))

export default WelcomePageWithRegistrationSection
