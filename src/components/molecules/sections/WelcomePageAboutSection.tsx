import { FC, memo } from 'react'

const WelcomePageAboutSection: FC = memo(() => (
  <section>
    <h2 className="text-theme-green">ABOUT</h2>
    <p className="mt-2">
      TastingNoteは
      <br />
      <span className="inline-block mt-2">
        J.S.Aソムリエ呼称資格認定試験
        <br />
        2次試験対策用のアプリです。
      </span>
    </p>
    <p className="mt-2">
      本番同様のテイスティングシートを使って
      <br />
      ワインテイスティングの記録が行えます。
    </p>
  </section>
))

export default WelcomePageAboutSection
