import { FC, memo } from 'react'

import { metaContents } from '../../assets'
import { StartTastingLink } from '../atoms'
import { HeadMeta, TopPageTitle, WelcomePageAboutSection, WelcomePageImagesSection } from '../molecules'
import { Footer } from '../organisms'

const WelcomePage: FC = memo(() => {
  const { description, title } = metaContents.root

  return (
    <HeadMeta title={title} description={description}>
      <div className="main-wrapper">
        <TopPageTitle />
        <WelcomePageAboutSection />
        <WelcomePageImagesSection />
        {/* <WelcomePageWithRegistrationSection /> */}
        <div className="mt-6">
          <StartTastingLink text="はじめる" />
        </div>
      </div>
      <Footer />
    </HeadMeta>
  )
})

export default WelcomePage
