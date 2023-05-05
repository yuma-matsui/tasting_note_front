import { getAuth } from 'firebase/auth'
import { useSignOut } from 'react-firebase-hooks/auth'

import useAuthContext from '../context/useAuthContext'

const useSignOutUser = () => {
  const { setAuthError } = useAuthContext()
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
