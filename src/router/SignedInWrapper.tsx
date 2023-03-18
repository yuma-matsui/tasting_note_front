import { FC, ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../hooks'

const SignedInWrapper: FC<{ page: ReactElement }> = ({ page }) => {
  const { currentUser } = useAuthContext()

  return currentUser ? page : <Navigate to="/" />
}

export default SignedInWrapper
