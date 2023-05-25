import { FC, memo } from 'react'

import { SignInLink, SignUpLink, StartTastingLink } from '../atoms'
import {
  HeadMeta,
  TopPageTitle,
  WelcomePageAboutSection,
  WelcomePageImagesSection,
  WelcomePageWithRegistrationSection
} from '../molecules'
import { Footer } from '../organisms'
import { metaContents } from '../../assets'

const WelcomePage: FC = memo(() => {
  const { title, description } = metaContents.root

  return (
    <HeadMeta title={title} description={description}>
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
    </HeadMeta>
  )
})

export default WelcomePage
