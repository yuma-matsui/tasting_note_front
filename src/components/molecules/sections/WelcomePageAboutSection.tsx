import { FC, memo } from 'react'

const WelcomePageAboutSection: FC = memo(() => (
  <section className="mb-5">
    <h2 className="top-page-section-heading">About</h2>
    <p className="mt-2">
      TastingNoteは
      <br className="sm:hidden" />
      <span className="inline-block mt-2">
        J.S.Aソムリエ呼称資格認定試験
        <br className="sm:hidden" />
        2次試験対策用のアプリです。
      </span>
    </p>
    <p className="mt-2">
      本番同様のテイスティングシートを使って
      <br className="sm:hidden" />
      ワインテイスティングの記録が行えます。
    </p>
  </section>
))

export default WelcomePageAboutSection
