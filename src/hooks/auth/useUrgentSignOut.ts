import { useEffect } from 'react'

import useAuthContext from '../context/useAuthContext'
import useSignOutUser from './useSignOutUser'

const useUrgentSignOut = () => {
  const { currentUser } = useAuthContext()
  const { signOut } = useSignOutUser()

  useEffect(() => {
    const urgentSignOut = async () => {
      await signOut()
    }

    if (currentUser) urgentSignOut().catch((e: Error) => console.error(e.message))
  }, [currentUser, signOut])
}

export default useUrgentSignOut
