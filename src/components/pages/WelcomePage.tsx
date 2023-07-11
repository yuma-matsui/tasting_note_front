import { FC, memo } from 'react'

import { metaContents } from '../../assets'
import { SignInLink, SignUpLink, StartTastingLink } from '../atoms'
import {
  HeadMeta,
  TopPageTitle,
  WelcomePageAboutSection,
  WelcomePageImagesSection,
  WelcomePageWithRegistrationSection
} from '../molecules'
import { Footer } from '../organisms'

const WelcomePage: FC = memo(() => {
  const { description, title } = metaContents.root

  return (
    <HeadMeta title={title} description={description}>
      <div className="main-wrapper">
        <TopPageTitle />
        <WelcomePageAboutSection />
        <WelcomePageImagesSection />
        <WelcomePageWithRegistrationSection />
        <div className="flex justify-between mb-6 mx-auto sm:w-96">
          <SignUpLink />
          <SignInLink />
        </div>
        <StartTastingLink text="登録しないではじめる" />
      </div>
      <Footer />
    </HeadMeta>
  )
})

export default WelcomePage
