import { FC } from 'react'
import { SignedInWelcomePage, WelcomePage } from '../components/pages'
import { useAuthContext } from '../hooks'

const WelcomePageWrapper: FC = () => {
  const { currentUser } = useAuthContext()

  return currentUser ? <SignedInWelcomePage /> : <WelcomePage />
}

export default WelcomePageWrapper
