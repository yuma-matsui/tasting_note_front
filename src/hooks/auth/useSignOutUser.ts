import { getAuth } from 'firebase/auth'
import { useSignOut } from 'react-firebase-hooks/auth'

import useAuthErrorDispatchContext from '../context/useAuthErrorDispatchContext'

const useSignOutUser = () => {
  const setAuthError = useAuthErrorDispatchContext()
  const [signOutUser, , signOutError] = useSignOut(getAuth())

  const signOut = async () => {
    try {
      await signOutUser()
    } catch {
      setAuthError(signOutError)
    }
  }

  return {
    signOut
  }
}

export default useSignOutUser
