import { useNavigate } from 'react-router-dom'

import { TastingSheet } from '../../types'
import { TASTING_SHEET_KEY } from '../../utils'

const useSetSheetToLocalStorageAndSignIn = () => {
  const navigate = useNavigate()

  const setTastingSheetAndSignIn = (tastingSheet: TastingSheet) => {
    window.localStorage.setItem(TASTING_SHEET_KEY, JSON.stringify(tastingSheet))
    navigate('/login')
  }

  return {
    setTastingSheetAndSignIn
  }
}

export default useSetSheetToLocalStorageAndSignIn
