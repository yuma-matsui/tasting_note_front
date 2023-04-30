import { useEffect } from 'react'

import useAuthContext from '../context/useAuthContext'

const useUrgentSignOut = () => {
  const { currentUser, signOut } = useAuthContext()

  useEffect(() => {
    const urgentSignOut = async () => {
      await signOut()
    }

    if (currentUser) urgentSignOut().catch(() => {})
  }, [currentUser, signOut])
}

export default useUrgentSignOut
