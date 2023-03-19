import { useLocation } from 'react-router-dom'

const NEW_TASTING_SHEETS_PATH = '/tasting_sheets/new'
const WINE_PATH = '/wines'

const useCheckEditingForm = () => {
  const { pathname } = useLocation()

  return {
    isEditing: pathname === NEW_TASTING_SHEETS_PATH || pathname.includes(WINE_PATH)
  }
}

export default useCheckEditingForm
