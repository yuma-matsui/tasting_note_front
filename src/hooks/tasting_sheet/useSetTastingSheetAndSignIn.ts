import { TastingSheet } from '../../types'
import useAuthContext from '../context/useAuthContext'

const useSetTastingSheetAndSignIn = () => {
  const { signIn } = useAuthContext()

  const setTastingSheetAndSignIn = (tastingSheet: TastingSheet) => {
    window.localStorage.setItem('tastingSheet', JSON.stringify(tastingSheet))
    signIn()
  }

  return {
    setTastingSheetAndSignIn
  }
}

export default useSetTastingSheetAndSignIn
