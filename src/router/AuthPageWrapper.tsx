import { FC, ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuthContext } from '../hooks'

const AuthPageWrapper: FC<{
  page: ReactElement
}> = ({ page }) => {
  const { currentUser } = useAuthContext()

  return currentUser ? <Navigate to="/" /> : page
}

export default AuthPageWrapper
