import { FC, ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

import { useCurrentUserContext } from '../hooks'

const AuthPageWrapper: FC<{
  page: ReactElement
}> = ({ page }) => {
  const currentUser = useCurrentUserContext()

  return currentUser ? <Navigate to="/" /> : page
}

export default AuthPageWrapper
