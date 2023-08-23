import { FC, memo } from 'react'

import { metaContents } from '../../assets'
import { StartTastingLink } from '../atoms'
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
        <StartTastingLink text="はじめる" />
      </div>
      <Footer />
    </HeadMeta>
  )
})

export default WelcomePage
