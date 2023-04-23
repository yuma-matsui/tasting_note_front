import { FC, memo } from 'react'

import { SignInButton, StartTastingButton } from '../atoms'
import { TopPageTitle, WelcomePageAboutSection, WelcomePageWithRegistrationSection } from '../molecules'
import { Footer } from '../organisms'

const WelcomePage: FC = memo(() => (
  <div className="px-5 main-wrapper">
    <TopPageTitle />
    <WelcomePageAboutSection />
    <div className="demo-img-wrapper bg-gray-700 text-white mb-4">サービスのデモ画像配置予定</div>
    <WelcomePageWithRegistrationSection />
    <div className="sub-wrapper flex justify-between">
      <StartTastingButton />
      <SignInButton />
    </div>
    <Footer />
  </div>
))

export default WelcomePage
