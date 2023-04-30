import { FC, memo } from 'react'

import { SignInButton, StartTastingButton } from '../atoms'
import {
  TopPageTitle,
  WelcomePageAboutSection,
  WelcomePageImagesSection,
  WelcomePageWithRegistrationSection
} from '../molecules'
import { Footer } from '../organisms'

const WelcomePage: FC = memo(() => (
  <>
    <div className="main-wrapper">
      <TopPageTitle />
      <WelcomePageAboutSection />
      <WelcomePageImagesSection />
      <WelcomePageWithRegistrationSection />
      <div className="flex justify-between">
        <StartTastingButton />
        <SignInButton />
      </div>
    </div>
    <Footer />
  </>
))

export default WelcomePage
