import { useErrorBoundary } from 'react-error-boundary'

import { TastingSheet } from '../../types'
import { TASTING_SHEET_KEY } from '../../utils'
import useAuthContext from '../context/useAuthContext'

const useSetSheetToLocalStorageAndSignIn = () => {
  const { signIn } = useAuthContext()
  const { showBoundary } = useErrorBoundary()

  const setTastingSheetAndSignIn = async (tastingSheet: TastingSheet) => {
    try {
      window.localStorage.setItem(TASTING_SHEET_KEY, JSON.stringify(tastingSheet))
      await signIn()
    } catch (e) {
      if (e instanceof Error) showBoundary(e)
    }
  }

  return {
    setTastingSheetAndSignIn
  }
}

export default useSetSheetToLocalStorageAndSignIn
