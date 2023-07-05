import { FC } from 'react'

import { SignedInWelcomePage, WelcomePage } from '../components/pages'
import { useCurrentUserContext } from '../hooks'

const WelcomePageWrapper: FC = () => {
  const currentUser = useCurrentUserContext()

  return currentUser ? <SignedInWelcomePage /> : <WelcomePage />
}

export default WelcomePageWrapper
