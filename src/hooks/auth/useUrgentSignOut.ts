import { useEffect } from 'react'

import useCurrentUserContext from '../context/useCurrentUserContext'
import useSignOutUser from './useSignOutUser'

const useUrgentSignOut = () => {
  const currentUser = useCurrentUserContext()
  const { signOut } = useSignOutUser()

  useEffect(() => {
    const urgentSignOut = async () => {
      await signOut()
    }

    if (currentUser) urgentSignOut().catch((e: Error) => console.error(e.message))
  }, [currentUser, signOut])
}

export default useUrgentSignOut
