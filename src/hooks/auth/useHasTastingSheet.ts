import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import useTastingSheetsContext from '../context/useTastingSheetsContext'

const useHasTastingSheet = () => {
  const { tastingSheetId } = useParams()
  const { tastingSheets } = useTastingSheetsContext()
  const target = Number(tastingSheetId)
  const hasTastingSheet = tastingSheets.some((sheet) => sheet.id === target)
  const navigate = useNavigate()

  useEffect(() => {
    if (!Number.isNaN(target) && !hasTastingSheet) navigate('/')
  }, [hasTastingSheet, navigate, target])
}

export default useHasTastingSheet
