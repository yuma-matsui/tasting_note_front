import { FC, memo } from 'react'

import { SignInButton, StartTastingButton } from '../atoms'
import { TopPageTitle, WelcomePageAboutSection, WelcomePageWithRegistrationSection } from '../molecules'
import { Footer } from '../organisms'

const WelcomePage: FC = memo(() => (
  <div className="px-5 w-full md:w-96 mx-auto">
    <TopPageTitle />
    <WelcomePageAboutSection />
    <div className="h-96 w-full md:w-96 bg-gray-700 text-white mb-4">サービスのデモ画像配置予定</div>
    <WelcomePageWithRegistrationSection />
    <div className="w-full md:w-96 flex justify-between">
      <StartTastingButton />
      <SignInButton />
    </div>
    <Footer />
  </div>
))

export default WelcomePage
