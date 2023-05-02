import { TastingSheet } from '../../types'
import { TASTING_SHEET_KEY } from '../../utils'
import useAuthContext from '../context/useAuthContext'

const useSetSheetToLocalStorageAndSignIn = () => {
  const { signIn } = useAuthContext()

  const setTastingSheetAndSignIn = (tastingSheet: TastingSheet) => {
    window.localStorage.setItem(TASTING_SHEET_KEY, JSON.stringify(tastingSheet))
    signIn()
  }

  return {
    setTastingSheetAndSignIn
  }
}

export default useSetSheetToLocalStorageAndSignIn
