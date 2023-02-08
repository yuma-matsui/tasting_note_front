import { useNavigate } from 'react-router-dom'
import useUserContext from '../useUserContext'
import useTastingSheetContext from './useTastingSheetContext'

const usePostTastingSheet = () => {
  const navigate = useNavigate()
  const { tastingSheet } = useTastingSheetContext()
  const { user } = useUserContext()

  const postTastingSheet = () => {
    console.log('APIリクエスト', tastingSheet, user)
    navigate('/')
  }

  return {
    postTastingSheet
  }
}

export default usePostTastingSheet
