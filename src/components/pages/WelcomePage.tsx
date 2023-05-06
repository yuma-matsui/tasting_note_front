import { FC, memo } from 'react'

import { SignInLink, SignUpLink, StartTastingLink } from '../atoms'
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
      <div className="flex justify-between mb-6">
        <SignUpLink />
        <SignInLink />
      </div>
      <StartTastingLink text="すぐにはじめる" />
    </div>
    <Footer />
  </>
))

export default WelcomePage
