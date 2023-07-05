import { useEffect } from 'react'

import useSignOutUser from './useSignOutUser'
import useCurrentUserContext from '../context/useCurrentUserContext'

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
