import { useSignOut } from 'react-firebase-hooks/auth'

import { auth } from '../../lib'
import useAuthContext from '../context/useAuthContext'

const useSignOutUser = () => {
  const { setAuthError } = useAuthContext()
  const [signOutUser, , signOutError] = useSignOut(auth)

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
