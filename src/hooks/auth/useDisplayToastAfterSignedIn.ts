import { User } from 'firebase/auth'
import { useEffect } from 'react'

import useToastContext from '../context/useToastContext'
import { SIGNED_IN_KEY, TASTING_SHEET_KEY } from '../../utils'

const useDisplayToastAfterSignedIn = (user: User | null) => {
  const { showToast } = useToastContext()

  useEffect(() => {
    const justAfterSignedIn =
      window.localStorage.getItem(SIGNED_IN_KEY) && !window.localStorage.getItem(TASTING_SHEET_KEY)
    if (user && justAfterSignedIn) {
      showToast({
        text: 'ログインしました'
      })
      window.localStorage.clear()
    }
  }, [user, showToast])
}

export default useDisplayToastAfterSignedIn
